import React, { useState, useRef, useEffect } from "react";
import Aurora from "../Aurora/Aurora";
import Loader from "../Loader/Loader";
import { useSelector } from "react-redux";

const VoiceAssistant = () => {

    const mode = useSelector((state) => state.mode.mode)

    const [text, setText] = useState("");
    const [isListening, setIsListening] = useState(false);
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    //in this we are storing the users input voice , to display in the UI
    const [liveTranscript, setLiveTranscript] = useState("");

    const recognitionRef = useRef(null);
    const voicesRef = useRef([]);

    // Load voices once when component mounts
    useEffect(() => {
        const loadVoices = () => {
            voicesRef.current = window.speechSynthesis.getVoices();
        };

        if (window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = loadVoices;
        }

        loadVoices();
    }, []);


    const speakText = (text) => {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);
        const voices = voicesRef.current;

        // Picking a good English voice
        const selectedVoice =
            voices.find(v => v.lang === "en-US" && v.name.toLowerCase().includes("female")) ||
            voices.find(v => v.lang === "en-US") ||
            voices[0];

        if (selectedVoice) {
            utterance.voice = selectedVoice;
        }

        //Speaks the lines
        synth.speak(utterance);
    };

    const sendMessage = async (userInput) => {

        //if we dont have any user input , or it is empty then return from this function
        if (!userInput.trim()) return;

        const newMessages = [...messages, { role: "user", content: userInput }];
        setMessages(newMessages);
        setLoading(true);

        try {
            const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${import.meta.env.VITE_GROQAPI_KEY}`,
                },
                body: JSON.stringify({
                    model: "llama3-70b-8192",
                    messages: newMessages,
                }),
            });

            const data = await res.json();
            const reply = data.choices?.[0]?.message?.content;

            //calling speakText function , to read aloud the response from API
            speakText(reply); 

            setMessages(prev => [...prev, { role: "assistant", content: reply }]);

        } catch (err) {
            // console.error("Error fetching Groq response:", err);
            toast("Something went wrong")
        } finally {
            setLoading(false);
            setText("");
        }
    };

    const initializeRecognition = () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();

        recognition.continuous = false; // To Stop listening after the user finishes speaking.
        recognition.interimResults = false;
        recognition.lang = "en-US"; //Setting recognition language to English (US).

        recognition.onstart = () => {
            setIsListening(true);
            // console.log("🎤 Listening...");
        };

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript; // In this variable , we are holding the voice to text message
            // console.log("Transcript:", transcript);

            setText(transcript);
            recognitionRef.current.transcript = transcript; //This stores the transcript in a ref, so it can be used after recognition ends (inside onend).

            //here we sre getting the live text input , to display in the UI , In the next 15 lines of code
            let interimTranscript = "";
            let finalTranscript = "";

            for (let i = event.resultIndex; i < event.results.length; ++i) {
                const transcript = event.results[i][0].transcript;
                if (event.results[i].isFinal) {
                    finalTranscript += transcript;
                } else {
                    interimTranscript += transcript;
                }
            }

            // Combine them if you want both live and confirmed text
            const liveText = finalTranscript + interimTranscript;

            // To Display liveText in UI 
            setLiveTranscript(liveText);

        };

        recognition.onend = () => {
            setIsListening(false);
            const finalTranscript = recognitionRef.current.transcript || "";
            // console.log("🎤 Stopped. Sending:", finalTranscript);

            const lowerTranscript = finalTranscript.toLowerCase();

            if (lowerTranscript.includes("open youtube")) {
                const utterance = new SpeechSynthesisUtterance("Opening YouTube");
                speechSynthesis.speak(utterance);
                window.open("https://www.youtube.com", "_blank");
            } else if (lowerTranscript.includes("open instagram")) {
                const utterance = new SpeechSynthesisUtterance("Opening Instagram");
                speechSynthesis.speak(utterance);
                window.open("https://www.instagram.com/", "_blank");
            } else if (lowerTranscript.includes("open github") || lowerTranscript.includes("open githab")) {
                const utterance = new SpeechSynthesisUtterance("Opening GitHub");
                speechSynthesis.speak(utterance);
                window.open("https://github.com/", "_blank");
            } else if (lowerTranscript.includes("open linkedin")) {
                const utterance = new SpeechSynthesisUtterance("Opening Linkedin");
                speechSynthesis.speak(utterance);
                window.open("https://www.linkedin.com/feed/", "_blank");
            } else if (lowerTranscript.includes("open facebook")) {
                const utterance = new SpeechSynthesisUtterance("Opening Facebook");
                speechSynthesis.speak(utterance);
                window.open("https://www.facebook.com/", "_blank");
            } else {
                sendMessage(finalTranscript);
            }

            recognitionRef.current.transcript = "";
        };

        //For handling error
        recognition.onerror = (event) => {
            console.error("Speech recognition error:", event.error);
            toast("Something went wrong")
            setIsListening(false);
        };

        recognitionRef.current = recognition;
    };

    const handleStartListening = () => {
        setLiveTranscript("")
        if (!recognitionRef.current) {
            initializeRecognition();
        }
        recognitionRef.current.start();
    };


    return (
        <>
            <div className='fixed top-20 right-0 z-100'>
                {loading && <Loader />}
            </div>

            <div className="mt-15 h-screen flex justify-center overflow-x-hidden">

                <div className={`absolute top-[20%] md:top-[30%]  rounded-3xl flex flex-col p-5 gap-5 lg:gap-8 items-center justify-center 
                    ${mode == 'dark' ? 'lg:bg-[#0f0f0f]' : 'bg-[#a1a1a1]'} `}>
                    <div className=" text-5xl md:text-6xl  lg:text-7xl font-bold md:text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                        Welcome to Zeno Assistant
                    </div>
                    <div className={`flex gap-2 `}>
                        <div className={`gap-5 border-gray-600 cursor-pointer  border-2 rounded-3xl p-3 lg:p-5 text-2xl  flex items-center justify-center
                           ${mode == 'dark' ? 'text-gray-400 hover:bg-[#1f1f1f]' : 'text-black hover:bg-[#a1a1a1]'} `} >
                            <div className="hidden lg:flex">
                                <i className="fa-solid fa-phone-volume "></i>
                            </div>
                            <p>Ask Anything You Want !!</p>
                        </div>
                        <div className={`gap-5 border-gray-600 cursor-pointer  border-2 rounded-3xl p-3 lg:p-5 text-2xl  flex items-center justify-center
                               ${mode == 'dark' ? 'text-gray-400 hover:bg-[#1f1f1f]' : 'text-black hover:bg-[#a1a1a1]'}  `}>
                            <div className="hidden lg:flex">
                                <i className="fa-solid fa-map-pin "></i>
                            </div>
                            <p>Navigate to any websites</p>
                        </div>

                    </div>
                </div>

                {/* rendering the aurora , when user gives voice command */}
                <div className="hidden md:flex">{
                    isListening && <Aurora colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                        blend={0.5}
                        amplitude={1.0}
                        speed={0.5} />
                }
                </div>


                <div className="absolute bottom-20 flex flex-col items-center justify-center gap-3 lg:gap-5">

                    <div className="text-2xl text-gray-400">
                        {
                            isListening ? <p>Listening...</p> : liveTranscript}
                    </div>

                    <div className="flex items-center justify-center rounded-full  h-20 w-20  bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-500  hover:shadow-[0_0_20px_2px_#ec4899]"
                        onClick={handleStartListening}
                        disabled={isListening}
                    >
                        <i className="fa-solid fa-microphone text-3xl"></i>
                    </div>

                </div>

            </div>

        </>


    );
};

export default VoiceAssistant;

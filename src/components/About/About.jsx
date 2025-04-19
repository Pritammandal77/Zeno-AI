import React from "react";
import { useSelector } from "react-redux";

function About() {

  const mode = useSelector((state) => state.mode.mode)

  return (
    <>
      <div className="lg:py-20">
        <div className=" h-[15vh]  mt-[90px] w-full flex justify-center ">
          <div className=" lg:w-[60vw] flex lg: items-center lg:justify-center lg:mb-2.5">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              About Zeno
            </h1>
          </div>
        </div>

        <div className=" flex flex-col lg:flex-row justify-center items-center ">
          <div className={`h-[300px] w-[300px] border-1 border-pink-500  flex flex-col items-center rounded-2xl hover:shadow-[0_0_15px_2px_#ec4899] mt-6  
           ${mode == 'dark' ? '#bg-[#1a1a1a]' : 'bg-[#cdcdcd] border-2'}`}>
            <div className="h-[20px] ml-2 mt-2.5 font-extrabold text-2xl mb-2.5 ">
              ℹ️ About
            </div>
            <div className="text-[15px] m-3  text-justify">
              Our chatbot is built with cutting-edge features to provide a smart
              and seamless experience. Powered by the Grok AI API, it understands
              and responds to user queries with impressive accuracy. To take user
              interaction a step further, we’ve integrated a voice assistant,
              allowing hands-free communication and real-time responses.
            </div>
          </div>

          <div className={`h-[300px] w-[300px] border-1 border-purple-500 mt-6 lg:ml-9 flex flex-col items-center rounded-2xl hover:shadow-[0_0_20px_2px_#8b5cf6] 
           ${mode == 'dark' ? '#bg-[#1a1a1a]' : 'bg-[#cdcdcd] border-2'}`}>
            <div className="h-[20px]  mt-2.5 font-extrabold text-2xl ">
              ⚡Key Features
            </div>

            <div className=" mt-[20px]  p-2 flex flex-col justify-center items-center ">

              <div className="flex flex-col ">
                <p className="text-justify"> 1. Grok API Integration : Get smart and context-aware answers powered by Groq AI.</p>
              </div>

              <div className="flex flex-col ">
                <p className="text-justify"> 2. Voice Assistant : Talk naturally in english and get instant voice responses from the chatbot.</p>
              </div>

              <div className="flex flex-col ">
                <p className="text-justify"> 3. UI & UX :  Clean, intuitive design & Integrated Dark/Light mode toggle for better User Experience.</p>
              </div>
            </div>

          </div>

          <div className={`h-[300px] w-[300px] border-1 border-[#00ff48] mt-6 lg:ml-9 flex flex-col items-center rounded-2xl hover:shadow-[0_0_20px_2px_#00ff48] p-1
           ${mode == 'dark' ? '#bg-[#1a1a1a]' : 'bg-[#cdcdcd] border-2'}`}>
            <div className="h-[20px]  mt-2.5 font-extrabold text-2xl ">
              ⚙️ Tech Stack
            </div>

            <div className=" mt-[20px]  p-2 flex flex-col justify-center ">

              <div className="flex flex-col ">
                <p className="text-justify"> 1. React.js : For UI Elements.</p>
              </div>

              <div className="flex flex-col ">
                <p className="text-justify"> 2. Tailwind CSS: For Styling.</p>
              </div>

              <div className="flex flex-col ">
                <p className="text-justify"> 3.Redux Toolkit: For global State Management.</p>
              </div>

              <div className="flex flex-col ">
                <p className="text-justify"> 3. Grok API : For generating intelligent, real-time AI responses.</p>
              </div>

              <div className="flex flex-col ">
                <p className="text-justify"> 3. Web Speech API: For enabling voice input and speech synthesis in the chatbot.</p>
              </div>
            </div>

          </div>

          <div className={`h-[300px] w-[300px] border-1 border-pink-500 m-2.5 lg:ml-9 mt-6 flex flex-col items-center rounded-2xl hover:shadow-[0_0_20px_2px_#ec4899] 
          ${mode == 'dark' ? '#bg-[#1a1a1a]' : 'bg-[#cdcdcd] border-2'}`}>
            <div className="h-[20px] ml-2 mt-3 font-extrabold text-2xl">
              👨‍💻Meet the Team
            </div>

            <div className=" mt-[60px]  flex flex-col justify-center items-center text-xl">
              <div className="m-2.5">
                <a
                  className="font-bold"
                  href="https://www.linkedin.com/in/pritam-mandal-871510281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                >
                  Pritam Mandal
                </a>
              </div>
              <div className="m-2.5">
                <a
                  className="font-bold"
                  href="https://www.linkedin.com/in/shriharsh-nandigamwar-b106702b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                >
                  Shriharsh Nandigamwar
                </a>
              </div>
              <div className="m-2.5">
                <a
                  className="font-bold"
                  href="http://www.linkedin.com/in/harshal-patil-56a0b2293"
                >
                  Harshal Patil
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex justify-center w-[100%] p-2 font-serif text-2xl lg:mt-35 ">
          <a href="https://github.com/Pritammandal77/Zeno-AI">
            <i className="fa-brands fa-github text-5xl"></i>
          </a>
        </div>

        <div className="mt-6 flex flex-clo justify-center w-[100%] p-2 font-mono text-xl lg:mt-10">
          <p>&copy; 2025 Zeno-AI. All rights reserved.</p>
        </div>
      </div>

    </>
  );
}

export default About;

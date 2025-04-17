import React, { useEffect, useState } from 'react';
import './Chat.css'
import ReactMarkdown from 'react-markdown';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';

function Chat() {

  const mode = useSelector((state) => state.mode.mode)

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
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
      // console.log(reply)
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);

    } catch (err) {
      console.error("Error:", err);

    } finally {
      setLoading(false);
    }
  };

  let user = document.querySelector(".user")
  let assistant = document.querySelectorAll(".assistant")



  useEffect(() => {
    // console.log(assistant)

    if (assistant) {
      assistant.forEach(el => {
        el.style.backgroundColor = mode === 'dark' ? '#151515' : '#48fd91'
        el.style.color = mode === 'dark' ? '#ffffff' : '#000000'
      })
    }
    if (user) {
      user.style.color = mode === 'dark' ? '#ffffff' : '#000000'
    }
  }, [mode, messages, input, loading])


  return (
    <>
      <div className='fixed top-20 right-0 z-100'>
        {loading && <Loader/>}
      </div>
      <div className=' h-auto flex items-center justify-center'>

        <div className="chat-container w-[90vw] lg:w-[80vw] pb-50 relative top-10">
          <div className="chat-box">
            {messages.map((msg, i) => (
              <div key={i} className={`msg ${msg.role}`}>
                <strong className=''>{msg.role === "user" ? "You" : "Zeno"} : </strong>
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              </div>
            ))}
          </div>
        </div>

        <div className={`w-screen flex justify-center items-center fixed bottom-0  py-3 lg:p-5
          ${mode == 'dark' ? 'bg-[#01000b]' : 'bg-[#b9c651]'} `}>
          <input type="text" className={`w-[70vw] h-12 rounded-l-xl px-3 lg:px-5 text-[19px] lg:text-[20px] focus:outline-none
          ${mode == 'dark' ? 'bg-[#1e1e1e]' : 'bg-[#f2ff90]'} `}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask something..."
            onKeyDown={(e) => e.key === "Enter" && sendMessage()} />
          <button className={` text-black font-bold h-13 w-[20vw] lg:w-40 rounded-xl text-xl lg:text-2xl relative lg:right-3 cursor-pointer hover:bg-[#7da6ff] z-10
          ${mode == 'dark' ? 'bg-[#7DF5AC]' : 'bg-[#00ff99]'} `}
            onClick={sendMessage}>Search</button>
        </div>
      </div>

    </>
  );
}

export default Chat;

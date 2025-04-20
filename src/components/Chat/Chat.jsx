import React, { useEffect, useState } from 'react';
import './Chat.css'
import ReactMarkdown from 'react-markdown';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import { addUserMessage, fetchAPIData } from '../../features/APIData/APISlice';

function Chat() {

  const mode = useSelector((state) => state.mode.mode)
  const { messages, loading, error } = useSelector((state) => state.APIData)
  const [input, setInput] = useState("");

  const dispatch = useDispatch()

  console.log(messages.length)

  const sendMessage = async () => {

    if (!input.trim()) return;

    dispatch(addUserMessage(input))

    const newMessages = [...messages, { role: "user", content: input }];

    dispatch(fetchAPIData(newMessages));

    setInput("");

  };


  let user = document.querySelector(".user")
  let assistant = document.querySelectorAll(".assistant")

  useEffect(() => {
    if (assistant) {
      assistant.forEach(elem => {
        elem.style.backgroundColor = mode === 'dark' ? '#151515' : '#6B7280'
        elem.style.color = mode === 'dark' ? '#ffffff' : '#000000'
      })
    }
    if (user) {
      user.style.color = mode === 'dark' ? '#ffffff' : '#000000'
    }
  }, [mode, messages, input, loading])


  return (
    <>

      {
        messages.length <= 0 &&  <div className=' h-[50vh] w-screen mt-40 flex flex-col items-center justify-center px-5 gap-5'>
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent'>Start a chat with Zeno</h1>

          <div className={`flex gap-2 `}>
            <div className={`gap-5 border-gray-600 cursor-pointer  border-2 rounded-3xl p-3 lg:p-5 text-2xl  flex items-center justify-center max-w-[45vw]
                           ${mode == 'dark' ? 'text-gray-400 hover:bg-[#1f1f1f]' : 'text-black hover:bg-[#a1a1a1]'} `} >
              <div className="hidden md:flex">
                <i className="fa-solid fa-microchip"></i>
              </div>
              <p>Learn New technology</p>
            </div>
            <div className={`gap-5 border-gray-600 cursor-pointer  border-2 rounded-3xl p-3 lg:p-5 text-2xl  flex items-center justify-center max-w-[45vw]
                               ${mode == 'dark' ? 'text-gray-400 hover:bg-[#1f1f1f]' : 'text-black hover:bg-[#a1a1a1]'}  `}>
              <div className="hidden md:flex">
                <i className="fa-solid fa-code"></i>
              </div>
              <p>Ask About your code</p>
            </div>


          </div>

        </div>
      }


      <div className='fixed top-20 right-0 z-100'>
        {loading && <Loader />}
      </div>

      <div className=' h-auto flex items-center justify-center'>

        <div className="chat-container w-[90vw] lg:w-[80vw] pb-50 relative top-10">
          <div className="chat-box flex flex-col">
            {messages.map((msg, i) => (
              <div key={i} className={`msg ${msg.role}`}>
                <strong className=''>{msg.role === "user" ? "You" : "Zeno"} :  </strong>
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              </div>
            ))}
          </div>
        </div>

        <div className={`w-screen flex justify-center items-center fixed bottom-0 py-4 md:py-5 
          ${mode == 'dark' ? 'bg-[#01000b]' : 'bg-gray-700'} `}>
          <input type="text" className={`w-[70vw] h-12 rounded-l-xl px-3 lg:px-5 text-[19px] lg:text-[20px] focus:outline-none
          ${mode == 'dark' ? 'bg-[#1e1e1e]' : 'bg-gray-500 text-white'} `}
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

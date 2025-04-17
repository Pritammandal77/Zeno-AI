import React from 'react';
import { IoChatbubbleSharp } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Home() {

  const mode = useSelector((state) => state.mode.mode)

  // console.log(mode)



  return (
    <>
      <div className='flex flex-col items-center justify-center h-[90vh] mt-15'>

        <div className='w-full flex justify-center items-center'>
          <div className='pl-10 lg:w-[60vw]'>
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent'>Welcome to Zeno AI</h1>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-medium bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent'>Your Personal AI Assistant !!</h2>
          </div>
        </div>

        <div className='h-[50vh] flex items-center justify-center gap-5 text-black'>

          <NavLink to="/chat">
            <div className='bg-[#7DF5AC] w-[40vw] h-[40vh] lg:w-[30vw] lg:h-[40vh] flex flex-col items-center justify-center lg:flex-row rounded-3xl p-3 lg:p-6 hover:shadow-[0_0_20px_2px_#7DF5AC]'>
              <div>
                <h1 className='text-4xl font-semibold text-center lg:text-justify'>
                  Chat With Zeno !!
                </h1>
              </div>
              <img src="robot.webp" alt="" className='w-35vw lg:w-[15vw] ' />
            </div>
          </NavLink>

          <div className='h-[40vh] flex flex-col justify-between gap-5'>
            <div className='bg-[#BAF288] w-[40vw] lg:w-[30vw] h-[19vh] rounded-2xl p-3 lg:p-10 hover:shadow-[0_0_20px_2px_#BAF288] flex items-center gap-3'>
              <FaMicrophone className='text-2xl' />
              <h1 className='text-3xl font-semibold'>Talk With Zeno</h1>
            </div>
            <div className='bg-[#76ffd8] w-[40vw] lg:w-[30vw] h-[19vh] rounded-2xl p-2 lg:p-10 hover:shadow-[0_0_20px_2px_#76ffd8]  flex items-center gap-3'>
              <i className="fa-solid fa-info-circle text-2xl "></i>
              <h1 className='text-3xl font-semibold'>Know About Zeno</h1>
            </div>
          </div>

        </div>

      </div >

    </>
  );
}

export default Home;

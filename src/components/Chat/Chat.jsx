import React from 'react';

function Chat() {
  return (
    <>
      <div className='text-white w-screen flex justify-center items-center absolute bottom-7'>
        <input type="text" className='text-white bg-[#1e1e1e] w-[70vw] h-12 rounded-l-xl px-3 lg:px-5 text-[19px] lg:text-[20px]' />
        <button className='bg-[#7DF5AC] text-black font-bold h-13 w-[20vw] lg:w-40 rounded-xl text-xl relative lg:right-3 '>Search</button>
      </div>
    </>
  );
}

export default Chat;

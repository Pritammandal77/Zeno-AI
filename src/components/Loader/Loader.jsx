import React from 'react';
import './Loader.css'
import { useSelector } from 'react-redux';

function Loader() {

    const currentMode = useSelector((state) => state.mode.mode)

    return (
        <>
            <div className='h-[80vh] w-screen flex items-center justify-center'>
                <div className="loader">
                    <div className={`bar1  ${currentMode == 'dark' ? 'bg-[white]' : 'bg-black'}`}></div>
                    <div className={`bar2 ${currentMode == 'dark' ? 'bg-[white]' : 'bg-black'}`}></div>
                    <div className={`bar3  ${currentMode == 'dark' ? 'bg-[white]' : 'bg-black'}`}></div>
                    <div className={`bar4  ${currentMode == 'dark' ? 'bg-[white]' : 'bg-black'}`}></div>
                    <div className={`bar5  ${currentMode == 'dark' ? 'bg-[white]' : 'bg-black'}`}></div>
                    <div className={`bar6  ${currentMode == 'dark' ? 'bg-[white]' : 'bg-black'}`}></div>
                    <div className={`bar7  ${currentMode == 'dark' ? 'bg-[white]' : 'bg-black'}`}></div>
                    <div className={`bar8  ${currentMode == 'dark' ? 'bg-[white]' : 'bg-black'}`}></div>
                    <div className={`bar9  ${currentMode == 'dark' ? 'bg-[white]' : 'bg-black'}`}></div>
                    <div className={`bar10  ${currentMode == 'dark' ? 'bg-[white]' : 'bg-black'}`}></div>
                    <div className={`bar11  ${currentMode == 'dark' ? 'bg-[white]' : 'bg-black'}`}></div>
                    <div className={`bar12  ${currentMode == 'dark' ? 'bg-[white]' : 'bg-black'}`}></div>
                </div>
            </div>


        </>
    );
}

export default Loader;

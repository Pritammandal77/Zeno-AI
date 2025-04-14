import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

function Header() {

    const HandleOpenHamburger = () => {
        let hamburger = document.querySelector(".hamburger")
        hamburger.style.display = "flex"
    }

    const HandleCloseHamburger = () => {
        let hamburger = document.querySelector(".hamburger")
        hamburger.style.display = "none"
    }

    return (
        <>
            <nav className='h-15 bg-[#1b1b1b] flex justify-between px-10 items-center'>
                <div className='text-3xl font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent'>
                    <NavLink to="/">Zeno</NavLink>
                </div>
                <div className='hidden lg:flex'>
                    <ul className='flex gap-15 text-2xl text-white'>
                        <NavLink to='/'
                            style={({ isActive }) => ({
                                color: isActive ? "#b432ff" : "white",
                                fontWeight: isActive ? "600" : "400",
                            })}>
                            <li className='cursor-pointer'>Home</li>
                        </NavLink>
                        <NavLink to='/chat'
                            style={({ isActive }) => ({
                                color: isActive ? "#b432ff" : "white",
                                fontWeight: isActive ? "600" : "400",
                            })}
                        >
                            <li className='cursor-pointer'>Chat</li>
                        </NavLink>
                        <li className='cursor-pointer'>VoiceAssistant</li>
                        <li className='cursor-pointer'>About</li>
                    </ul>
                </div>

                <div className="iconToOpenHamburger relative left-5 lg:hidden">
                    <i className="fa-solid fa-bars text-[25px] mr-0 cursor-pointer" id='menuIcon' style={{ color: 'white' }} onClick={HandleOpenHamburger}></i>
                </div>

                <div className='hamburger absolute top-0 right-0 bg-black z-100 h-[100vh] w-[50vw] hidden'>
                    <i className="fa-solid fa-xmark text-white  
                                text-[25px] cursor-pointer absolute top-4 right-4" onClick={HandleCloseHamburger}></i>
                    <div className='mt-20 p-5'>
                        <ul className='flex gap-15 text-2xl text-white flex-col '>
                            <NavLink to="/"
                                style={({ isActive }) => ({
                                    color: isActive ? "#b432ff" : "white",
                                    fontWeight: isActive ? "600" : "400",
                                })}>
                                <li className='cursor-pointer' onClick={HandleCloseHamburger}>Home</li>
                            </NavLink>
                            <NavLink to="/chat"
                                style={({ isActive }) => ({
                                    color: isActive ? "#b432ff" : "white",
                                    fontWeight: isActive ? "600" : "400",
                                })}>
                                <li className='cursor-pointer' onClick={HandleCloseHamburger}>Chat</li>
                            </NavLink>
                            <li className='cursor-pointer'>VoiceAssistant</li>
                            <li className='cursor-pointer'>About</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;

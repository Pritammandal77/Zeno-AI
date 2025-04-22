import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../../features/Mode/ModeSlice';

function Header() {

    const mode = useSelector((state) => state.mode.mode)
    const dispatch = useDispatch()

    const HandleOpenHamburger = () => {
        let hamburger = document.querySelector(".hamburger")
        hamburger.style.display = "flex"
    }

    const HandleCloseHamburger = () => {
        let hamburger = document.querySelector(".hamburger")
        hamburger.style.display = "none"
    }

    const changeMode = () => {
        if (mode === 'dark') {
            dispatch(setMode('light'))
        } else if (mode === 'light') {
            dispatch(setMode('dark'))
        }
    }

    if (mode == 'dark') {
        document.body.style.backgroundColor = '#01000b'
        document.body.style.color = "white"
    } else {
        document.body.style.backgroundColor = '#e3e3e3'
        document.body.style.color = "black"

    }

    return (
        <>
            <nav className={`h-15  flex justify-between px-10 items-center fixed top-0 w-screen z-100
                    ${mode == 'dark' ? 'bg-[#1b1b1b]' : 'bg-gray-700 text-white'}        `}>
                <div className='text-3xl font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent'>
                    <NavLink to="/">Zeno</NavLink>
                </div>
                <div className='hidden lg:flex'>
                    <ul className='flex gap-15 text-2xl items-center'>
                        <NavLink to='/'
                            style={({ isActive }) => ({
                                color: isActive && "#b432ff",
                                fontWeight: isActive ? "600" : "400",
                            })}>
                            <li className="cursor-pointer ">Home</li>
                        </NavLink>
                        <NavLink to='/chat'
                            style={({ isActive }) => ({
                                color: isActive && "#b432ff",
                                fontWeight: isActive ? "600" : "400",
                            })}
                        >
                            <li className='cursor-pointer '>Chat</li>
                        </NavLink>
                        <NavLink to='/assistant'
                            style={({ isActive }) => ({
                                color: isActive && "#b432ff",
                                fontWeight: isActive ? "600" : "400",
                            })}
                        >
                            <li className='cursor-pointer '>Assistant</li>
                        </NavLink>
                        <NavLink to='/about'
                            style={({ isActive }) => ({
                                color: isActive && "#b432ff",
                                fontWeight: isActive ? "600" : "400",
                            })}
                        >
                            <li className='cursor-pointer '>About</li>
                        </NavLink>
                        <li className='cursor-pointer flex items-center justify-center'>
                            <a href="https://github.com/Pritammandal77/Zeno-AI" target='_blank'>
                            <i className="fa-brands fa-github "></i>
                            </a>
                        </li>
                        <li className='cursor-pointer flex items-center justify-center'>
                            <label className="switch">
                                <input type="checkbox" onChange={changeMode} />
                                <span className="slider"></span>
                            </label>
                        </li>
                    </ul>
                </div>

                <div className="iconToOpenHamburger relative left-5 lg:hidden">
                    <i className="fa-solid fa-bars text-[25px] mr-0 cursor-pointer" id='menuIcon' style={{ color: 'white' }} onClick={HandleOpenHamburger}></i>
                </div>

                <div className={`hamburger absolute top-0 right-0 z-100 h-[100vh] w-[50vw] hidden
                    ${mode == 'dark' ? 'bg-black' : 'bg-gray-700 text-white'} `}>
                    <i className="fa-solid fa-xmark text-white  
                                text-[25px] cursor-pointer absolute top-4 right-4" onClick={HandleCloseHamburger}></i>
                    <div className='mt-20 p-5'>
                        <ul className='flex gap-15 text-2xl flex-col '>
                            <NavLink to="/"
                                style={({ isActive }) => ({
                                    color: isActive && "#b432ff",
                                    fontWeight: isActive ? "600" : "400",
                                })}>
                                <li className='cursor-pointer' onClick={HandleCloseHamburger}>Home</li>
                            </NavLink>
                            <NavLink to="/chat"
                                style={({ isActive }) => ({
                                    color: isActive && "#b432ff",
                                    fontWeight: isActive ? "600" : "400",
                                })}>
                                <li className='cursor-pointer' onClick={HandleCloseHamburger}>Chat</li>
                            </NavLink>
                            <NavLink to='/assistant'
                                style={({ isActive }) => ({
                                    color: isActive && "#b432ff",
                                    fontWeight: isActive ? "600" : "400",
                                })}
                            >
                                <li className='cursor-pointer ' onClick={HandleCloseHamburger}>Assistant</li>
                            </NavLink>
                            <NavLink to='/about'
                                style={({ isActive }) => ({
                                    color: isActive && "#b432ff",
                                    fontWeight: isActive ? "600" : "400",
                                })}
                            >
                                <li className='cursor-pointer ' onClick={HandleCloseHamburger}>About</li>
                            </NavLink>
                            <li className='cursor-pointer' onClick={HandleCloseHamburger}>
                                <label className="switch">
                                    <input type="checkbox" onChange={changeMode} />
                                    <span className="slider"></span>
                                </label>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;

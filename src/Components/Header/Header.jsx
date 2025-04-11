import React from "react";

function Header() {
  return (
    <>
      <div>
        <nav className="nav1 justify-center items-center p-3 rounded-b-lg bg-[#131111] ">
          <ul className="list-none m-0 p-0 flex justify-around">
            <li className="inline mt-1.5">
              <a
                className="no-underline  border-0 bg-[#1a1a1a] text-white rounded-[5px] px-[10px] py-[10px] relative "
                href="#"
              >
                Home
              </a>
            </li>
            <li className="inline mt-1.5">
              <a
                className="no-underline border-0 bg-[#1a1a1a] text-white rounded-[5px] px-[10px] py-[10px] relative "
                href="#"
              >
                About
              </a>
            </li>
            <li className="inline mt-1.5">
              <a
                className="no-underline border-0 bg-[#1a1a1a] text-white rounded-[5px] px-[10px] py-[10px] relative "
                href="#"
              >
                Zeno-AI
              </a>
            </li>
            <li className="inline ">

              <button className="bg-blue-600 text-white border-0 px-[10px] py-[10px] rounded-[5px] cursor-pointer">Login</button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;

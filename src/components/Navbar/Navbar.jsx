import React, { useState, useReducer, useEffect } from "react";
import "../Navbar/navbar.css";
import logo from "../assets/logo4.png";

function Navbar() {
  const contact = document.querySelectorAll("#contact");

  const [toggle, useToogle] = useState(true);

  function isToggle() {
    useToogle((value) => !value);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
      }
    };

    window.addEventListener("resize", handleResize);
  }, []);

  const without = {
    div1: " relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-[#21209C] ring-0 ring-gray-300 hover:ring-8  ring-opacity-30 duration-200 shadow-md",

    div3: "bg-white h-[2px] w-7 transform transition-all duration-300 origin-left",
    div4: "bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 ",
    div5: "bg-white h-[2px] w-7 transform transition-all duration-300 origin-left",
  };
  const rotate = {
    div1: " relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-[#21209C] ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md",

    div3: "bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg]",
    div4: "bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-translate-x-10",
    div5: "bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg] ",
  };

  return (
    <div className="w-full  bg-white">
      <nav className="lg:px-16 px-6 w-10/12   mx-auto   flex flex-wrap items-center lg:py-0 py-2">
        <div className="flex-1 flex justify-between items-center">
          <a href="/" className="flex text-lg font-semibold">
            <img src={logo} width="135" className="p-2" alt="" />
          </a>
        </div>
        <label onClick={isToggle} className="cursor-pointer lg:hidden block">
          <button className="relative group ">
            <div className={toggle ? without.div1 : rotate.div1}>
              <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                <div className={toggle ? without.div3 : rotate.div3}></div>
                <div className={toggle ? without.div4 : rotate.div4}></div>
                <div className={toggle ? without.div5 : rotate.div5}></div>
              </div>
            </div>
          </button>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />
        <div
          className={
            toggle
              ? "hidden lg:flex lg:items-center lg:w-auto w-full "
              : "lg:flex lg:items-center  w-full bg-white rounded-xl"
          }
          id="menu"
        >
          <nav className="max-lg:absolute max-lg:left-0 max-lg:w-full max-lg:bg-white">
            <ul className="  text-xl  text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex lg:pt-0">
              <li className="py-2 lg:py-0  text-black max-lg:hover:bg-[#21209C]  max-lg:hover:text-white">
                <a
                  className="  text-2xl   hover:pb-4 hover:border-b-4  md:hover:border-[#21209C] "
                  href="/"
                >
                  Inicio
                </a>
              </li>
              <li className="py-2 lg:py-0  text-black max-lg:hover:bg-[#21209C]  max-lg:hover:text-white">
                <a
                  className=" text-2xl  hover:pb-4 hover:border-b-4  md:hover:border-[#21209C]"
                  href="#nostros"
                >
                  Nosotros
                </a>
              </li>
              <li className="py-2 lg:py-0  text-black max-lg:hover:bg-[#21209C]  max-lg:hover:text-white">
                <a
                  className="text-2xl hover:pb-4 hover:border-b-4 md:hover:border-[#21209C]"
                  href="#contact"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

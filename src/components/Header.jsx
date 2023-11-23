import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../public/logo.jpg";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className='mt-4 text-white items-center w-full h-20 flex justify-between px-8 md:justify-around flex-row'>
      <div>
        <img className='h-16 rounded-md' src={logo} alt='logo' />
      </div>
      <div className='hidden md:block'>
        <ul className='text-xl flex justify-around flex-row'>
          <li
            onClick={() => navigate("/")}
            className='mr-14 cursor-pointer hover:text-orange-400'
          >
            Home
          </li>
          <li
            onClick={() => navigate("/about-me")}
            className='mr-14 cursor-pointer hover:text-orange-400'
          >
            About me
          </li>
          <li
            onClick={() => navigate("/services")}
            className='cursor-pointer hover:text-orange-400'
          >
            Services
          </li>
        </ul>
      </div>
      <div className='border-2 p-3 hidden md:block'>APPOINTMENT</div>

      <div className='md:hidden'>
        <button
          onClick={handleToggleMobileMenu}
          className='text-white focus:outline-none text-2xl'
        >
          ☰
        </button>
      </div>

      <div
        className={`md:hidden w-full z-30 bg-stone-800 absolute left-0 top-24 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className='text-xl flex flex-col items-center '>
          <li
            onClick={() => navigate("/")}
            className='py-3 border-b-2 w-full text-center hover:border-orange-300 cursor-pointer hover:text-orange-400'
          >
            Home
          </li>
          <li
            onClick={() => navigate("/about-me")}
            className='py-3 border-b-2 w-full text-center hover:border-orange-300 cursor-pointer hover:text-orange-400'
          >
            About me
          </li>
          <li
            onClick={() => navigate("/services")}
            className='py-3 border-b-2 w-full text-center hover:border-orange-300 cursor-pointer hover:text-orange-400'
          >
            Services
          </li>
          <li
            onClick={() => navigate("/")}
            className='py-3 border-b-2 w-full text-center hover:border-orange-300 cursor-pointer hover:text-orange-400'
          >
            APPOINTMENT
          </li>
        </ul>
      </div>
    </header>
  );
}

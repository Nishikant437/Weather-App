import React from 'react';
import Weather_Logo from '../assets/Weather_Logo.png'
//import ThemeToggle from './ThemeToggle';
import Search from './Search';
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMdLogIn } from "react-icons/io";
const Header = () => {
  return (
    <header className="bg-neutral-100 w-full h-27 shadow-md fixed top-0 left-0 z-50 flex justify-center items-center">
        <div className="container mx-auto flex items-center rounded px-2.5 py-0 justify-between">
            {/* Logo */}
            <div className="h-full mt-0 flex justify-center items-cente gap-1 cursor-pointer">
                <img
                    src={Weather_Logo}
                    height={20}
                    width={110}
                    alt="Weather Logo"
                />
                <p className="text-4xl font-semibold mt-3 h-24 bg-neutral-100 text-red-600 hover:bg-amber-50 rounded-md">
                    <h1>MyWeather</h1>
                    <h2 className="flex justify-center">App</h2>
                </p>
            </div>

            {/* Theme Toggle */}
            {/* <div>
                <ThemeToggle/>
            </div> */}
            
            {/* Search Bar */}
            <div>
                <Search/>
            </div>

            {/* Login */}
            <div className="gap-5 flex justify-center items-center">
                <button className=" gap-2 bg-green-500 hover:bg-green-600 rounded h-8 p-4 flex justify-center items-center cursor-pointer">
                    <div className="animate-bounce">
                        <IoMdLogIn size={20}/>
                        
                    </div>    
                    <p className="font-semibold text-neutral-950">Login</p>
                </button>

                <button className="px-4 cursor-pointer hover:text-yellow-500">
                    <FaRegCircleUser size={30}/>
                </button>
            </div>

        </div>
    </header>
  )
}

export default Header

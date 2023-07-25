import React, { useState } from "react";
import Logo from "/Logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <div className="hidden lg:block">
        <div className="p-10 bg-neutral-800 flex flex-col justify-between w-72 h-screen text-neutral-50 shadow-xl fixed z-50">
          <div>
            <img src={Logo} alt="" className="rounded-lg mb-5" />
            <div className="flex flex-col gap-3">
              <Link to ="/home" className="text-xl p-3 m-2 hover:translate-x-2 hover:bg-orange-600/90 hover:rounded-md transition-transform duration-300">HOME</Link>
              <Link to ="/form" className="text-xl p-3 m-2 hover:translate-x-2 hover:bg-orange-600/90 hover:rounded-md transition-transform duration-300">FORM</Link>
              <Link to ="/dashboard" className="text-xl p-3 m-2 hover:translate-x-2 hover:bg-orange-600/90 hover:rounded-md transition-transform duration-300">DASHBOARD</Link>
              <Link to ="/analytics" className="text-xl p-3 m-2 hover:translate-x-2 hover:bg-orange-600/90 hover:rounded-md transition-transform duration-300">ANALYTICS</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <Link to="/login" className="text-xl p-3 m-2 hover:translate-x-2 hover:bg-orange-600/90 hover:rounded-md transition-transform duration-300">LOGOUT</Link>
          </div>
        </div>
      </div>

      {/* Responsive Sidebar */}
      <AiOutlineMenu
        size={50}
        onClick={handleNav}
        className="fixed top-4 right-4 z-[99] lg:hidden bg-white rounded p-2 cursor-pointer"
      />
      {nav ? (
        <div className="p-10 bg-neutral-800 flex flex-col justify-between items-center w-screen h-screen text-neutral-50 shadow-xl fixed z-50">
          <div>
            <img src={Logo} alt="" className="rounded-lg mb-5 w-[25rem]" />
            <div className="flex flex-col gap-3">
              <Link to ="/home" className="text-xl p-3 m-2 hover:translate-x-2 hover:bg-orange-600/90 hover:rounded-md transition-transform duration-300">HOME</Link>
              <Link to ="/form" className="text-xl p-3 m-2 hover:translate-x-2 hover:bg-orange-600/90 hover:rounded-md transition-transform duration-300">FORM</Link>
              <Link to ="/dashboard" className="text-xl p-3 m-2 hover:translate-x-2 hover:bg-orange-600/90 hover:rounded-md transition-transform duration-300">DASHBOARD</Link>
              <Link to ="/analytics" className="text-xl p-3 m-2 hover:translate-x-2 hover:bg-orange-600/90 hover:rounded-md transition-transform duration-300">ANALYTICS</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <Link to="/login" className="text-xl p-3 m-2 hover:translate-x-2 hover:bg-orange-600/90 hover:rounded-md transition-transform duration-300">LOGOUT</Link>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* /Responsive Sidebar */}
    </div>
  );
}

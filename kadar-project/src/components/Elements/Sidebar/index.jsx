import React, { useState } from "react";
import Logo from "/Logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import Links from "./Links";

export default function Sidebar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <AiOutlineMenu
        size={50}
        onClick={handleNav}
        className="fixed top-4 right-4 z-[99] lg:hidden bg-white rounded p-2 cursor-pointer"
      />
      {nav ? (
        <div className="p-10 bg-neutral-800 flex flex-col justify-between items-center w-screen h-screen text-neutral-50 shadow-xl fixed z-50">
          <div>
            <img src={Logo} alt="" className="rounded-lg mb-5 w-[25rem]" />
            <div>
              <Links To="/home">Home</Links>
              <Links To="/form">Form</Links>
              <Links To="/dashboard">Dashboard</Links>
              <Links To="/analytics">Analytics</Links>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <Links To="/login">Logout</Links>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="hidden lg:block">
        <div className="p-10 bg-neutral-800 flex flex-col justify-between w-80 h-screen text-neutral-50 shadow-xl fixed z-50">
          <div>
            <img src={Logo} alt="" className="rounded-lg mb-5" />
            <div>
              <Links To="/home">Home</Links>
              <Links To="/form">Form</Links>
              <Links To="/dashboard">Dashboard</Links>
              <Links To="/analytics">Analytics</Links>
            </div>
          </div>
          <div className="flex flex-col">
            <Links To="/login">Logout</Links>
          </div>
        </div>
      </div>
    </div>
  );
}

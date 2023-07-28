import React, { useState } from "react";
import Logo from "../assets/logo.png";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineForm,
  AiOutlineDashboard,
  AiOutlineLogout,
} from "react-icons/ai";
import { MdOutlineAnalytics } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div className="fixed">
      <div
        className={` ${
          open ? "w-72" : "w-10"
        } bg-neutral-800 h-screen p-5 pt-8 duration-300 shadow-lg shadow-black flex flex-col justify-between `}
      >
        <AiOutlineMenu
          className={`absolute cursor-pointer -right-3 top-14 border-black bg-white border-2 ${
            !open ? "animate-bounce transform rotate-180" : ""
          }`}
          onClick={() => setOpen(!open)}
          size={30}
        />

        <div
          className={`flex flex-col overflow-hidden text-white ${
            !open && "hidden"
          }`}
        >
          <img src={Logo} alt="logo" />
          <br />
          <Link
            to="/"
            className="flex items-center text-xl p-3 m-2 hover:translate-x-2 hover:bg-orange-600/90 hover:rounded-md transition-transform duration-300"
          >
            <AiOutlineHome className="mr-2" />
            HOME
          </Link>
          <Link
            to="/form"
            className="flex items-center text-xl p-3 m-2 hover:translate-x-2 hover:bg-orange-600/90 hover:rounded-md transition-transform duration-300"
          >
            <AiOutlineForm className="mr-2" />
            FORM
          </Link>
          <Link
            to="/dashboard"
            className="flex items-center text-xl p-3 m-2 hover:translate-x-2 hover:bg-orange-600/90 hover:rounded-md transition-transform duration-300"
          >
            <AiOutlineDashboard className="mr-2" />
            DASHBOARD
          </Link>
          <Link
            to="/analytics"
            className="flex items-center text-xl p-3 m-2 hover:translate-x-2 hover:bg-orange-600/90 hover:rounded-md transition-transform duration-300"
          >
            <MdOutlineAnalytics className="mr-2" />
            ANALYTICS
          </Link>
        </div>
        <div className={`flex flex-col text-white ${!open && "hidden"}`}>
          <Link
            to="/login"
            className="flex items-center text-xl p-3 m-2 hover:translate-x-2 hover:bg-orange-600/90 hover:rounded-md transition-transform duration-300"
          >
            <AiOutlineLogout className="mr-2" />
            LOGOUT
          </Link>
        </div>
      </div>
    </div>
  );
}

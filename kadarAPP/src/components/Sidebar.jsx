import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

import { MdOutlineAnalytics } from "react-icons/md";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineForm,
  AiOutlineDashboard,
  AiOutlineLogout,
  AiOutlineArrowDown,
} from "react-icons/ai";

import Logo from "../assets/logo.png";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility

  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleDashboardClick = () => {
    setShowDropdown(!showDropdown); // Toggle the visibility of the dropdown
  };

  return (
    <div className="fixed">
      <div
        className={`${
          open ? "w-72" : "w-10"
        } bg-neutral-800 h-screen p-5 pt-8 duration-300 shadow-lg shadow-black flex flex-col justify-between transition-all overflow-y-auto`}
      >
        <AiOutlineMenu
          className={`absolute cursor-pointer -right-3 top-14 border-black bg-white border-2 animate-bounce ${
            open ? "animate-none transform rotate-180" : ""
          }`}
          onClick={() => setOpen(!open)}
          size={30}
        />

        <div className={`flex flex-col text-white ${open ? "" : "hidden"}`}>
          <img src={Logo} alt="logo" />
          <br />
          {open && (
            <>
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
              <div
                className="flex items-center justify-between text-xl p-3 m-2 hover:translate-x-2 hover:bg-orange-600/90 hover:rounded-md transition-transform duration-300"
                onClick={handleDashboardClick}
              >
                <div className="flex items-center">
                  <AiOutlineDashboard className="mr-2" />
                  DASHBOARD
                </div>
                <AiOutlineArrowDown className="ml-2" />
              </div>
              {/* Add the dropdown items */}
              {showDropdown && (
                <div className="ml-8 flex flex-col">
                  <Link
                    to="/dashboard"
                    className="text-lg py-2 hover:text-orange-600/90 transition-colors"
                  >
                    Denah Rumah Pungolaka
                  </Link>
                  <Link
                    to="/dashboard/2"
                    className="text-lg py-2 hover:text-orange-600/90 transition-colors"
                  >
                    Item 2
                  </Link>
                  <Link
                    to="/dashboard/3"
                    className="text-lg py-2 hover:text-orange-600/90 transition-colors"
                  >
                    Item 3
                  </Link>
                </div>
              )}

              <Link
                to="/analytics"
                className="flex items-center text-xl p-3 m-2 hover:translate-x-2 hover:bg-orange-600/90 hover:rounded-md transition-transform duration-300"
              >
                <MdOutlineAnalytics className="mr-2" />
                ANALYTICS
              </Link>
            </>
          )}
        </div>

        <div className={`flex flex-col text-white ${open ? "" : "hidden"}`}>
          {open && (
            <button
              onClick={handleLogout}
              className="flex items-center text-xl p-3 m-2 hover:translate-x-2 hover:bg-orange-600/90 hover:rounded-md transition-transform duration-300"
            >
              <AiOutlineLogout className="mr-2" />
              LOGOUT
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

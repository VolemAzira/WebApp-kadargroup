import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import Input from "../components/Elements/Input";
import Logo from "/Logo.png";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-5">
      <form
        action="/home"
        className="w-[25rem] flex flex-col justify-center gap-5 p-10 rounded-2xl bg-neutral-800 text-white shadow-2xl"
      >
        <img src={Logo} alt="Logo" />
        <h1 className="text-xl font-extrabold text-center m-2">LOGIN HERE</h1>

        <Input type="text" id="username" placeholder="Username" />
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Password"
            style="w-full"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute top-3 right-3 text-black text-xl z-30"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <button className="p-2 bg-orange-500 text-white rounded-full hover:bg-zinc-500 transition duration-200">
          Login
        </button>
        <p>
          Don't have an account?{" "}
          <Link to="/register" className="text-sky-500 hover:underline">
            Register Here
          </Link>
        </p>
      </form>
    </div>
  );
}

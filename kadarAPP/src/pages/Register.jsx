import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import Input from "../components/Input";
import Logo from "/Logo.png";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-5">
      <form action="/home" className="w-[25rem] flex flex-col justify-center gap-5 p-10 rounded-2xl bg-neutral-800 text-white shadow-2xl">
        <img src={Logo} alt="Logo" />
        <h1 className="text-xl font-extrabold text-center m-2">
          REGISTER HERE
        </h1>

        <Input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute top-3 right-3 text-black text-xl z-30"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <p>Confirm your password</p>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute top-3 right-3 text-black text-xl z-30"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <button
          type="submit"
          className="p-2 bg-orange-500 text-white rounded-full hover:bg-zinc-500 transition duration-200"
        >
          Register
        </button>
        <p>
          Have an account?{" "}
          <Link to="/login" className="text-sky-500 hover:underline">
            Login Here
          </Link>
        </p>
      </form>
    </div>
  );
}

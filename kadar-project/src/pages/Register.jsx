import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios"; // Import axios for making HTTP requests

import Input from "../components/Elements/Input";
import Logo from "/Logo.png";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://localhost:5000/users", {
        name,
        email,
        password,
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-5">
      <form
        className="w-[25rem] flex flex-col justify-center gap-5 p-10 rounded-2xl bg-neutral-800 text-white shadow-2xl"
        onSubmit={handleSubmit}
      >
        <img src={Logo} alt="Logo" />
        <h1 className="text-xl font-extrabold text-center m-2">REGISTER HERE</h1>

        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
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
            value={password} // Assuming this should be a separate value for confirmation
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
        <button type="submit"  className="p-2 bg-orange-500 text-white rounded-full hover:bg-zinc-500 transition duration-200" >
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

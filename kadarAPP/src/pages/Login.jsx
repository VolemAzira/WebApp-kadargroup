import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import Input from "../components/Input";
import Logo from "../assets/logo.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handeleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  const handleGoogleLogin = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.info(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-5">
      <form
        className="w-[25rem] flex flex-col justify-center gap-5 p-10 rounded-2xl bg-neutral-800 text-white shadow-2xl"
        onSubmit={handeleLogin}
      >
        <img src={Logo} alt="Logo" />

        <Input
          type="email"
          id="username"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Password"
            style="w-full"
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

        <button
          className="p-2 bg-orange-500 text-white rounded-full hover:bg-zinc-500 transition duration-200"
          type="submit"
        >
          Login
        </button>
        <p>
          Don't have an account yet?{" "}
          <Link to="/register" className="text-sky-500 hover:underline">
            Register Here
          </Link>
        </p>
        <hr />
        <button
          className="flex item justify-center gap-3 p-2 bg-slate-100/50 text-white rounded-full hover:bg-zinc-500 transition duration-200"
          type="button"
          onClick={handleGoogleLogin}
        >
          <FcGoogle size={25} /> Login with Google
        </button>
      </form>
    </div>
  );
}

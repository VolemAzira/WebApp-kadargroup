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
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [generalError, setGeneralError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handeleLogin = async (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    setGeneralError("");

    if (!email) {
      setEmailError("Email is required");
      return;
    }

    if (!password) {
      setPasswordError("Password is required");
      return;
    }

    try {
      await signIn(email, password);
      navigate("/");
    } catch (e) {
      if (e.code === "auth/user-not-found") {
        setEmailError("Email is not registered");
      } else if (e.code === "auth/wrong-password") {
        setPasswordError("Incorrect password");
      } else {
        setGeneralError(e.message);
      }
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
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError(""); // Clear email error when input changes
          }}
        />
        {emailError && <p className="text-red-500">{emailError}</p>}

        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Password"
            style="w-full"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError(""); // Clear password error when input changes
            }}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute top-3 right-3 text-black text-xl z-30"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        {passwordError && <p className="text-red-500">{passwordError}</p>}

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

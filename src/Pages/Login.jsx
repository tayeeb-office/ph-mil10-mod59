import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import auth from "../Firebase/firebase.config";
import { AuthContext } from "../Provider/Provider";

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);
  
  const [setEmail] = useState("");

  const {setUser, user, google } = useContext(AuthContext);

  const location = useLocation();

  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const pass = e.target.pass.value;

    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error)
      });
  };

  console.log(user)

  const googleSignin = () =>{
    google()
    .then(res => {
        const user = res.user;
        setUser(user);
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error)
      });
  }

    return (
        <div>
      <title>Login</title>
      <section className=" w-full flex items-center justify-center px-4 py-30">
        <div className="w-full max-w-md rounded-2xl bg-[#1A1E24]/90 shadow-2xl ring-1 ring-white/10 px-6 py-10">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Welcome Back
            </h1>
            <p className="mt-2 text-slate-400">
              Log in to your Pawmart account
            </p>
          </div>

          <form onSubmit={handelSubmit} className="mt-8 space-y-5">
            {/* Email */}
            <div className="space-y-2 flex flex-col gap-1">
              <label className="text-sm font-semibold text-white">
                Email Address
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full h-12 rounded-lg bg-[#0E1B33] text-slate-200 placeholder:text-slate-500 px-4 "
              />
            </div>

            {/* Passoward */}
            <div className="space-y-2 flex flex-col gap-1">
              <label className="text-sm font-semibold text-white">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="pass"
                  placeholder="Write passoward here"
                  className="w-full h-12 rounded-lg bg-[#0E1B33] text-slate-200 placeholder:text-slate-500 px-4 pr-12 "
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(() => !showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 "
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full h-11 rounded-lg bg-[#37EC13] hover:bg-[#37EC13] text-black font-semibold "
            >
              Log In
            </button>

            {/* Google Log in */}
            <button
              type="button" onClick={googleSignin}
              className="w-full h-12 rounded-lg bg-[#0E1B33] hover:bg-[#122241] text-white font-semibold flex items-center justify-center gap-3 "
            >
              <FcGoogle /> Continue with Google
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-400">
            Don’t have an account?
            <Link to="/registration">
              <span className="text-[#37EC13] hover:text-[#37EC13] cursor-pointer font-semibold">
                Sign Up
              </span>
            </Link>
          </p>
        </div>
      </section>
    </div>
    );
};

export default Login;
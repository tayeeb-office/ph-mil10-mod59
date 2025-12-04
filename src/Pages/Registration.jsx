import React, { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/Provider";
import { updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { ImCross } from "react-icons/im";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");

  const { register, setUser, google } = useContext(AuthContext);

  const navigate = useNavigate();

  // const isValid = hasUpper && hasLower && hasSixChars;

  const handelSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const pass = e.target.pass.value;

    const username = e.target.username.value;
    const imageLink = e.target.imageLink.value;

    setError("");

    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;

    if (pass.length <= 6) {
      return setError("Passoword should be more than 6 character");
    } else if (!uppercase.test(pass)) {
      return setError("Passoword should have atleast one uppercase");
    } else if (!lowercase.test(pass)) {
      return setError("Passoword should have atleast one lowercase");
    }

    register(email, pass)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: username,
          photoURL: imageLink,
        })
          .then(() => {
            setUser({ ...auth.currentUser });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const googleSignup = () => {
    google()
      .then((res) => {
        const user = res.user;
        setUser(user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <title>Registration</title>
        <section className=" w-full flex items-center justify-center px-4 py-30">
          <div className="w-full max-w-md rounded-2xl bg-[#1A1E24]/90 shadow-2xl ring-1 ring-white/10 px-6 py-10">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-white">
                Create Your Gamehub Profile
              </h1>
              <p className="text-[14px] mt-2 text-slate-400">
                Join the underground to discover and support new games.
              </p>
            </div>

            <form onSubmit={handelSubmit} className="mt-8 space-y-5">
              {/* Username */}
              <div className="space-y-2 flex flex-col gap-1">
                <label className="text-sm font-semibold text-white">
                  Username
                </label>
                <input
                  name="username"
                  type="text"
                  placeholder="Write username here"
                  className="w-full h-12 rounded-lg bg-[#0E1B33] text-slate-200 placeholder:text-slate-500 px-4 "
                />
              </div>

              {/* Email */}
              <div className="space-y-2 flex flex-col gap-1">
                <label className="text-sm font-semibold text-white">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full h-12 rounded-lg bg-[#0E1B33] text-slate-200 placeholder:text-slate-500 px-4 "
                />
              </div>

              {/* Image */}
              <div className="space-y-2 flex flex-col gap-1">
                <label className="text-sm font-semibold text-white">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="imageLink"
                  placeholder="Write image link here"
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
                    name="pass"
                    type={showPassword ? "text" : "password"}
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

              {/* Pass Validation*/}
              <p className="text-[14px] text-red-500">{error}</p>

              {/* Submit */}
              <button
                type="submit"
                className="w-full h-11 rounded-lg bg-[#37EC13] hover:bg-[#37EC13] text-black font-semibold "
              >
                Create Account
              </button>

              {/* Google Log in */}
              <button
                type="button"
                onClick={googleSignup}
                className="w-full h-12 rounded-lg bg-[#0E1B33] hover:bg-[#122241] text-white font-semibold flex items-center justify-center gap-3 "
              >
                <FcGoogle /> Continue with Google
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-400">
              Already have an account?
              <Link to="/login">
                <span className="text-[#37EC13] hover:text-[#37EC13] cursor-pointer font-semibold">
                  Log In
                </span>
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Registration;

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/Provider";
import logo from "../assets/Logo.png";
import { NavLink } from "react-router";
import { signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const [ischecked, setIsChecked] = useState(false)

   const handel = () =>{
    setIsChecked(!ischecked);
   }

   useEffect ( ()=>{
    const theme = ischecked? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
   },[ischecked])

  const handelSignOut = () => {
    signOut(auth);
  };
  const Links = (
    <>
      <li>
        <NavLink to="/" className="text-base-content font-bold text-l">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/pets&supplies" className="text-base-content font-bold text-l">
          Pets & Supplies
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/addlisting" className="text-base-content font-bold text-l">
            Add Listing
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/mylistings" className="text-base-content font-bold text-l">
            My Listings
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/myorders" className="text-base-content font-bold text-l">
            My Orders
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          <img className=" w-[170px]" src={logo} alt="Logo"></img>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end gap-2">
          <div>
            <label className="flex cursor-pointer gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
              onClick={handel}
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>

          {!user && (
            <NavLink to="/registration" className="btn bg-lime-400 text-black">
              Sign Up
            </NavLink>
          )}

          {!user && (
            <NavLink to="/login" className="btn bg-lime-400 text-black">
              Log In
            </NavLink>
          )}

          {user && (
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
              title={user?.displayName || "User"}
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Avatar"
                  src={
                    user?.photoURL ||
                    "https://i.ibb.co/2yZ3bVP/default-avatar.png"
                  }
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          )}

          {user && (
            <NavLink onClick={handelSignOut} className="btn bg-lime-400 text-black">
              Log out
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import logo from '../assets/Logo.png'
import { NavLink } from "react-router";

const Navbar = () => {
  const Links = (
    <>
      <li>
        <NavLink to="/" className="text-black font-bold text-l">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/pets&supplies" className="text-black font-bold text-l">
          Pets & Supplies
        </NavLink>
      </li>
      <li>
        <NavLink to="/addlisting" className="text-black font-bold text-l">
          Add Listing
        </NavLink>
      </li>
      <li>
        <NavLink to="/mylistings" className="text-black font-bold text-l">
          My Listings
        </NavLink>
      </li>
      <li>
        <NavLink to="/myorders" className="text-black font-bold text-l">
          My Orders
        </NavLink>
      </li>
      
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
              {
                Links
              }
            </ul>
          </div>
          <img className=" w-[170px]" src={logo} alt="Logo"></img>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
                Links
            }
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <a className="btn bg-[#37EC13]"> <NavLink to={'/registration'}>Sign Up</NavLink></a>
          <a className="btn bg-[#BFF8B3]"> <NavLink to={'/login'}>Log In</NavLink></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

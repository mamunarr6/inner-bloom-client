import React from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/appointment"}>Appointment</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>Login</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-transparent fixed w-full z-50">
      <div className="navbar max-w-6xl mx-auto">
        <div className="navbar-start ">
          <a className="btn btn-ghost text-3xl">InnerBloom</a>
        </div>
        {/* menu item will be show after 734px */}
        <div className="navbar-end hidden md:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-lg">
            {navLinks}
          </ul>
        </div>
        {/* dropdown menu will be hidden after 734px */}
        <div className="navbar-end flex md:hidden">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <FaBars className="text-lg"></FaBars>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content right-[-6rem] bg-base-100 rounded-box z-1 mt-3 w-60 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

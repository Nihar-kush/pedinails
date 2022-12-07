import React from "react";
import { FaBell, FaEdit } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="navbar mx-4 drop-shadow-lg ">
      <div className="logo cursor-pointer flex justify-center">
        <img
          src={process.env.PUBLIC_URL + "/img/header_top.png"}
          alt=""
          className="w-[75%]"
        />
      </div>
      <div className="flex overflow-hidden flex-col justify-between sm:flex-row sm:h-20 bg-[#FFFFFF] text-[#2e2e2e] sticky top-0 z-40 ">
        <a href="/">
          <img src={process.env.PUBLIC_URL + "/img/logo.jpg"} alt="" />
        </a>
        <div className="flex flex-col items-center sm:items-stretch justify-between">
          <div className="h-[80%] flex items-center justify-end p-3 gap-4">
            <div className="search rounded-3xl ring-1 ring-[#b6b6b6] p-2 flex gap-2 items-center">
              <img
                src={process.env.PUBLIC_URL + "/img/search.png"}
                alt=""
                className="cursor-pointer"
              />
              <input
                type="text"
                placeholder="Search"
                className="outline-none"
              />
            </div>
            <div className="relative cursor-pointer">
              <FaBell className="hidden sm:inline text-lg" />
              <span className="absolute hidden sm:inline right-[0.05rem] ring-1 ring-white top-1 rounded-full bg-[#009442] h-2 w-2"></span>
            </div>
            <div className="items-center p-2 gap-2 hidden sm:flex">
              <span className="text-lg">Admin</span>
              <img
                src={process.env.PUBLIC_URL + "/img/user.png"}
                alt=""
                className="w-7"
              />
              <select className="cursor-pointer rounded transition ease-in-out bg-transparent w-4">
                <option selected></option>
                <option value="Profile Edit">
                  <FaEdit />
                  <img
                    src={process.env.PUBLIC_URL + "/img/user.png"}
                    alt=""
                    className="w-7"
                  />
                  Profile Edit
                </option>
                <option value="Logout">Logout</option>
              </select>
            </div>
          </div>
          <img
            src={process.env.PUBLIC_URL + "/img/header_bottom.png"}
            alt=""
            className="w-[95%]"
          />
        </div>
      </div>
    </div>
  );
}

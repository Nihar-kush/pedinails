import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

export default function Settings() {
  const [pass, setPass] = useState(null);
  return (
    <div className=" bg-[#E9E9E9] h-screen pt-4 overflow-scroll relative">
      <Navbar />
      <div className="MainContainer mb-6 bg-[#E6E6E6] grid grid-cols-4 gap-4 mx-4">
        <Sidebar />
        {/* MAIN VIEW */}
        <div className="Main flex flex-col gap-10 col-span-4 sm:col-span-3 px-8 py-4 bg-[#FFFFFF]">
          <p className="text-2xl  border-b-[1px] p-4">Settings</p>
          <div className="rounded-lg shadow-lg p-4 flex flex-col gap-20 bg-[#F0F0F0]">
            <div>
              <p className="text-xl ">Change Password</p>
              <p className="text-sm text-[#565656]">
                Please enter your current password to change your passwrod.
              </p>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-10">
                <span className="w-40">Current Password</span>
                <input
                  type="password"
                  value={pass}
                  className="ring-1 rounded-md ring-black"
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-10">
                <span className="w-40">New Password</span>
                <input
                  type="password"
                  value={pass}
                  className="ring-1 rounded-md ring-black"
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>
            </div>

            <button className="px-4 self-end py-2 bg-[#F8B400] text-white rounded-md">
              Change
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

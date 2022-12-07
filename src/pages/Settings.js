import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

export default function Settings() {
  return (
    <div className=" bg-[#E9E9E9] h-screen pt-4 overflow-scroll">
      <Navbar />
      <div className="mt-4 mb-6 bg-[#E6E6E6] grid grid-cols-4 gap-4 mx-4">
        <Sidebar />
        {/* MAIN VIEW */}
        <div className="Main col-span-4 sm:col-span-3 p-4 bg-[#FFFFFF]"></div>
      </div>
      <Footer />
    </div>
  );
}

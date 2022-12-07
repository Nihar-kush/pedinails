import React from "react";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
export default function SMSNotification() {
  return (
    <div className=" bg-[#E9E9E9] h-screen pt-4 overflow-scroll">
      <Navbar />
      <div className="mt-4 mb-6 bg-[#E6E6E6] grid grid-cols-4 gap-4 mx-4">
        <Sidebar />
        {/* MAIN VIEW */}
        <div className="Main col-span-4 sm:col-span-3 flex flex-col gap-8 p-4 bg-[#FFFFFF]">
          <div className="div1 flex flex-col gap-3 p-2">
            <p className="text-3xl font-semibold">SMS Report Overview</p>
            <div className="cards flex h-[18rem] gap-5 items-center">
              <div className="rounded-lg bg-[#F0F0F0] shadow-lg w-[14rem] h-[17rem] overflow-hidden flex flex-col">
                <div className="bg-[#FCAC11] flex items-center font-semibold justify-center h-[20%]">
                  Sent Messages
                </div>
                <div className="text-[#289D01] h-[60%] text-5xl font-semibold flex items-center justify-center">
                  4120
                </div>
                <div className="pl-6 pb-4 h-[20%]">
                  <p className="text-sm">Send time</p>
                  <p className="font-semibold">2014-12-01</p>
                </div>
              </div>
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div className="div2"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

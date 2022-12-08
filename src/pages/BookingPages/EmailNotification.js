import React from "react";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { RadialBar } from "@nivo/radial-bar";

export default function EmailNotification() {
  return (
    <div className=" bg-[#E9E9E9] h-screen pt-4 overflow-scroll relative">
      <Navbar />
      <div className="MainContainer mb-6 bg-[#E6E6E6] grid grid-cols-4  gap-4 mx-4">
        <Sidebar />
        {/* MAIN VIEW */}
        <div className="Main col-span-4 sm:col-span-3 flex flex-col gap-8 p-4 bg-[#FFFFFF]">
          <div className="div1 flex flex-col gap-3 p-2">
            <p className="text-3xl font-semibold">Email Report Overview</p>
            <div className="cards flex h-[18rem] gap-5 items-center">
              <div className="rounded-lg bg-[#F0F0F0] shadow-lg w-[14rem] h-[17rem] overflow-hidden flex flex-col">
                <div className="bg-[#FCAC11] flex items-center font-semibold justify-center h-[20%]">
                  Sent Emails
                </div>
                <div className="text-[#289D01] h-[60%] text-5xl font-semibold flex items-center justify-center">
                  4120
                </div>
                <div className="pl-6 pb-4 h-[20%]">
                  <p className="text-sm">Send time</p>
                  <p className="font-semibold">2014-12-01</p>
                </div>
              </div>
              <Card
                title={"Delivery rate"}
                rate={90}
                l1="Delivered"
                l2="3708 (90%)"
                r1="Bounced"
                r2="120 (10%)"
                color=" #F5AB34"
              />
              <Card
                title={"Open rate (OR)"}
                rate={75}
                l1="Opened"
                l2="3090 (75%)"
                r1="Unopened"
                r2="120 (25%)"
                color="#31B0E4"
              />
              <Card
                title={"Click-to-open rate (CTOR)"}
                rate={50}
                l1="Clicked"
                l2="2060 (50%)"
                r1="Non-clicked"
                r2="120 (50%)"
                color="#80CDBE"
              />
            </div>
          </div>
          <div className="div2"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

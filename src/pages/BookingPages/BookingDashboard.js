import { ResponsiveBar } from "@nivo/bar";
import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { bar_data } from "../../utils/barData";
export default function BookingDashboard() {
  return (
    <div className=" bg-[#E9E9E9] h-screen pt-4 overflow-scroll relative">
      <Navbar />
      <div className="MainContainer mb-6 bg-[#E6E6E6] grid grid-cols-4 gap-4 mx-4">
        <Sidebar />
        {/* MAIN VIEW */}
        <div className="Main col-span-4 sm:col-span-3 flex flex-col gap-8 p-4 bg-[#FFFFFF]">
          <div className="div1 flex gap-4 sm:gap-0 sm:flex-row flex-col items-center sm:items-start">
            <div className="flex sm:w-[45%] px-4 w-full">
              <div className="rounded-[20px] w-full h-[21rem] flex flex-col items-center py-2 bg-[#F0F0F0]">
                <p className="text-xs font-semibold text-[#666666]">
                  Bookings this year
                </p>
                <ResponsiveBar
                  data={bar_data}
                  keys={[
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "June",
                    "July",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                  ]}
                  indexBy="month"
                  margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
                  padding={0.3}
                  valueScale={{ type: "linear" }}
                  indexScale={{ type: "band", round: true }}
                  colors="#FCAC11"
                  axisRight={null}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legendOffset: 32,
                  }}
                  enableGridY={true}
                  enableGridX={true}
                  enableLabel={false}
                />
              </div>
            </div>
            <div className="flex sm:w-[55%]">
              <div className="flex flex-col gap-6">
                <div className="flex rounded-[20px] justify-between py-4 px-10 items-center bg-[#F0F0F0] shadow-[4.0px_8.0px_8.0px_#a1a1a15f]">
                  <span className="flex flex-col justify-around pb-6 text-[#676666]">
                    <p className="text-base">Total Bookings</p>
                    <p className="text-5xl text-black font-semibold">24</p>
                  </span>
                  <span className="flex items-center">
                    <img src="/img/calendar (3).png" alt="" className="w-16" />
                  </span>
                </div>
                <div className="flex rounded-[20px] justify-between py-4 px-10 items-center bg-[#F0F0F0] shadow-[4.0px_8.0px_8.0px_#a1a1a15f]">
                  <span className="flex flex-col justify-around pb-6 text-[#676666]">
                    <p className="text-base">Today's Bookings</p>
                    <p className="text-5xl text-black font-semibold">12</p>
                  </span>
                  <span className="flex items-center">
                    <img src="/img/calendar (4).png" alt="" className="w-16" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="div2 flex flex-col gap-2 py-4 px-4">
            <div className="p-6 rounded-[20px] flex flex-col bg-[#F0F0F0]">
              <img
                src="/img/bell.png"
                alt=""
                className="w-10 hover:animate-pulse"
              />
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

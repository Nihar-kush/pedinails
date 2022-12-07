import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { ResponsiveBar } from "@nivo/bar";
import { bar_data } from "../utils/barData";

export default function LoyaltyPoints() {
  const LP_data = [
    {
      id: 1,
      name: "Mahima",
      type: "Premium Member",
      points: "130 POINTS",
      time: "15:00hrs",
    },
    {
      id: 2,
      name: "Simran",
      type: "Member",
      points: "24 POINTS",
      time: "17:00hrs",
    },
    {
      id: 3,
      name: "Vidhi",
      type: "Member",
      points: "17 POINTS",
      time: "11:00hrs",
    },
    {
      id: 4,
      name: "Kanika",
      type: "Premium Member",
      points: "110 POINTS",
      time: "15:00hrs",
    },
    {
      id: 5,
      name: "Ishika",
      type: "Premium Member",
      points: "120 POINTS",
      time: "11:00hrs ",
    },
    {
      id: 6,
      name: "Tattoo",
      type: "Member",
      points: "50 POINTS",
      time: "11:00hrs",
    },
  ];

  return (
    <div className="lp bg-[#E9E9E9] h-screen pt-4 overflow-scroll">
      <Navbar />
      <div className="mt-4 mb-6 bg-[#E6E6E6] grid grid-cols-4 gap-4 mx-4">
        <Sidebar />
        {/* MAIN VIEW */}
        <div className="Main col-span-4 sm:col-span-3 flex flex-col gap-8 p-4 bg-[#FFFFFF]">
          <div className="div1 flex gap-4 sm:gap-0 sm:flex-row flex-col items-center sm:items-start">
            <div className="flex sm:w-[45%] px-4">
              <div className="rounded-[20px] w-full h-[21rem] flex  bg-[#F0F0F0]">
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
                    <p className="text-base">Total Memberships</p>
                    <p className="text-5xl text-black font-semibold">324</p>
                  </span>
                  <span className="flex items-center">
                    <img src="/img/calendar (3).png" alt="" className="w-16" />
                  </span>
                </div>
                <div className="flex rounded-[20px] justify-between py-4 px-10 items-center bg-[#F0F0F0] shadow-[4.0px_8.0px_8.0px_#a1a1a15f]">
                  <span className="flex flex-col justify-around pb-6 text-[#676666]">
                    <p className="text-base">Today's Points</p>
                    <p className="text-5xl text-black font-semibold">42</p>
                  </span>
                  <span className="flex items-center">
                    <img src="/img/calendar (4).png" alt="" className="w-16" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="div2 flex flex-col gap-6 py-4 px-2 overflow-y-scroll scroll-smooth">
            {LP_data.map((data) => {
              return (
                <div
                  className="flex text-[#676666] text-xs sm:text-base p-5 rounded-[10px] justify-around items-center bg-[#F0F0F0] transition duration-75 ease-in-out shadow-md hover:bg-[#fcac1125] hover:shadow-[#fcac1170]"
                  key={data.id}
                >
                  <img src="/img/target.png" alt="" className="w-7" />
                  <span className="text-center w-40">{data.name}</span>
                  <span className="text-center w-40">{data.type}</span>
                  <span className="text-center w-40">{data.points}</span>
                  <span className="text-center w-40">{data.time}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

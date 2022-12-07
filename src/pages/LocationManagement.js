import { ResponsiveLine } from "@nivo/line";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function LocationManagement() {
  const LM_data = [
    {
      id: "x",
      data: [
        {
          x: "Jan",
          y: 33,
        },
        {
          x: "Feb",
          y: 35,
        },
        {
          x: "Mar",
          y: 55,
        },
        {
          x: "Apr",
          y: 283,
        },
        {
          x: "May",
          y: 75,
        },
        {
          x: "June",
          y: 238,
        },
        {
          x: "July",
          y: 72,
        },
        {
          x: "Aug",
          y: 246,
        },
        {
          x: "Sep",
          y: 19,
        },
        {
          x: "Oct",
          y: 139,
        },
        {
          x: "Nov",
          y: 277,
        },
        {
          x: "Dec",
          y: 256,
        },
      ],
    },
    {
      id: "y",
      data: [
        {
          x: "Jan",
          y: 250,
        },
        {
          x: "Feb",
          y: 182,
        },
        {
          x: "Mar",
          y: 13,
        },
        {
          x: "Apr",
          y: 46,
        },
        {
          x: "May",
          y: 79,
        },
        {
          x: "June",
          y: 143,
        },
        {
          x: "July",
          y: 88,
        },
        {
          x: "Aug",
          y: 0,
        },
        {
          x: "Sep",
          y: 175,
        },
        {
          x: "Oct",
          y: 179,
        },
        {
          x: "Nov",
          y: 54,
        },
        {
          x: "Dec",
          y: 173,
        },
      ],
    },
    {
      id: "z",
      data: [
        {
          x: "Jan",
          y: 40,
        },
        {
          x: "Feb",
          y: 45,
        },
        {
          x: "Mar",
          y: 65,
        },
        {
          x: "Apr",
          y: 383,
        },
        {
          x: "May",
          y: 85,
        },
        {
          x: "June",
          y: 218,
        },
        {
          x: "July",
          y: 62,
        },
        {
          x: "Aug",
          y: 346,
        },
        {
          x: "Sep",
          y: 49,
        },
        {
          x: "Oct",
          y: 239,
        },
        {
          x: "Nov",
          y: 237,
        },
        {
          x: "Dec",
          y: 216,
        },
      ],
    },
  ];

  return (
    <div className=" bg-[#E9E9E9] h-screen pt-4 overflow-scroll">
      <Navbar />
      <div className="mt-4 mb-6 bg-[#E6E6E6] grid grid-cols-4 gap-4 mx-4">
        <Sidebar />
        {/* MAIN VIEW */}
        <div className="Main col-span-4 sm:col-span-3 flex flex-col gap-8 p-6 bg-[#FFFFFF]">
          <div className="div1 flex sm:flex-row flex-col gap-6">
            <div className="flex w-[70%] ">
              <div className="rounded-[20px] w-full shadow-[4.0px_8.0px_8.0px_#a1a1a15f] flex flex-col gap-4 p-6 bg-[#F0F0F0]">
                <p className="text-[#6F6F6F] font-semibold text-2xl">
                  Map wise Revenue
                </p>
                <img src="/img/map.png" alt="" width={"600px"} />
              </div>
            </div>
            <div className="flex flex-col w-[30%]">
              <div className="flex flex-col gap-6">
                <div className="flex rounded-[20px] justify-center py-4 w-60 items-center bg-[#F0F0F0] shadow-[4.0px_8.0px_8.0px_#a1a1a15f] px-5">
                  <span className="flex flex-col gap-4 w-full pb-6 text-[#676666]">
                    <p className="text-base">Add Locations</p>
                    <div className=" flex flex-col gap-3 text-black font-semibold">
                      <input type="text" className="rounded-lg p-2" />
                      <button className="py-2 px-4 text-white rounded-lg bg-[#FCAC11] cursor-pointer">
                        Add
                      </button>
                    </div>
                  </span>
                </div>
                <div className="flex rounded-[20px] justify-center py-4 w-60 items-center bg-[#F0F0F0] shadow-[4.0px_8.0px_8.0px_#a1a1a15f]">
                  <span className="flex flex-col pb-6 text-[#676666]">
                    <p className="text-base">Total Bookings</p>
                    <p className="text-5xl text-black font-semibold">2312</p>
                  </span>
                </div>
                <div className="flex rounded-[20px] justify-center py-4 w-60 items-center bg-[#F0F0F0] shadow-[4.0px_8.0px_8.0px_#a1a1a15f]">
                  <span className="flex flex-col pb-6 text-[#676666]">
                    <p className="text-base">Total Locations</p>
                    <p className="text-5xl text-black font-semibold">35</p>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="div2 flex py-4 px-2">
            <div className="rounded-[20px] w-[80%] h-510 flex p-4 bg-[#F0F0F0]">
              <ResponsiveLine
                data={LM_data}
                margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
                xScale={{ type: "point" }}
                yScale={{
                  type: "linear",
                  min: "auto",
                  max: "auto",
                  stacked: true,
                  reverse: false,
                }}
                yFormat=" >-.2f"
                curve="natural"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  orient: "bottom",
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legendOffset: 36,
                  legendPosition: "middle",
                }}
                axisLeft={{
                  orient: "left",
                  tickSize: 5,
                  tickPadding: 10,
                  tickRotation: 0,
                  legendOffset: -40,
                  legendPosition: "middle",
                }}
                colors={{ scheme: "pastel2" }}
                pointSize={10}
                pointColor={{ theme: "background" }}
                pointBorderWidth={2}
                pointBorderColor={{ from: "serieColor" }}
                pointLabelYOffset={-12}
                useMesh={true}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Map() {
  <div></div>;
}

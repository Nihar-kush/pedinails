import { ResponsiveLine } from "@nivo/line";
import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { line_data } from "../../utils/lineData";
export default function UserManagement() {
  const UM_data = [
    {
      id: 1,
      name: "Mahima",
      type: "Premium Member",
      date: "24 December 2022",
    },
    {
      id: 2,
      name: "Simran",
      type: "Member",
      date: "12 November 2022",
    },
    {
      id: 3,
      name: "Vidhi",
      type: "Member",
      date: "21 November 2022",
    },
    {
      id: 4,
      name: "Kanika",
      type: "Premium Member",
      date: "12 November 2022",
    },
    {
      id: 5,
      name: "Ishika",
      type: "Premium Member",
      date: "12 November 2022",
    },
    {
      id: 6,
      name: "Vidhi",
      type: "Member",
      date: "12 November 2022",
    },
  ];
  return (
    <div className=" bg-[#E9E9E9] h-screen pt-4 overflow-scroll">
      <Navbar />
      <div className="mt-4 mb-6 bg-[#E6E6E6] grid grid-cols-4 gap-4 mx-4">
        <Sidebar />
        {/* MAIN VIEW */}
        <div className="Main col-span-4 sm:col-span-3 flex flex-col gap-8 p-4 bg-[#FFFFFF]">
          <div className="div1 flex gap-4 sm:gap-0 sm:flex-row flex-col items-center sm:items-start">
            <div className="flex sm:w-[70%] px-4">
              <div className="rounded-[20px] w-full h-[21rem] flex shadow-[4.0px_8.0px_8.0px_#a1a1a15f]  bg-[#F0F0F0]">
                <ResponsiveLine
                  data={line_data}
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
            <div className="flex justify-end px-2 sm:w-[30%]">
              <div className="flex flex-col gap-6">
                <div className="flex rounded-[20px] justify-between py-4 px-6 items-center bg-[#F0F0F0] shadow-[4.0px_8.0px_8.0px_#a1a1a15f]">
                  <span className="flex flex-col justify-around pb-6 text-[#676666]">
                    <p className="text-base">Total Bookings</p>
                    <p className="text-[0.6rem]">THIS MONTH</p>
                    <p className="text-5xl text-black font-semibold">312</p>
                  </span>
                  <span className="flex items-center">
                    <img src="/img/calendar (4).png" alt="" className="w-16" />
                  </span>
                </div>
                <div className="flex rounded-[20px] justify-between py-4 px-6 items-center bg-[#F0F0F0] shadow-[4.0px_8.0px_8.0px_#a1a1a15f]">
                  <span className="flex flex-col justify-around pb-6 text-[#676666]">
                    <p className="text-base">Total Memberships</p>
                    <p className="text-[0.6rem]">THIS MONTH</p>
                    <p className="text-5xl text-black font-semibold">125</p>
                  </span>
                  <span className="flex items-center">
                    <img src="/img/customer.png" alt="" className="w-16" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="div2 flex p-4 items-center justify-between">
            <select
              name=""
              id=""
              className="rounded-md py-1 px-3 cursor-pointer"
            >
              <option value="">Latest</option>
              <option value="">Last</option>
            </select>
            <div className="rounded-3xl flex items-center bg-[#F0F0F0] py-2 px-5">
              <input
                type="text"
                placeholder="Search..."
                className="bg-[#F0F0F0] outline-none"
              />
              <img
                src="/img/search1.png"
                alt=""
                className="w-5 cursor-pointer"
              />
            </div>
          </div>
          <div className="div3 flex flex-col gap-6 py-4 px-2 overflow-y-scroll scroll-smooth">
            {UM_data.map((data) => {
              return (
                <div
                  className="flex text-[#676666] text-xs sm:text-base p-6 rounded-[10px] justify-around items-center bg-[#F0F0F0] transition duration-75 ease-in-out shadow-md hover:bg-[#fcac1125] hover:shadow-[#fcac1170]"
                  key={data.id}
                >
                  <img src="/img/target.png" alt="" className="w-6" />
                  <span className="text-center w-40">{data.name}</span>
                  <span className="text-center w-40">{data.type}</span>
                  <span className="text-center w-40">{data.date}</span>
                  <img src="/img/bill.png" alt="" className="w-6" />
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

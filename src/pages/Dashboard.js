import { ResponsiveBar } from "@nivo/bar";
import { ResponsivePie, ResponsivePieCanvas } from "@nivo/pie";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
// import { bar_data } from "../utils/dashBarData";
// import { pie_data } from "../utils/dashPieData";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/analytics")
      .then((response) => {
        setData(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const bar_data = [
    {
      source: "Cash Revenue",
      "Cash Revenue": data.cash_revenue,
    },
    {
      source: "Online Revenue",
      "Online Revenue": data.online_revenue,
    },
  ];
  const pie_data = [
    {
      id: "Online Revenue",
      label: "Online Revenue",
      value: data.online_revenue,
    },
    {
      id: "Cash Revenue",
      label: "Cash Revenue",
      value: data.cash_revenue,
    },
  ];

  return (
    <div className="bg-[#E9E9E9] h-screen pt-4 overflow-scroll relative">
      <Navbar />
      <div className=" mt-28 mb-6 bg-[#E6E6E6] grid grid-cols-4 gap-4 mx-4">
        <Sidebar />
        {/* MAIN VIEW grid-rows-5 */}
        <div className="Main col-span-4 sm:col-span-3 z-0 grid grid-flow-row gap-7 p-7 bg-[#FFFFFF]">
          <div className="div1 row-span-1 relative w-full sm:h-48 flex items-center ">
            <img src="/img/banner.jpg" alt="" className="object-cover" />
            {/* <div className="absolute flex items-center justify-center w-full text-white text-[3.5rem]"> */}
            <p className="absolute flex items-center justify-center w-full text-white tracking-wider text-[3vw]">
              LETS MANAGE THE ORDERS
            </p>
            {/* </div> */}
          </div>
          <div className="div2 row-span-2 flex sm:flex-row flex-col flex-wrap justify-between gap-6">
            <div className="relative bg-[#35AB7D] text-white text-4xl sm:w-[31.5%] w-full flex gap-5 items-center ">
              <img src="/img/s1.png" alt="" />
              <div className="text-center absolute right-[15%]">
                <p className="text-2xl font-semibold">Total Order</p>
                <p className="font-semibold">{data.total_orders}</p>
              </div>
            </div>
            <div className="relative bg-[#F8B400] text-white text-4xl sm:w-[31.5%] w-full flex gap-5 items-center ">
              <img src="/img/s2.png" alt="" />
              <div className="text-center absolute right-[20%]">
                <p className="text-2xl font-semibold">Approved</p>
                <p className="font-semibold">{data.approved_orders}</p>
              </div>
            </div>
            <div className="relative bg-[#99AB35] text-white text-4xl sm:w-[31.5%] w-full flex gap-5 items-center ">
              <img src="/img/s3.png" alt="" />
              <div className="text-center absolute right-[20%]">
                <p className="text-2xl font-semibold">Completed</p>
                <p className="font-semibold">{data.completed_orders}</p>
              </div>
            </div>
            <div className="relative bg-[#F8B400] text-white text-4xl sm:w-[31.5%] w-full flex gap-5 items-center">
              <img src="/img/s4.png" alt="" />
              <div className="text-center absolute right-[20%]">
                <p className="text-2xl font-semibold">Pending</p>
                <p className="font-semibold">{data.pending_orders}</p>
              </div>
            </div>
            <div className="relative bg-[#99AB35] text-white text-4xl sm:w-[31.5%] w-full flex gap-5 items-center ">
              <img src="/img/s5.png" alt="" />
              <div className="text-center absolute right-[20%]">
                <p className="text-2xl font-semibold">Revenue</p>
                <p className="font-semibold">{data.total_revenue}$</p>
              </div>
            </div>
            <div className="branch flex relative w-full sm:w-[31.5%]  justify-end items-center">
              <img src="/img/branch.png" alt="" className="absolute -left-7" />
              <div className="w-[75%] h-full flex flex-col justify-between">
                <div className="bg-[#35AB97] text-white h-16 text-4xl flex gap-5 justify-between items-center ">
                  <img src="/img/s6.png" alt="" />
                  <div className="pr-10 text-xl font-semibold">
                    <p>Online</p>
                    <p>Revenue</p>
                  </div>
                </div>
                <div className="bg-[#AB6635] text-white h-16 text-4xl flex gap-5 justify-between items-center ">
                  <img src="/img/s7.png" alt="" />
                  <div className="pr-10 text-xl font-semibold">
                    <p>Cash</p>
                    <p>Revenue</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div3 invisible sm:visible row-span-2 flex sm:flex-row flex-col sm:gap-0 gap-10 ">
            <div className="flex flex-col w-[55%]">
              <p className="text-xl pb-5 text-[#676666]">Revenue Pie Chart </p>
              <ResponsivePie
                data={pie_data}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{
                  from: "color",
                  modifiers: [["darker", 0.2]],
                }}
                colors={{ scheme: "paired" }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: "color" }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                  from: "color",
                  modifiers: [["darker", 2]],
                }}
                legends={[
                  {
                    anchor: "bottom",
                    direction: "row",
                    justify: false,
                    translateX: 0,
                    translateY: 56,
                    itemsSpacing: 20,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: "#999",
                    itemDirection: "left-to-right",
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: "circle",
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemTextColor: "#000",
                        },
                      },
                    ],
                  },
                ]}
              />
            </div>
            <div className="w-[45%] h-[28rem]">
              <ResponsiveBar
                data={bar_data}
                keys={[
                  "Online Revenue",
                  "Cash Revenue",
                  "Other Sources Revenue",
                ]}
                indexBy="source"
                margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
                padding={0.5}
                valueScale={{ type: "linear" }}
                indexScale={{ type: "band", round: true }}
                colors={{ scheme: "paired" }}
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

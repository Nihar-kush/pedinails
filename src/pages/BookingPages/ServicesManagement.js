import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { pie_data } from "../../utils/pieData";
import axios from "axios";
import { ResponsivePie, ResponsivePieCanvas } from "@nivo/pie";

export default function ServicesManagement() {
  const [pieData, setPieData] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/client/services")
      .then((response) => {
        setPieData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const SM_data = [
    {
      id: 1,
      name: "Mahima",
      service: "Pedicure",
      date: "24 December 2022",
      status: "complete",
    },
    {
      id: 2,
      name: "Simran",
      service: "Manicure",
      date: "12 December 2022",
      status: "incomplete",
    },
    {
      id: 3,
      name: "Vidhi",
      service: "Nail Art",
      date: "11 December 2022",
      status: "incomplete",
    },
    {
      id: 4,
      name: "Kanika",
      service: "Manicure",
      date: "22 December 2022",
      status: "complete",
    },
    {
      id: 5,
      name: "Ishika",
      service: "Pedicure",
      date: "24 December 2022",
      status: "complete",
    },
    {
      id: 6,
      name: "Tattoo",
      service: "Manicure",
      date: "12 December 2022",
      status: "complete",
    },
  ];
  return (
    <div className=" bg-[#E9E9E9] h-screen pt-4 overflow-scroll relative">
      <Navbar />
      <div className="MainContainer mb-6 bg-[#E6E6E6] grid grid-cols-4 gap-4 mx-4">
        <Sidebar />
        {/* MAIN VIEW */}
        <div className="Main col-span-4 sm:col-span-3 p-4 bg-[#FFFFFF]">
          <div className="div1 flex gap-4 sm:gap-0 sm:flex-row flex-col items-center sm:items-start">
            <div className="flex sm:w-[50%] px-4 w-full">
              <div className="rounded-[20px] w-full h-[20rem] pt-4 flex flex-col gap-4 items-center bg-[#F0F0F0]">
                <p className="text-xs font-semibold text-[#666666]">
                  Revenue per Service
                </p>
                {pieData && (
                  <ResponsivePie
                    data={pieData}
                    height={"270"}
                    margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    activeOuterRadiusOffset={8}
                    enableArcLabels={false}
                    enableArcLinkLabels={false}
                    colors={{ scheme: "yellow_orange_red" }}
                    borderColor={{
                      from: "color",
                      modifiers: [["darker", 0.6]],
                    }}
                    legends={[
                      {
                        anchor: "middle",
                        direction: "row",
                        justify: false,
                        translateX: -5,
                        translateY: -30,
                        itemsSpacing: 30,
                        itemWidth: 60,
                        itemHeight: 14,
                        itemTextColor: "#2c2c2c",
                        itemDirection: "left-to-right",
                        itemOpacity: 1,
                        symbolSize: 14,
                        symbolShape: "circle",
                      },
                    ]}
                  />
                )}
              </div>
            </div>
            <div className="flex sm:w-[50%] px-4 w-full">
              <div className="rounded-[20px] w-full h-[20rem] pt-4 flex flex-col gap-4 items-center bg-[#F0F0F0]">
                <p className="text-xs font-semibold text-[#666666]">
                  Customer per Service
                </p>
                {pieData && (
                  <ResponsivePie
                    height={"270"}
                    data={pieData}
                    margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    activeOuterRadiusOffset={8}
                    enableArcLabels={false}
                    enableArcLinkLabels={false}
                    colors={{ scheme: "yellow_orange_red" }}
                    borderColor={{
                      from: "color",
                      modifiers: [["darker", 0.6]],
                    }}
                    legends={[
                      {
                        anchor: "middle",
                        direction: "row",
                        justify: false,
                        translateX: 14,
                        translateY: -30,
                        itemsSpacing: 15,
                        itemWidth: 60,
                        itemHeight: 14,
                        itemTextColor: "#2c2c2c",
                        itemDirection: "left-to-right",
                        itemOpacity: 1,
                        symbolSize: 14,
                        symbolShape: "circle",
                      },
                    ]}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="div2 flex flex-col gap-6 py-4 px-2 overflow-y-scroll scroll-smooth">
            {SM_data.map((data) => {
              return (
                <div
                  className="flex text-[#676666] text-xs sm:text-base p-6 rounded-[10px] justify-around items-center bg-[#F0F0F0] transition duration-75 ease-in-out shadow-md hover:bg-[#fcac1125] hover:shadow-[#fcac1170]"
                  key={data.id}
                >
                  <img src="/img/target.png" alt="" className="w-6" />
                  <span className="text-center w-40">{data.name}</span>
                  <span className="text-center w-40">{data.service}</span>
                  <span className="text-center w-40">{data.date}</span>
                  <span
                    className={
                      "text-center text-[#2e2e2e] w-48 rounded-3xl " +
                      (data.status === "complete"
                        ? "bg-[#3efd9a]"
                        : "bg-[#fd4646]")
                    }
                  >
                    {data.status}
                  </span>
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

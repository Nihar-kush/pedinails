import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { CSVLink } from "react-csv";
import { ResponsiveBar } from "@nivo/bar";
import axios from "axios";
import { ResponsiveLine } from "@nivo/line";
import { ResponsivePie } from "@nivo/pie";
import { BASE_SERVER_URL } from "../config";

export default function SalesReport() {
  const [barData, setBarData] = useState([]);
  const [overallData, setOverallData] = useState([]);
  const [pieData, setPieData] = useState([]);
  const [lineData, setLineData] = useState([]);

  const headers = [
    { label: "ID", key: "_id" },
    { label: "Month", key: "month" },
    { label: "Total Sales", key: "totalSales" },
    { label: "Total Units", key: "totalUnits" },
  ];
  const csvReport = {
    headers: headers,
    filename: "Pedinails_Sales_Report.csv",
  };

  useEffect(() => {
    axios
      .get(`${BASE_SERVER_URL}/api/sales/sales`)
      .then((response) => {
        setBarData(response.data.monthlyData);
        setOverallData(response.data);
        setLineData([
          {
            id: "Revenue",
            data: response.data.dailyData.map((data) => ({
              x: data.date,
              y: data.totalSales,
            })),
          },
        ]);
        setPieData(
          Object.keys(response.data.salesByService).map((key) => ({
            id: key,
            label: key,
            value: response.data.salesByService[key],
          }))
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className=" bg-[#E9E9E9] h-screen pt-4 overflow-scroll relative">
      <Navbar />
      <div className="MainContainer mb-6 bg-[#E6E6E6] grid grid-cols-4 gap-4 mx-4">
        <Sidebar />
        {/* MAIN VIEW */}
        <div className="Main col-span-4 sm:col-span-3 flex flex-col gap-8 p-4 bg-[#FFFFFF]">
          <div className="div1  flex p-4 items-center justify-between">
            <span className="text-xl font-semibold text-[#2e2e2e]">
              Total Sales:
            </span>
            <CSVLink
              className="relative rounded-lg flex justify-center text-white bg-[#FCAC11] py-2 px-5 cursor-pointer ml-auto"
              data={barData}
              headers={csvReport.headers}
              filename={csvReport.filename}
            >
              Export
            </CSVLink>
          </div>

          <div className="div2 flex gap-4 sm:gap-0 sm:flex-row flex-col items-center sm:items-start">
            <div className="flex sm:w-[45%] px-4">
              <div className="rounded-[20px] w-full h-[21rem] flex shadow-[4.0px_8.0px_8.0px_#a1a1a15f]  bg-[#F0F0F0]">
                {barData && (
                  <ResponsiveBar
                    data={barData}
                    keys={["totalSales"]}
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
                )}
              </div>
            </div>
            <div className="flex sm:w-[55%]">
              <div className="flex flex-col gap-6">
                <div className="flex rounded-[20px] gap-6 py-4 px-6 items-center bg-[#F0F0F0] shadow-[4.0px_8.0px_8.0px_#a1a1a15f]">
                  <span className="flex flex-col justify-around pb-6 text-[#676666]">
                    <p className="text-base">Total Revenue</p>
                    <p className="text-5xl text-black font-semibold">
                      {overallData ? overallData.yearlySalesTotal : "--"}
                    </p>
                  </span>
                  <span className="flex items-center">
                    <img src="/img/calendar (4).png" alt="" className="w-16" />
                  </span>
                </div>
                <div className="flex rounded-[20px] gap-6 py-4 px-6 items-center bg-[#F0F0F0] shadow-[4.0px_8.0px_8.0px_#a1a1a15f]">
                  <span className="flex flex-col justify-around pb-6 text-[#676666]">
                    <p className="text-base">Payment in Cash</p>
                    <p className="text-5xl text-black font-semibold">
                      {overallData ? overallData.totalCashPayments : "--"}
                    </p>
                  </span>
                  <span className="flex items-center">
                    <img src="/img/customer.png" alt="" className="w-16" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="div3 flex gap-4 sm:gap-0 sm:flex-row flex-col items-center sm:items-start">
            <div className="flex sm:w-[45%] px-4">
              <div className="rounded-[20px] w-full h-[21rem] flex flex-col gap-4 items-center pt-5 shadow-[4.0px_8.0px_8.0px_#a1a1a15f] bg-[#F0F0F0]">
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
                        itemsSpacing: 24,
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
            <div className="flex sm:w-[55%]">
              <div className="flex flex-col gap-6">
                <div className="flex rounded-[20px] gap-6 py-4 px-6 items-center bg-[#F0F0F0] shadow-[4.0px_8.0px_8.0px_#a1a1a15f]">
                  <span className="flex flex-col justify-around pb-6 text-[#676666]">
                    <p className="text-base">Payment Online</p>
                    <p className="text-5xl text-black font-semibold">
                      {overallData ? overallData.totalOnlinePayments : "--"}
                    </p>
                  </span>
                  <span className="flex items-center">
                    <img src="/img/calendar (3).png" alt="" className="w-16" />
                  </span>
                </div>
                <div className="flex rounded-[20px] gap-6 py-4 px-6 items-center bg-[#F0F0F0] shadow-[4.0px_8.0px_8.0px_#a1a1a15f]">
                  <span className="flex flex-col justify-around pb-6 text-[#676666]">
                    <p className="text-base">Payments Pending</p>
                    <p className="text-5xl text-black font-semibold">
                      {overallData ? overallData.totalPendingPayments : "--"}
                    </p>
                  </span>
                  <span className="flex items-center">
                    <img src="/img/calendar (4).png" alt="" className="w-16" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="rounded-[20px] ml-3 w-full h-[30rem] flex shadow-[4.0px_8.0px_8.0px_#a1a1a15f]  bg-[#F0F0F0]">
            <ResponsiveLine
              data={lineData}
              margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
              xScale={{ type: "point" }}
              yScale={{
                type: "linear",
                stacked: true,
                reverse: false,
              }}
              yFormat=" >-.2f"
              curve="basis"
              axisTop={null}
              axisRight={null}
              axisBottom={null}
              axisLeft={{
                orient: "left",
                tickSize: 5,
                tickPadding: 10,
                tickRotation: 0,
                legendOffset: -40,
                legendPosition: "middle",
              }}
              colors={"#FCAC11"}
              pointSize={10}
              pointColor={{ theme: "background" }}
              pointBorderWidth={2}
              pointBorderColor={{ from: "serieColor" }}
              pointLabelYOffset={-12}
              useMesh={true}
            />
          </div> */}
          {/* <div className="div4 flex flex-col gap-6 py-4 px-2 overflow-y-scroll scroll-smooth">
            {SR_data.map((data) => {
              return (
                <div
                  className="flex text-[#676666] text-xs sm:text-base p-5 rounded-[10px] justify-around items-center bg-[#F0F0F0] transition duration-75 ease-in-out shadow-md hover:bg-[#fcac1125] hover:shadow-[#fcac1170]"
                  key={data.id}
                >
                  <img src="/img/target.png" alt="" className="w-6" />
                  <span className="text-center w-40">{data.name}</span>
                  <span className="text-center w-40">{data.amount}</span>
                  <span className="text-center w-40">{data.date}</span>
                  <img src="/img/bill.png" alt="" className="w-6" />
                </div>
              );
            })}
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

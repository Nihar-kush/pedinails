import { ResponsiveBar } from "@nivo/bar";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
// import { bar_data } from "../utils/SM_barData";
import axios from "axios";

export default function SMManagement() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/social")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const SM_data = [
    {
      id: 1,
      icon: "/img/facebook.png",
      Platform: "Facebook",
      Subs: -19,
      date: "24 December 2022",
      likes: "1200",
    },
    {
      id: 2,
      icon: "/img/instagram.png",
      Platform: "Instagram",
      Subs: +30,
      date: "12 November 2022",
      likes: "2799",
    },
    {
      id: 3,
      icon: "/img/twitter.png",
      Platform: "Twitter",
      Subs: -8,
      date: "21 November 2022",
      likes: "824",
    },
    {
      id: 4,
      icon: "/img/youtube.png",
      Platform: "Youtube",
      Subs: +10,
      date: "21 November 2022",
      likes: "11000",
    },
  ];
  return (
    <div className=" bg-[#E9E9E9] h-screen pt-4 overflow-scroll relative">
      <Navbar />
      <div className="MainContainer mb-6 bg-[#E6E6E6] grid grid-cols-4 gap-4 mx-4">
        <Sidebar />
        {/* MAIN VIEW */}
        <div className="Main col-span-4 sm:col-span-3 flex flex-col gap-8 p-4 bg-[#FFFFFF]">
          <div className="div1 w-full flex items-center p-4">
            <div className="rounded-[20px] w-full h-[27rem] flex flex-col items-center gap-4 pt-4 shadow-[4.0px_8.0px_8.0px_#a1a1a15f]  bg-[#F0F0F0]">
              <p className="text-xs font-semibold text-[#666666]">
                Social Media Analytics 2022
              </p>
              {data && (
                <ResponsiveBar
                  data={data}
                  groupMode="grouped"
                  keys={["Profile Views", "Likes", "Shares"]}
                  indexBy="platform"
                  margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
                  padding={0.3}
                  innerPadding={5}
                  valueScale={{ type: "linear" }}
                  indexScale={{ type: "band", round: true }}
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
          <div className="div2 flex flex-col gap-6 py-4 px-2 overflow-y-scroll scroll-smooth">
            <div className="flex text-[#F0F0F0] text-xs sm:text-base font-semibold p-5 rounded-[10px] justify-around items-center bg-[#4C4C4C] transition duration-75 ease-in-out shadow-md">
              <img src="/img/target.png" alt="" className="w-7" />
              <span className="text-center w-40">Platform</span>
              <span className="text-center w-40 ">Follows/Subs</span>
              <span className="text-center w-40">Last Posted on</span>
              <span className="text-center w-40">Likes</span>
            </div>
            {SM_data.map((item) => {
              return (
                <div
                  className="flex text-[#676666] text-xs sm:text-base p-5 rounded-[10px] justify-around items-center bg-[#F0F0F0] transition duration-75 ease-in-out shadow-md hover:bg-[#fcac1125] hover:shadow-[#fcac1170]"
                  key={item.id}
                >
                  <img src={item.icon} alt="" className="w-7" />
                  <span className="text-center w-40">{item.Platform}</span>
                  <span
                    className={
                      "text-center w-40 " +
                      (item.Subs < 0 ? "text-[#FF0000]" : "text-[#289D01]")
                    }
                  >
                    {item.Subs}%
                  </span>
                  <span className="text-center w-40">{item.date}</span>
                  <span className="text-center w-40">{item.likes}</span>
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

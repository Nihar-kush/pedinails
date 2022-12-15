import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import axios from "axios";

export default function BookingAppointments() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/bookings/appointments")
      .then((response) => {
        setData(response.data);
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
        <div className="Main col-span-4 sm:col-span-3 p-4 bg-[#FFFFFF]">
          <div className="div1  flex p-4 items-center justify-between">
            <select
              name=""
              id=""
              className="rounded-md py-1 px-3 cursor-pointer"
            >
              <option value="">Latest</option>
              <option value="">Last</option>
            </select>
          </div>
          <div className="div2 flex flex-col gap-6 py-4 px-2 overflow-y-scroll scroll-smooth">
            {data &&
              data.map((data) => {
                return (
                  <div
                    className="flex text-[#676666] text-xs sm:text-base p-6 rounded-[10px] justify-around items-center bg-[#F0F0F0] transition duration-75 ease-in-out shadow-md hover:bg-[#fcac1125] hover:shadow-[#fcac1170]"
                    key={data._id}
                  >
                    <img src="/img/target.png" alt="" className="w-6" />
                    <span className="text-center w-40">{data.name}</span>
                    <span className="text-center w-40">{data.service}</span>
                    <span className="text-center w-40">{data.date}</span>
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

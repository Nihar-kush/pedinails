import React, { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Calendar from "react-calendar";

export default function BookingCalender() {
  const [date, setDate] = useState(new Date());
  const [active, setActive] = useState(false);
  return (
    <div className=" bg-[#E9E9E9] h-screen pt-4 overflow-scroll relative">
      <Navbar />
      <div className="MainContainer mb-6 bg-[#E6E6E6] grid grid-cols-4 gap-4 mx-4 relative ">
        <Sidebar />
        {/* MAIN VIEW */}
        <div className="Main col-span-4 sm:col-span-3 p-4 bg-[#FFFFFF] ">
          <div className="w-full flex items-center p-4 ">
            <div className="rounded-[10px] w-full  overflow-hidden flex gap-3 shadow-[4.0px_8.0px_8.0px_#a1a1a15f]  bg-[#F0F0F0]">
              <div className="div1 w-[50%] ">
                <Calendar onChange={setDate} value={date} />
                <div className=" w-full bg-white flex flex-row-reverse p-4">
                  <button
                    onClick={() => setActive(!active)}
                    className="bg-[#FCAC11] text-white font-semibold py-2 px-4 rounded-lg"
                  >
                    Add Booking
                  </button>
                  {active && (
                    <div className="absolute top-10 right-10 z-10 bg-[#ffffff] shadow-xl rounded-md py-4 px-6 flex flex-col gap-8 items-center">
                      <p className="text-4xl font-semibold">Add New Booking</p>
                      <div className="border-b-[1px]">
                        <p>Service Name</p>
                        <input type="text" />
                      </div>
                      <div className="border-b-[1px]">
                        <p>Price</p>
                        <input type="number" />
                      </div>
                      <div className="flex items-center justify-center gap-5">
                        <button onClick={()=>setActive(false)} className="text-white py-2 px-4 rounded-md text-center bg-[#289D01]">
                          Cancel
                        </button>
                        <button onClick={()=>setActive(false)} className="text-white py-2 px-4 rounded-md text-center bg-[#FCAC11]">
                          Ok
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="div2 w-[50%] flex flex-col p-4">
                <span className="relative text-[1.02rem] w-[80%] bold rounded-lg bg-white pl-0 font-sans overflow-hidden">
                  <span className="absolute h-full bg-[#FF1744] w-2"></span>
                  <p className="p-4">
                    There are no events planned for {date.toDateString()}.
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

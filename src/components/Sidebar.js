import React, { useState } from "react";
import { AiFillDashboard } from "react-icons/ai";
import { FaBook, FaChartBar, FaCogs, FaWindowRestore } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [toggleBooking, setToggleBooking] = useState(false);
  return (
    <div className="Sidebar h-full drop-shadow-lg col-span-4 sm:col-span-1  p-4 bg-[#FFFFFF]">
      <ul className="flex flex-col text-[1.1rem]">
        <Link to="/Dashboard">
          <li className=" p-5 pl-0 text-[#676666] hover:text-black flex items-center gap-4 cursor-pointer border-b-[0.8px]">
            <AiFillDashboard className="text-xl" />
            Dashboard
          </li>
        </Link>

        <Link to="">
          <li
            className=" p-5 pl-0 text-[#676666] hover:text-black flex flex-col cursor-pointer border-b-[0.8px] gap-4"
            onClick={() => setToggleBooking(!toggleBooking)}
          >
            <div className=" text-[#676666] hover:text-black flex items-center gap-4 cursor-pointer ">
              <FaBook className={toggleBooking && "text-[#FFCA25]"} />
              Booking System
            </div>
            {toggleBooking && (
              <ul className="text-sm pl-10 transition ease-in-out ">
                <Link to="/BookingDashboard">
                  <li className="p-2  pl-0 text-[#676666] hover:text-black flex items-center gap-4 cursor-pointer">
                    Booking Dashboard
                  </li>
                </Link>
                <Link to="/BookingCalender">
                  <li className="p-2  pl-0 text-[#676666] hover:text-black flex items-center gap-4 cursor-pointer">
                    Booking Calender
                  </li>
                </Link>
                <Link to="/BookingAppointments">
                  <li className="p-2  pl-0 text-[#676666] hover:text-black flex items-center gap-4 cursor-pointer">
                    Booking Appointments
                  </li>
                </Link>
                <Link to="/EmployeeManagement">
                  <li className="p-2  pl-0 text-[#676666] hover:text-black flex items-center gap-4 cursor-pointer">
                    Employee Management
                  </li>
                </Link>
                <Link to="/ServicesManagement">
                  <li className="p-2  pl-0 text-[#676666] hover:text-black flex items-center gap-4 cursor-pointer">
                    Services Management
                  </li>
                </Link>
                <Link to="/UserManagement">
                  <li className="p-2  pl-0 text-[#676666] hover:text-black flex items-center gap-4 cursor-pointer">
                    User Management
                  </li>
                </Link>
                <Link to="/EmailNotification">
                  <li className="p-2  pl-0 text-[#676666] hover:text-black flex items-center gap-4 cursor-pointer">
                    Email Notification
                  </li>
                </Link>
                <Link to="/SMSNotification">
                  <li className="p-2  pl-0 text-[#676666] hover:text-black flex items-center gap-4 cursor-pointer">
                    SMS Notification
                  </li>
                </Link>
                <Link to="/Payments">
                  <li className="p-2  pl-0 text-[#676666] hover:text-black flex items-center gap-4 cursor-pointer">
                    Payments
                  </li>
                </Link>
              </ul>
            )}
          </li>
        </Link>

        <Link to="/LoyaltyPoints">
          <li className=" p-5 pl-0 text-[#676666] hover:text-black flex items-center gap-4 cursor-pointer border-b-[0.8px]">
            <FaBook />
            Loyalty Points
          </li>
        </Link>

        <Link to="/LocationManagement">
          <li className=" p-5 pl-0 text-[#676666] hover:text-black flex items-center gap-4 cursor-pointer border-b-[0.8px]">
            <MdLocationOn className="text-xl" />
            Location Management
          </li>
        </Link>

        <Link to="/BannerManagement">
          <li className=" p-5 pl-0 text-[#676666] hover:text-black flex items-center gap-4 cursor-pointer border-b-[0.8px]">
            <FaWindowRestore />
            Banner Management
          </li>
        </Link>

        <Link to="/SMManagement">
          <li className=" p-5 pl-0 text-[#676666] hover:text-black flex items-center gap-4 cursor-pointer border-b-[0.8px]">
            <FaWindowRestore />
            SM Management
          </li>
        </Link>

        <Link to="/SalesReport">
          <li className=" p-5 pl-0 text-[#676666] hover:text-black flex items-center gap-4 cursor-pointer border-b-[0.8px]">
            <FaChartBar />
            Sales Report
          </li>
        </Link>

        <Link to="/Settings">
          <li className=" p-5 pl-0 text-[#676666] hover:text-black flex items-center gap-4 cursor-pointer border-b-[0.8px]">
            <FaCogs />
            Settings
          </li>
        </Link>
      </ul>
    </div>
  );
}

import React, { useState } from "react";
import { MdLogout } from "react-icons/md";
import MagicBell, {
  FloatingNotificationInbox,
} from "@magicbell/magicbell-react";
import { useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();

  const logoutHandler = () => {
    navigate("/");
  };
  const data = [
    {
      update: "70 new employees are shifted",
      timestamp: 1596119688264,
    },
    {
      update: "Time to Take a Break, TADA!!!",
      timestamp: 1596119686811,
    },
  ];
  return (
    <div className="navbar absolute mb-28 sm:w-[98%] sm:mx-4 drop-shadow-lg z-50">
      <div className="logo cursor-pointer flex justify-center">
        <img
          src={process.env.PUBLIC_URL + "/img/header_top.png"}
          alt=""
          className="w-[75%]"
        />
      </div>
      <div className="flex flex-col justify-between sm:flex-row sm:h-20 bg-[#FFFFFF] text-[#2e2e2e] sticky top-0 z-40 ">
        <a href="/" className=" overflow-hidden">
          <img src={process.env.PUBLIC_URL + "/img/logo.jpg"} alt="" />
        </a>

        <div className="flex flex-col items-center sm:items-stretch justify-between">
          <div className="h-[80%] flex items-center justify-end p-3 gap-4 ">
            {/* <div className="search rounded-3xl ring-1 ring-[#b6b6b6] p-2 flex gap-2 items-center">
              <img
                src={process.env.PUBLIC_URL + "/img/search.png"}
                alt=""
                className="cursor-pointer"
              />
              <input
                type="text"
                placeholder="Search"
                className="outline-none"
              />
            </div> */}

            <div className=" items-center p-2 gap-2 hidden sm:flex">
              <span className="bell flex items-center">
                <MagicBell
                  apiKey="cc022a48684d2e21773ee83ab9cfbaf16abe26a4"
                  userEmail="niharkushwaha7@gmail.com"
                  theme={theme}
                  locale="en"
                  className="absolute z-50"
                >
                  {(props) => (
                    <FloatingNotificationInbox
                      width={400}
                      height={500}
                      {...props}
                    />
                  )}
                </MagicBell>
              </span>
              <span className="text-lg">Admin</span>
              <img
                src={process.env.PUBLIC_URL + "/img/user.png"}
                alt=""
                className="w-7"
              />

              <span
                className="flex flex-col hover:animate-pulse items-center cursor-pointer pl-5 hover:text-[#000000]"
                onClick={logoutHandler}
              >
                <MdLogout className="text-xl" />
                <p className="text-sm">Logout</p>
              </span>
            </div>
          </div>
          <img
            src={process.env.PUBLIC_URL + "/img/header_bottom.png"}
            alt=""
            className="w-[95%]"
          />
        </div>
      </div>
    </div>
  );
}

const theme = {
  icon: { borderColor: "#000000", color: "#080808", width: "24px" },
  banner: {
    fontSize: "14px",
    backgroundColor: "#F8F5FF",
    textColor: "#3A424D",
    backgroundOpacity: 1,
  },
  unseenBadge: { backgroundColor: "#F80808" },
  header: {
    fontSize: "17px",
    backgroundColor: "#F8B400",
    textColor: "#2e2e2e",
    borderRadius: "16px",
    fontFamily: "inherit",
  },
  footer: {
    fontSize: "17px",
    backgroundColor: "#F8B400",
    textColor: "#2e2e2e",
    borderRadius: "16px",
    fontFamily: "inherit",
  },
  notification: {
    default: {
      fontSize: "14px",
      textColor: "#3A424D",
      borderRadius: "16px",
      backgroundColor: "#FFFFFF",
      hover: { backgroundColor: "#F2EDFC" },
      state: { color: "transparent" },
      margin: "8px",
      fontFamily: "inherit",
    },
    unseen: {
      textColor: "#3A424D",
      backgroundColor: "#F8F5FF",
      hover: { backgroundColor: "#F2EDFC" },
      state: { color: "#F8B400" },
    },
    unread: {
      textColor: "#3A424D",
      backgroundColor: "#F8F5FF",
      hover: { backgroundColor: "#F2EDFC" },
      state: { color: "#F8B400" },
    },
  },
};

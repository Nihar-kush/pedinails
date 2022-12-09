import React, { useState } from "react";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Link } from "react-router-dom";
import { HiInbox, HiOutlineSearch, HiOutlineTrash } from "react-icons/hi";
import { AiFillMail, AiTwotoneSetting } from "react-icons/ai";
import { MdCall, MdDrafts, MdLabelImportantOutline } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

export default function EmailNotification() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios
    //   .post("/send-email", {
    //     name,
    //     email,
    //     message,
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <div className=" bg-[#E9E9E9] h-full pt-4 overflow-scroll relative">
      <Navbar />
      <div className="MainContainer mb-6 bg-[#E6E6E6] grid grid-cols-4  gap-4 mx-4">
        <Sidebar />
        {/* MAIN VIEW */}
        <div className="Main col-span-4 sm:col-span-3 flex flex-col gap-8 p-4 bg-[#FFFFFF]">
          <div className="div1 flex flex-col gap-3 p-2">
            <p className="text-3xl font-semibold">Email Report Overview</p>
            <div className="cards flex flex-col sm:flex-row  gap-5 items-center">
              <div className="rounded-lg bg-[#F0F0F0] shadow-lg w-[14rem] h-[17rem] overflow-hidden flex flex-col">
                <div className="bg-[#FCAC11] flex items-center font-semibold justify-center h-[20%]">
                  Sent Emails
                </div>
                <div className="text-[#289D01] h-[60%] text-5xl font-semibold flex items-center justify-center">
                  4120
                </div>
                <div className="pl-6 pb-4 h-[20%]">
                  <p className="text-sm">Send time</p>
                  <p className="font-semibold">2014-12-01</p>
                </div>
              </div>
              <Card
                title={"Delivery rate"}
                rate={90}
                l1="Delivered"
                l2="3708 (90%)"
                r1="Bounced"
                r2="120 (10%)"
                color=" #F5AB34"
              />
              <Card
                title={"Open rate (OR)"}
                rate={75}
                l1="Opened"
                l2="3090 (75%)"
                r1="Unopened"
                r2="120 (25%)"
                color="#31B0E4"
              />
              <Card
                title={"Click-to-open rate (CTOR)"}
                rate={50}
                l1="Clicked"
                l2="2060 (50%)"
                r1="Non-clicked"
                r2="120 (50%)"
                color="#80CDBE"
              />
            </div>
          </div>
          <div className="div2 invisible sm:visible flex gap-1 p-2 overflow-hidden rounded-lg bg-[#F0F0F0]">
            <div className="left w-[25%] flex flex-col gap-5 pb-20">
              <div className="bg-[#FCAC11] font-semibold text-white rounded-md p-4 h-20 flex items-center gap-8">
                <img src="/img/user.png" alt="" className="w-10" />
                Pedinails
              </div>
              <div className="flex items-center justify-center ">
                <button
                  onClick={() => setOpen(!open)}
                  className="p-4 w-[90%] rounded-lg bg-[#289D01] text-white"
                >
                  Compose
                </button>
              </div>
              <ul className="flex flex-col text-[0.9rem] px-4">
                <Link to="">
                  <li className=" p-5 pl-0 text-[#676666] hover:text-black flex items-center gap-4 cursor-pointer border-b-[0.8px]">
                    <HiInbox className="text-xl" />
                    Inbox
                  </li>
                </Link>
                <Link to="">
                  <li className=" p-5 pl-0 text-[#676666] hover:text-black flex items-center gap-4 cursor-pointer border-b-[0.8px]">
                    <AiFillMail className="text-xl" />
                    Sent Mail
                  </li>
                </Link>
                <Link to="">
                  <li className=" p-5 pl-0 text-[#676666] hover:text-black flex items-center gap-4 cursor-pointer border-b-[0.8px]">
                    <MdLabelImportantOutline className="text-xl" />
                    Important
                  </li>
                </Link>
                <Link to="">
                  <li className=" p-5 pl-0 text-[#676666] hover:text-black flex items-center gap-4 cursor-pointer border-b-[0.8px]">
                    <MdDrafts className="text-xl" />
                    Drafts
                  </li>
                </Link>
                <Link to="">
                  <li className=" p-5 pl-0 text-[#676666] hover:text-black flex items-center gap-4 cursor-pointer border-b-[0.8px]">
                    <HiOutlineTrash className="text-xl" />
                    Trash
                  </li>
                </Link>
              </ul>
              <div className="flex items-center justify-center gap-1">
                <button className="rounded-[0.25rem] bg-[#007BFF] text-white p-2">
                  <FaPlus className="" />
                </button>
                <button className="rounded-[0.25rem] bg-[#289D01] text-white p-2">
                  <MdCall className="" />
                </button>
                <button className="rounded-[0.25rem] bg-[#17A2B8] text-white p-2">
                  <AiTwotoneSetting className="" />
                </button>
              </div>
            </div>
            <div className="right w-[75%] bg-white">
              <div className="bg-[#FCAC11] rounded-md p-4 h-20 flex items-center justify-between">
                <span className="text-3xl text-white">Inbox</span>
                <span className="flex items-center h-[80%] rounded-[0.25rem] overflow-hidden">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="text-base p-1 px-2 h-full"
                  />
                  <button className="h-full bg-[#289D01] text-white px-[0.5rem]">
                    <HiOutlineSearch className="" />
                  </button>
                </span>
              </div>
            </div>
            {open && (
              <div className="bg-[#7e7e7e85] flex items-center justify-center absolute top-0 left-0 z-50 h-full w-screen ">
                <div className="animate-slide-in rounded-lg w-[35%] h-[75%] bg-white flex flex-col gap-5 p-4">
                  <p className="text-2xl flex items-center justify-between border-b-[0.8px]">
                    Compose
                    <GrClose
                      className="cursor-pointer"
                      onClick={() => setOpen(false)}
                    />
                  </p>
                  <form
                    className="flex flex-col gap-4 "
                    onSubmit={handleSubmit}
                  >
                    <label className="w-20 p-3">
                      To:{" "}
                      <input
                        className="border-[1px] w-80 rounded-md bg-[#F8F8F8]"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </label>
                    <label className="w-20 p-3">
                      Subject:{" "}
                      <input
                        className="border-[1px] w-80 rounded-md bg-[#F8F8F8]"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </label>
                    <label className="w-20 p-3">
                      Message:{" "}
                      <textarea
                        className="border-[1px] h-40 w-80 rounded-md bg-[#F8F8F8]"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </label>
                    <div className="flex gap-2">
                      <span className="py-2 px-3 flex items-center bg-[#EEEEEE] text-white rounded-md cursor-pointer">
                        <label
                          htmlFor="file"
                          className="text-black flex items-center gap-1 cursor-pointer"
                        >
                          <FaPlus className="" /> Attachment
                        </label>
                        <input
                          type="file"
                          id="file"
                          style={{ display: "none" }}
                        />
                      </span>
                      <button
                        onClick={() => setOpen(false)}
                        type="submit"
                        className="py-2 px-3 bg-[#00A8B3] text-white rounded-md"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

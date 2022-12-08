import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function BannerManagement() {
  const bannerData = [
    {
      img: "/img/macpro1.jpg",
      views: 28,
      status: true,
      caption: "This is a test caption",
      url: "thisurl.com",
    },
  ];
  return (
    <div className=" bg-[#E9E9E9] h-screen pt-4 overflow-scroll relative">
      <Navbar />
      <div className="MainContainer mb-6 bg-[#E6E6E6] grid grid-cols-4 gap-4 mx-4">
        <Sidebar />
        {/* MAIN VIEW */}
        <div className="Main col-span-4 sm:col-span-3 p-4 bg-[#FFFFFF]">
          <div className="flex flex-col rounded-lg overflow-hidden bg-[#F0F0F0]">
            <div className="flex justify-between bg-[#565553] p-3 text-white text-lg font-semibold text-center">
              <p className="w-48">Banner Image</p>
              <p className="w-48">Views</p>
              <p className="w-48">Status</p>
              <p className="w-48">Caption</p>
              <p className="w-48">URL</p>
            </div>
            {bannerData.map((data) => (
              <div className="flex flex-col sm:flex-row items-center justify-between bg-[#F0F0F0] p-3 text-[#8D8D8D] text-lg  text-center">
                <p className="w-48 flex justify-center">
                  <img src={data.img} alt="" className="w-24" />
                </p>
                <p className="w-48">{data.views}</p>
                <p className="w-48 flex justify-center">
                  <img
                    src={data.status ? "/img/check.png" : "/img/remove.png"}
                    alt=""
                    className="w-5 h-5"
                  />
                </p>
                <p className="w-48">{data.caption}</p>
                <a href="" className="w-48">
                  {data.url}
                </a>
              </div>
            ))}
            <div className="flex flex-col sm:flex-row items-center justify-between p-4 text-[#8D8D8D] text-sm  text-center">
              <p className="w-48 flex justify-center">
                <input
                  type="file"
                  className="rounded-xl w-52 ring-1 ring-[#B6B6B6]"
                />
              </p>
              <p className="w-48 flex justify-center">
                <input
                  type="number"
                  className="rounded-xl ring-1 ring-[#B6B6B6]"
                />
              </p>
              <p className="w-48 flex justify-center">
                <input
                  type="file"
                  className="rounded-xl ring-1 ring-[#B6B6B6]"
                />
              </p>
              <p className="w-48 flex justify-center">
                <input
                  type="text"
                  className="rounded-xl ring-1 ring-[#B6B6B6]"
                />
              </p>
              <p className="w-48 flex justify-center">
                <input
                  type="text"
                  className="rounded-xl ring-1 ring-[#B6B6B6]"
                />
              </p>
            </div>
            <div className="flex items-center justify-end px-10 py-2 text-[#8D8D8D] text-center">
              <button className="py-2 px-6 text-white rounded-xl font-semibold bg-[#FCAC11] cursor-pointer">
                Submit
              </button>
            </div>
          </div>
          {/* <div className="flex rounded-lg overflow-hidden">
            <div className="card1">
              <div className="bg-[#565553] p-2 text-white text-lg font-semibold text-center">
                Banner Image
              </div>
              <div className="flex p-2 bg-[#F0F0F0] flex-col gap-2 items-center justify-center">
                <img src="/img/macpro1.jpg" alt="" className="w-24" />
                <input
                  className="rounded-xl w-52 ring-1 ring-[#B6B6B6]"
                  type="file"
                  name=""
                  id=""
                />
              </div>
            </div>
            <div className="card2">
              <div className="bg-[#565553] p-2 text-white text-lg font-semibold text-center">
                Views
              </div>
              <div className="flex p-2 bg-[#F0F0F0] flex-col gap-2 items-center justify-center">
                <p className="text-[#565553] text-lg">28</p>
                <input
                  className="rounded-xl  ring-1 ring-[#B6B6B6]"
                  type="number"
                  name=""
                  id=""
                />
              </div>
            </div>
            <div className="card3">
              <div className="bg-[#565553] p-2 text-white text-lg font-semibold text-center">
                Status
              </div>
              <div className="flex p-2 bg-[#F0F0F0] flex-col gap-2 items-center justify-center">
                <img src="/img/check.png" alt="" className="w-4" />
                <input
                  className="rounded-xl  ring-1 ring-[#B6B6B6]"
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>
            <div className="card4">
              <div className="bg-[#565553] p-2 text-white text-lg font-semibold text-center">
                Caption
              </div>
              <div className="flex p-2 bg-[#F0F0F0] flex-col gap-2 items-center justify-center">
                <p className="text-[#565553] text-lg">28</p>
                <input
                  className="rounded-xl  ring-1 ring-[#B6B6B6]"
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>
            <div className="card5">
              <div className="bg-[#565553] p-2 text-white text-lg font-semibold text-center">
                URL
              </div>
              <div className="flex p-2 bg-[#F0F0F0] flex-col gap-2 items-center justify-center">
                <p className="text-[#565553] text-lg">28</p>
                <input
                  className="rounded-xl ring-1  ring-[#B6B6B6]"
                  type="text"
                  name=""
                  id=""
                />
                <button className="py-2 px-4 text-white rounded-lg bg-[#FCAC11] cursor-pointer">
                  Submit
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
export default function EmployeeManagement() {
  return (
    <div className=" bg-[#E9E9E9] h-screen pt-4 overflow-scroll">
      <Navbar />
      <div className="mt-4 mb-6 bg-[#E6E6E6] grid grid-cols-4 gap-4 mx-4">
        <Sidebar />
        {/* MAIN VIEW */}
        <div className="Main col-span-4 sm:col-span-3 p-4 bg-[#FFFFFF]">
          <div className="div1 w-full flex items-center p-4">
            <div className="rounded-[10px] w-full h-[21rem] p-4 flex gap-3 shadow-[4.0px_8.0px_8.0px_#a1a1a15f]  bg-[#F0F0F0]">
              <div className="div1 w-[25%]">
                <form
                  action=""
                  className="flex flex-col gap-3 text-sm font-medium border-r-[1px] px-2 border-[#9c9c9c]"
                >
                  <div className="flex flex-col">
                    <label for="name">Full Name</label>
                    <input id="name" type="text" className="rounded-3xl" />
                  </div>
                  <div className="flex flex-col">
                    <label for="code">EMP Code</label>
                    <input id="code" type="text" className="rounded-3xl" />
                  </div>
                  <div className="flex flex-col">
                    <label for="salary">Salary</label>
                    <input id="salary" type="text" className="rounded-3xl" />
                  </div>
                  <div className="flex flex-col">
                    <label for="category">Category</label>
                    <input id="category" type="text" className="rounded-3xl" />
                  </div>
                  <div className="flex gap-5 pt-5">
                    <button className="bg-[#289C04] p-1 w-20 font-semibold text-white rounded-lg">
                      Submit
                    </button>
                    <button className="bg-[#289C04] p-1 w-20 font-semibold text-white rounded-lg">
                      Reset
                    </button>
                  </div>
                </form>
              </div>
              <div className="div2 w-[75%] p-2">
                <div className="flex text-sm font-semibold bg-[#DDDDDD]">
                  <span className="p-2 pr-6 w-[30%]">Full Name</span>
                  <span className="p-2 pr-6 w-[25%]">EMP Code</span>
                  <span className="p-2 pr-4 w-[20%]">Salary</span>
                  <span className="p-2 pr-4 w-[15%]">City</span>
                  <span className="p-2"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

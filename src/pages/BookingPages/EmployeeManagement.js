import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { HiOutlineTrash } from "react-icons/hi";
import axios from "axios";
import { BASE_SERVER_URL } from "../../config";

export default function EmployeeManagement() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [salary, setSalary] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    axios
      .get(`${BASE_SERVER_URL}/api/bookings/employees`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [data]);

  const deleteEmp = (id) => {
    axios
      .post(`${BASE_SERVER_URL}/api/bookings/employees/delete`, { id: id })
      .then((response) => {
        if (response.data.success) {
          alert("Employee deleted successfully");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const employeeHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      name: name,
      code: code,
      salary: salary,
      category: category,
    };
    axios
      .post(`${BASE_SERVER_URL}/api/bookings/employees`, data)
      .then((response) => {
        if (response.data.success) {
          setData((prev) => [...prev, data]);
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <div className=" bg-[#E9E9E9] h-screen pt-4 overflow-scroll relative">
      <Navbar />
      <div className="MainContainer mb-6 bg-[#E6E6E6] grid grid-cols-4 gap-4 mx-4">
        <Sidebar />
        {/* MAIN VIEW */}
        <div className="Main col-span-4 sm:col-span-3 p-4 bg-[#FFFFFF]">
          <div className="div1 w-full flex items-center p-4">
            <div className="rounded-[10px] w-full h-[21rem] p-4 flex gap-3 shadow-[4.0px_8.0px_8.0px_#a1a1a15f]  bg-[#F0F0F0]">
              <div className="div1 w-[25%]">
                <form
                  className="flex flex-col gap-3 text-sm font-medium border-r-[1px] px-2 border-[#9c9c9c]"
                  onSubmit={employeeHandler}
                >
                  <div className="flex flex-col">
                    <label for="name">Full Name</label>
                    <input
                      required
                      id="name"
                      type="text"
                      className="rounded-3xl pl-2"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label for="code">EMP Code</label>
                    <input
                      required
                      id="code"
                      type="text"
                      className="rounded-3xl pl-2"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label for="salary">Salary</label>
                    <input
                      required
                      id="salary"
                      type="text"
                      className="rounded-3xl pl-2"
                      value={salary}
                      onChange={(e) => setSalary(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label for="category">Category</label>
                    <input
                      required
                      id="category"
                      type="text"
                      className="rounded-3xl pl-2"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-5 pt-5">
                    <button
                      type="submit"
                      className="bg-[#289C04] p-1 w-20 font-semibold text-white rounded-lg"
                    >
                      {loading ? "processing" : "Submit"}
                    </button>
                    <button
                      className="bg-[#289C04] p-1 w-20 font-semibold text-white rounded-lg"
                      onClick={(e) => {
                        e.preventDefault();
                        setName("");
                        setCode("");
                        setSalary("");
                        setCategory("");
                      }}
                    >
                      Reset
                    </button>
                  </div>
                </form>
              </div>
              <div className="div2 w-[75%] flex flex-col gap-2 p-2">
                <div className="flex text-sm font-semibold bg-[#DDDDDD]">
                  <span className="p-2 pr-6 w-[30%]">Full Name</span>
                  <span className="p-2 pr-6 w-[25%]">EMP Code</span>
                  <span className="p-2 pr-4 w-[20%]">Salary</span>
                  <span className="p-2 pr-4 w-[15%]">Category</span>
                  <span className="p-2"></span>
                </div>
                {data &&
                  data.map((data) => (
                    <div className="flex flex-col sm:flex-row  py-2 bg-[#F0F0F0] text-sm">
                      <span className="p-2 pr-6 w-[30%]">{data.name}</span>
                      <span className="p-2 pr-6 w-[25%]">{data.code}</span>
                      <span className="p-2 pr-4 w-[20%]">{data.salary}</span>
                      <span className="p-2 pr-4 w-[15%]">{data.category}</span>
                      <span
                        onClick={() => deleteEmp(data._id)}
                        className="flex items-center cursor-pointer"
                      >
                        <HiOutlineTrash className="text-xl hover:scale-125" />
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

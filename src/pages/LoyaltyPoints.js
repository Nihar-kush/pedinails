import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { ResponsiveBar } from "@nivo/bar";
import { BASE_SERVER_URL } from "../config";
// import { bar_data } from "../utils/barData";

export default function LoyaltyPoints() {
  const [data, setData] = useState(null);
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [email, setEmail] = useState("");
  const [points, setPoints] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    if (!query) {
      setFilteredUsers([]);
      return;
    }
    const filtered = usersData.filter(
      (user) => user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
    setFilteredUsers(filtered);
  }, [query]);

  useEffect(() => {
    axios
      .get(`${BASE_SERVER_URL}/api/users`)
      .then((response) => {
        setUsersData(response.data);
        setQuery("");
      })
      .catch((error) => {
        console.error(error);
      });
  }, [update]);

  useEffect(() => {
    axios
      .get(`${BASE_SERVER_URL}/api/points`)
      .then((response) => {
        setData(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get(`${BASE_SERVER_URL}/api/users`)
      .then((response) => {
        setUsersData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const addPoints = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = { email, points };
    axios
      .post(`${BASE_SERVER_URL}/api/points`, data)
      .then((response) => {
        setLoading(false);
        if (response.data.success) {
          alert("Points added successfully");
          setUpdate(!update);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
    setEmail("");
    setPoints("");
  };

  const LP_data = [
    {
      id: 1,
      name: "Mahima",
      type: "Premium Member",
      points: "130 POINTS",
      time: "15:00hrs",
    },
    {
      id: 2,
      name: "Simran",
      type: "Member",
      points: "24 POINTS",
      time: "17:00hrs",
    },
    {
      id: 3,
      name: "Vidhi",
      type: "Member",
      points: "17 POINTS",
      time: "11:00hrs",
    },
    {
      id: 4,
      name: "Kanika",
      type: "Premium Member",
      points: "110 POINTS",
      time: "15:00hrs",
    },
    {
      id: 5,
      name: "Ishika",
      type: "Premium Member",
      points: "120 POINTS",
      time: "11:00hrs ",
    },
    {
      id: 6,
      name: "Tattoo",
      type: "Member",
      points: "50 POINTS",
      time: "11:00hrs",
    },
  ];

  return (
    <div className="lp bg-[#E9E9E9] h-screen pt-4 overflow-scroll relative">
      <Navbar />
      <div className="MainContainer mb-6 bg-[#E6E6E6] grid grid-cols-4 gap-4 mx-4">
        <Sidebar />
        {/* MAIN VIEW */}
        <div className="Main col-span-4 sm:col-span-3 flex flex-col gap-8 p-4 bg-[#FFFFFF]">
          <div className="div1 flex gap-4 sm:gap-0 sm:flex-row flex-col items-center sm:items-start">
            <div className="flex sm:w-[45%] px-4 w-full">
              <div className="rounded-[20px] w-full h-[22rem] flex  bg-[#F0F0F0]">
                {data && (
                  <ResponsiveBar
                    data={data.monthlyData}
                    keys={["totalPoints"]}
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
            <div className="flex gap-5 sm:w-[55%]">
              <div className="flex flex-col gap-6">
                <div className="flex rounded-[20px] justify-between py-4 px-10 items-center bg-[#F0F0F0] shadow-[4.0px_8.0px_8.0px_#a1a1a15f]">
                  <span className="flex flex-col justify-around pb-6 text-[#676666]">
                    <p className="text-base">Total Memberships</p>
                    <p className="text-5xl text-black font-semibold">
                      {data ? data.totalMembers : "..."}
                    </p>
                  </span>
                  <span className="flex items-center">
                    <img src="/img/calendar (3).png" alt="" className="w-16" />
                  </span>
                </div>
                <div className="flex rounded-[20px] justify-between py-4 px-10 items-center bg-[#F0F0F0] shadow-[4.0px_8.0px_8.0px_#a1a1a15f]">
                  <span className="flex flex-col justify-around pb-6 text-[#676666]">
                    <p className="text-base">Today's Points</p>
                    <p className="text-5xl text-black font-semibold">
                      {data ? data.todaysPoints : "..."}
                    </p>
                  </span>
                  <span className="flex items-center">
                    <img src="/img/calendar (4).png" alt="" className="w-16" />
                  </span>
                </div>
              </div>
              <div className="flex rounded-[20px] justify-center w-72 py-4 bg-[#F0F0F0] shadow-[4.0px_8.0px_8.0px_#a1a1a15f] px-5">
                <span className="flex flex-col gap-10 w-full text-[#676666]">
                  <p className="text-xl font-semibold">Add Loyalty Points</p>
                  <form
                    className=" flex flex-col gap-3 text-black font-semibold"
                    onSubmit={addPoints}
                  >
                    <input
                      type="email"
                      required
                      placeholder="@email"
                      className="rounded-lg p-2"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      type="number"
                      required
                      placeholder="points"
                      min="0"
                      className="rounded-lg p-2"
                      value={points}
                      onChange={(e) => setPoints(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="py-2 mt-6 px-4 text-white rounded-lg bg-[#FCAC11] cursor-pointer"
                    >
                      {loading ? "Adding" : "Add"}
                    </button>
                  </form>
                </span>
              </div>
            </div>
          </div>
          <div className="div2 flex p-4 items-center justify-between">
            <div className="invisible sm:visible rounded-3xl flex items-center bg-[#F0F0F0] py-2 px-5 ml-auto">
              <input
                type="text"
                placeholder="Search..."
                className="bg-[#F0F0F0] outline-none"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <img
                src="/img/search1.png"
                alt=""
                className="w-5 cursor-pointer"
                onClick={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="div3 h-[25rem] flex flex-col gap-6 py-4 px-2 overflow-y-scroll scroll-smooth">
            <div className="flex text-[#F0F0F0] text-xs sm:text-base font-semibold p-5 rounded-[10px] justify-around items-center bg-[#4C4C4C] transition duration-75 ease-in-out shadow-md">
              <img src="/img/target.png" alt="" className="w-7" />
              <span className="text-center w-40">Customer</span>
              <span className="text-center w-40">ID</span>
              <span className="text-center w-40 ">Phone</span>
              <span className="text-center w-40">Email</span>
              <span className="text-center w-40">Points</span>
            </div>
            {(filteredUsers.length > 0 ? filteredUsers : usersData).map(
              (data) => {
                return (
                  <div
                    className="flex text-[#676666] text-xs sm:text-base p-5 rounded-[10px] justify-around items-center bg-[#F0F0F0] transition duration-75 ease-in-out shadow-md hover:bg-[#fcac1125] hover:shadow-[#fcac1170]"
                    key={data.id}
                  >
                    <img src="/img/target.png" alt="" className="w-7" />
                    <span className="text-center w-40 truncate">
                      {data.name}
                    </span>
                    <span className="text-center w-40 truncate">
                      {data._id}
                    </span>
                    <span className="text-center w-40">{data.phoneNumber}</span>
                    <span className="text-center w-40 truncate">
                      {data.email}
                    </span>
                    <span className="text-center w-40">
                      {data.points > 0 ? data.points : "0"}
                    </span>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

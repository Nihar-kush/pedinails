import { ResponsiveLine } from "@nivo/line";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { line_data } from "../../utils/lineData";
import axios from "axios";
import { BASE_SERVER_URL } from "../../config";
import { TiUserAdd } from "react-icons/ti";
import AddUpdateUser from "../../components/AddUpdateUser";
import UserCard from "../../components/UserCard";

export default function UserManagement() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [selectedUserId, setSelectedUserId] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [number, setNumber] = useState("");
  const [query, setQuery] = useState("");
  const [data, setData] = useState({});
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [active, setActive] = useState(false);
  const [activeEdit, setActiveEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_SERVER_URL}/api/analytics`)
      .then((response) => {
        setData(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });

    // axios
    //   .get(`${BASE_SERVER_URL}/api/users`)
    //   .then((response) => {
    //     setUsersData(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }, []);

  useEffect(() => {
    axios
      .get(`${BASE_SERVER_URL}/api/users`)
      .then((response) => {
        setUsersData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [usersData]);

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

  const addUser = (e) => {
    console.log("hp");
    e.preventDefault();
    setLoading(true);
    const data = { name, email, number };
    axios
      .post(`${BASE_SERVER_URL}/api/users/add`, data)
      .then((response) => {
        setLoading(false);
        if (response.data.success) {
          console.log("success");
          alert("User added successfully");
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    setName("");
    setRole("");
    setEmail("");
    setNumber("");
    setActive(false);
  };

  const deleteUser = (id) => {
    // eslint-disable-next-line
    if (confirm("Are you sure you want to delete this item?")) {
      axios
        .post(`${BASE_SERVER_URL}/api/users/delete`, { id })
        .then((response) => {
          if (response.data.success) {
            alert("User deleted successfully");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      // The user clicked "Cancel"
      // Do nothing
    }
  };

  const updateUser = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = { id: selectedUserId, name, email, number };
    axios
      .post(`${BASE_SERVER_URL}/api/users/update`, data)
      .then((response) => {
        setLoading(false);
        if (response.data.success) {
          alert("User updated successfully");
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
    setActiveEdit(false);
    setName("");
    setRole("");
    setEmail("");
    setNumber("");
  };

  function handleOnUserEditClick(data) {
    setSelectedUserId(data._id);
    setName(data.name);
    setRole(data.role);
    setNumber(data.phoneNumber);
    setEmail(data.email);
    setActiveEdit(!activeEdit);
  }

  return (
    <div className=" bg-[#E9E9E9] h-full pt-4 overflow-scroll relative">
      <Navbar />
      <div className="MainContainer mb-6 bg-[#E6E6E6] grid grid-cols-4 gap-4 mx-4">
        <Sidebar />
        {/* MAIN VIEW */}
        <div className="Main col-span-4 sm:col-span-3 flex flex-col gap-8 p-4 bg-[#FFFFFF]">
          <div className="div1 flex gap-4 sm:gap-0 sm:flex-row flex-col items-center sm:items-start">
            <div className="flex sm:w-[70%] px-4 w-full">
              <div className="rounded-[20px] w-full h-[21rem] flex shadow-[4.0px_8.0px_8.0px_#a1a1a15f]  bg-[#F0F0F0]">
                <ResponsiveLine
                  data={line_data}
                  margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
                  xScale={{ type: "point" }}
                  yScale={{
                    type: "linear",
                    min: "auto",
                    max: "auto",
                    stacked: true,
                    reverse: false,
                  }}
                  yFormat=" >-.2f"
                  curve="natural"
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    orient: "bottom",
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legendOffset: 36,
                    legendPosition: "middle",
                  }}
                  axisLeft={{
                    orient: "left",
                    tickSize: 5,
                    tickPadding: 10,
                    tickRotation: 0,
                    legendOffset: -40,
                    legendPosition: "middle",
                  }}
                  colors={{ scheme: "pastel2" }}
                  pointSize={10}
                  pointColor={{ theme: "background" }}
                  pointBorderWidth={2}
                  pointBorderColor={{ from: "serieColor" }}
                  pointLabelYOffset={-12}
                  useMesh={true}
                />
              </div>
            </div>
            <div className="flex justify-end px-2 sm:w-[30%]">
              <div className="flex flex-col gap-6">
                <div className="flex rounded-[20px] justify-between py-4 px-6 items-center bg-[#F0F0F0] shadow-[4.0px_8.0px_8.0px_#a1a1a15f]">
                  <span className="flex flex-col justify-around pb-6 text-[#676666]">
                    <p className="text-base">Total Bookings</p>
                    {/* <p className="text-[0.6rem]">THIS MONTH</p> */}
                    <p className="text-5xl text-black font-semibold">
                      {data.total_bookings}
                    </p>
                  </span>
                  <span className="flex items-center">
                    <img src="/img/calendar (4).png" alt="" className="w-16" />
                  </span>
                </div>
                <div className="flex rounded-[20px] justify-between py-4 px-6 items-center bg-[#F0F0F0] shadow-[4.0px_8.0px_8.0px_#a1a1a15f]">
                  <span className="flex flex-col justify-around pb-6 text-[#676666]">
                    <p className="text-base">Total Memberships</p>
                    {/* <p className="text-[0.6rem]">THIS MONTH</p> */}
                    <p className="text-5xl text-black font-semibold">
                      {data.total_memberships}
                    </p>
                  </span>
                  <span className="flex items-center">
                    <img src="/img/customer.png" alt="" className="w-16" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="div2 flex p-4 items-center justify-between">
            <button
              onClick={() => setActive(!active)}
              className=" flex items-center gap-3 text-[#4C4C4C] hover:text-black bg-[#F0F0F0] rounded-3xl py-2 px-4"
            >
              Add User <TiUserAdd className="text-lg" />
            </button>
            {active && (
              <AddUpdateUser
                update={false}
                setRole={setRole}
                role={role}
                setActive={setActive}
                setName={setName}
                name={name}
                onSubmit={addUser}
                email={email}
                setEmail={setEmail}
                number={number}
                setNumber={setNumber}
                loading={loading}
              />
            )}
            {activeEdit && (
              <AddUpdateUser
                setSelectedUserId={setSelectedUserId}
                selectedUserId={selectedUserId}
                update={true}
                setActive={setActiveEdit}
                setName={setName}
                name={name}
                setRole={setRole}
                role={role}
                onSubmit={updateUser}
                email={email}
                setEmail={setEmail}
                number={number}
                setNumber={setNumber}
                loading={loading}
              />
            )}
            <div className="invisible sm:visible rounded-3xl flex items-center bg-[#F0F0F0] py-2 px-5">
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
              />
            </div>
          </div>
          <div className="div3 flex flex-col gap-6 py-4 px-2 h-[40rem] overflow-y-scroll scroll-smooth">
            <div className="flex text-[#F0F0F0] text-xs sm:text-base font-semibold rounded-[10px] gap-8 p-6 items-center bg-[#4C4C4C] transition duration-75 ease-in-out shadow-md">
              <img src="/img/target.png" alt="" className="w-7" />
              <span className="text-center w-40">Username</span>
              {/* <span className="text-center w-40">UserId</span> */}
              <span className="text-center w-40 ">Role</span>
              <span className="text-center w-40">Phone</span>
              <span className="text-center w-40">Email</span>
            </div>

            {(query ? filteredUsers : usersData).map((data) => {
              return (
                <UserCard
                  mykey={`user-card-${data.id}`}
                  data={data}
                  handleOnUserEditClick={handleOnUserEditClick}
                  deleteUser={deleteUser}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

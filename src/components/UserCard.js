import React from "react";
import { FaEdit } from "react-icons/fa";
import { HiOutlineTrash } from "react-icons/hi";

export default function UserCard({
  data,
  handleOnUserEditClick,
  deleteUser,
  mykey,
}) {
  return (
    <div
      className="flex text-[#676666] text-xs sm:text-base rounded-[10px] gap-8 p-6 items-center transition duration-75 ease-in-out shadow-md hover:bg-[#fcac1125] hover:shadow-[#fcac1170]"
      key={mykey}
    >
      <img src="/img/target.png" alt="" className="w-6" />
      <span className="text-center w-40 truncate">{data.name}</span>
      {/* <span className="text-center w-40 truncate">{data._id}</span> */}
      <span className="text-center w-40">{data.role}</span>
      <span className="text-center w-40">{data.phoneNumber}</span>
      <span className="text-center w-40 truncate">{data.email}</span>
      <span className="flex gap-8 ml-auto items-center cursor-pointer">
        <FaEdit
          className="text-xl hover:scale-125 "
          onClick={() => handleOnUserEditClick(data)}
        />
        <HiOutlineTrash
          className="text-xl hover:scale-125"
          onClick={() => deleteUser(data._id)}
        />
      </span>
    </div>
  );
}

import React from "react";
import { GrClose } from "react-icons/gr";

export default function AddUpdateUser({
  setSelectedUserId,
  selectedUserId,
  update,
  setActive,
  setName,
  name,
  onSubmit,
  email,
  setEmail,
  number,
  setNumber,
  loading,
}) {
  return (
    <div className="bg-[#7e7e7e85] flex justify-center items-center fixed top-0 left-0 z-50 h-screen w-screen ">
      <div className="animate-slide-in rounded-lg w-[35%] h-fit bg-white flex flex-col gap-5 p-6 py-6 min-w-[400px]">
        <p className="text-2xl flex items-center justify-between border-b-[0.8px]">
          {update ? "Update User" : "Add User"}
          <GrClose
            className="cursor-pointer"
            onClick={() => {
              setName("");
              setEmail("");
              setNumber("");
              setActive(false);
            }}
          />
        </p>
        <form className="flex flex-col gap-4 " onSubmit={onSubmit}>
          <label className="w-20 p-3">
            Username:{" "}
            <input
              required
              className="border-[1px] w-80 rounded-md bg-[#F8F8F8]"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="w-20 p-3">
            Email:{" "}
            <input
              required
              className="border-[1px] w-80 rounded-md bg-[#F8F8F8]"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="w-28 p-3">
            Mobile no:{" "}
            <input
              required
              className="border-[1px] w-80 rounded-md bg-[#F8F8F8]"
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </label>
          <div className="flex gap-2 px-3">
            <button
              type="submit"
              className="py-2 w-40 font-semibold px-3 bg-[#00A8B3] text-white rounded-md"
            >
              {loading
                ? update
                  ? "Updating"
                  : "Adding"
                : update
                ? "Update"
                : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

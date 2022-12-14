import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { BASE_SERVER_URL } from "../config";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function addUser(e) {
    e.preventDefault();
    axios
      .post(`${BASE_SERVER_URL}/api/auth/register`, {
        name,
        email,
        password,
      })
      .then((response) => {
        if (response.data.success) {
          alert("User added successfully");
        }else{
          alert(response.data.errorMsg);
        }
      });
  }

  return (
    <div className="formContainer h-screen w-screen flex items-center justify-center">
      <div className="formWrapper flex flex-col items-center gap-4 px-14 py-10 rounded-lg ring-1 ring-[#F8B400]">
        <img src="/img/logo.jpg" alt="" className="" />
        <form className="flex flex-col gap-4 w-full" onSubmit={addUser}>
          <input
            type="name"
            value={name}
            placeholder="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="text-lg border-b-[1px] p-2"
          />
          <input
            type="email"
            value={email}
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="text-lg border-b-[1px] p-2"
          />
          <input
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="text-lg border-b-[1px] p-2"
          />
          <button className="py-3 w-full bg-[#F8B400] text-white text-lg rounded-sm">
            Sign up
          </button>
        </form>
        {/* {error && <span className="alert">Something went wrong!</span>} */}
        <p>
          Already have an account?{" "}
          <Link to="/" className="text-[#F8B400] hover:text-[#b78600]">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function registerUser(e) {
    e.preventDefault();
    // const response = await axios.post(
    //   "https://floating-shore-92853.herokuapp.com/api/auth/register",
    //   {
    //     name,
    //     email,
    //     password,
    //   }
    // );
    // const data = response.data;
    // console.log(data);
    navigate("/Dashboard");
    // if (data) {
    //   navigate("/Dashboard");
    // }
  }

  return (
    <div className="formContainer h-screen w-screen flex items-center justify-center">
      <div className="formWrapper flex flex-col items-center gap-4 px-14 py-10 rounded-lg ring-1 ring-[#F8B400]">
        <img src="/img/logo.jpg" alt="" className="" />
        <form className="flex flex-col gap-4 w-full" onSubmit={registerUser}>
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

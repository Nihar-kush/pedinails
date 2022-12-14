import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { BASE_SERVER_URL } from "../config";

export default function Login() {
  const [nameOrMail, setNameOrMail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const { setCurrentUser, currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (currentUser) {
      navigate("/Dashboard");
    }
  }, [currentUser]);

  async function loginUser(e) {
    e.preventDefault();
    (nameOrMail || pass) === ""
      ? alert("Please enter details")
      : axios
          .post(`${BASE_SERVER_URL}/api/auth/login`, {
            nameOrMail,
            pass,
          })
          .then((response) => {
            response.data.success === true
              ? setCurrentUser(response.data.data)
              : alert("Enter correct details");
          })
          .catch((error) => {
            return error;
          });
  }

  return (
    <div className="formContainer h-screen w-screen flex items-center justify-center">
      <div className="formWrapper flex flex-col items-center gap-4 px-14 py-10 rounded-lg ring-1 ring-[#F8B400]">
        <img src="/img/logo.jpg" alt="" />
        <form className="flex flex-col gap-4 w-full " onSubmit={loginUser}>
          <input
            type="text"
            value={nameOrMail}
            placeholder="username / email"
            onChange={(e) => {
              setNameOrMail(e.target.value);
            }}
            className="text-lg border-b-[1px] p-2"
          />
          <input
            type="password"
            value={pass}
            placeholder="password"
            onChange={(e) => {
              setPass(e.target.value);
            }}
            className="text-lg border-b-[1px] p-2"
          />
          <button className="py-3 w-full bg-[#F8B400] text-white text-lg rounded-sm">
            Sign in
          </button>
        </form>
        {/* {error && <span className="alert">Something went wrong!</span>} */}
        {/* <p>
          Don't have an account?{" "}
          <Link to="/Register" className="text-[#F8B400] hover:text-[#b78600]">
            Register
          </Link>
        </p> */}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setuser] = useState({
    Name: "",
    Password: "",
  });

  const navigate = useNavigate();

  const Login = (e) => {
    if (user.Name === "" && user.Password === "") {
      navigate("/admin-panel/home");
    } else {
      alert("Wrong Password. Try Again!!");
    }
  };

  return (
    <>
      <body className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div className="bg-[#0b2a97] p-8 rounded-lg w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[30vw]">
          <div className="text-center space-y-3.5">
            <img
              src="https://homemaster.in/upload/logo/images_(2).jpg"
              className="object-cover w-20 h-20 mx-auto rounded-full"
              alt=""
            />
            <h1 className="font-semibold text-white md:text-lg">Sign in your account</h1>
          </div>
          <div className="flex flex-col justify-center gap-10 mt-5 text-white">
            <div className="flex flex-col space-y-2">
              <label htmlFor="Username">Username</label>
              <input
                type="text"
                id="Username"
                value={user.Name}
                onChange={(e) => {
                  setuser({ ...user, Name: e.target.value });
                }}
                className="p-3 text-black rounded-lg outline-none"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                id="Password"
                value={user.Password}
                onChange={(e) => {
                  setuser({ ...user, Password: e.target.value });
                }}
                className="p-3 text-black rounded-lg outline-none"
              />
            </div>
            <button className="bg-white py-3 rounded-lg text-[#0b2a97] font-semibold text-sm">
              LOGIN
            </button>
          </div>
        </div>
      </body>
    </>
  );
}

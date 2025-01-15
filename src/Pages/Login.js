import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";

export default function Login() {
  const [user, setUser] = useState({
    Name: "",
    Password: "",
  });
  const navigate = useNavigate();

  const Login = async () => {
    try {
      const userDocRef = doc(db, "ADMIN", "H7RMEkwCUDhuU1mbFf55");
      const docSnapshot = await getDoc(userDocRef);

      if (docSnapshot.exists()) {
        const storedUser = docSnapshot.data();

        console.log(storedUser);

        if (
          user.Name.toString() === storedUser.Name &&
          user.Password.toString() === storedUser.Pass
        ) {
          alert("Login Successful");
          navigate("/home");
        } else {
          alert("Wrong Username or Password. Try Again!");
        }
      } else {
        alert("No such user exists!");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Something went wrong! Please try again.");
    }
  };

  return (
    <>
      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div className="bg-[#0b2a97] p-8 rounded-lg w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[30vw]">
          <div className="text-center space-y-3.5">
            <img
              src="https://homemaster.in/upload/logo/images_(2).jpg"
              className="object-cover w-20 h-20 mx-auto rounded-full"
              alt=""
            />
            <h1 className="font-semibold text-white md:text-lg">
              Sign in to your account
            </h1>
          </div>
          <div className="flex flex-col justify-center gap-10 mt-5 text-white">
            <div className="flex flex-col space-y-2">
              <label htmlFor="Username">Username</label>
              <input
                type="text"
                id="Username"
                value={user.Name}
                onChange={(e) => {
                  setUser({ ...user, Name: e.target.value });
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
                  setUser({ ...user, Password: e.target.value });
                }}
                className="p-3 text-black rounded-lg outline-none"
              />
            </div>
            <button
              className="bg-white py-3 rounded-lg text-[#0b2a97] font-semibold text-sm"
              onClick={Login}
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import SideBar from "../components/SideBar";
import Orders from "../components/Orders";
import Edit from "../components/Edit";

export default function Home() {
  return (
    <>
      <div className="border-b-[1px] p-1 border-gray-300">
        <div className="flex items-center justify-between px-6">
          <img
            className="object-contain h-20 w-28"
            src="https://homemaster.in/upload/logo/images_(2).jpg"
            alt=""
          />
          <h1 className="text-lg ">HomeMaster</h1>
        </div>
      </div>

      <div className="flex">
        <SideBar />
        {/* <Orders /> */}
        <Edit />
      </div>
    </>
  );
}

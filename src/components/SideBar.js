import React from "react";
import { CiHome } from "react-icons/ci";

export default function SideBar() {
  return (
    <>
      <aside className="border-[1px] w-[18vw] border-gray-300  h-screen hidden md:block ">
        <ul className="px-10 space-y-12 pt-11">
          <li className="flex items-center space-x-5 cursor-pointer">
            <CiHome size={25} />
            <h1>Home</h1>
          </li>
          <li className="flex items-center space-x-5 cursor-pointer">
            <CiHome size={25} />
            <h1>About</h1>
          </li>
          <li className="flex items-center space-x-5 cursor-pointer">
            <CiHome size={25} />
            <h1>Edit Details</h1>
          </li>
          <li className="flex items-center space-x-5 cursor-pointer">
            <CiHome size={25} />
            <h1>Logout</h1>
          </li>
        </ul>
      </aside>
    </>
  );
}

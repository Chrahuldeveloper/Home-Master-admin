import React from "react";
import { CiHome } from "react-icons/ci";
import { MdShoppingCartCheckout } from "react-icons/md";

export default function SideBar({ setsection }) {
  return (
    <>
      <aside className="border-[1px] w-[13vw] border-gray-300  h-screen hidden md:block ">
        <ul className="px-10 space-y-12 pt-11">
          <li
            className="flex items-center space-x-5 text-sm cursor-pointer"
            onClick={() => {
              setsection("Orders");
            }}
          >
            <MdShoppingCartCheckout size={25} />
            <h1>Orders</h1>
          </li>
          <li
            className="flex items-center space-x-5 text-sm cursor-pointer"
            onClick={() => {
              setsection("Enquires");
            }}
          >
            <CiHome size={25} />
            <h1>Enquires</h1>
          </li>
          <li
            className="flex items-center space-x-5 text-sm cursor-pointer"
            onClick={() => {
              setsection("Edit");
            }}
          >
            <CiHome size={25} />
            <h1>Edit Details</h1>
          </li>
          <li className="flex items-center space-x-5 text-sm cursor-pointer">
            <CiHome size={25} />
            <h1>Logout</h1>
          </li>
        </ul>
      </aside>
    </>
  );
}

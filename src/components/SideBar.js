import React from "react";
import { MdShoppingCartCheckout } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { MdLogout } from "react-icons/md";

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
            <h1 className="font-semibold">Orders</h1>
          </li>
          <li
            className="flex items-center space-x-5 text-sm cursor-pointer"
            onClick={() => {
              setsection("Enquires");
            }}
          >
            <MdCall size={25} />
            <h1 className="font-semibold">Enquires</h1>
          </li>
          <li
            className="flex items-center space-x-5 text-sm cursor-pointer"
            onClick={() => {
              setsection("Edit");
            }}
          >
            <BiEditAlt size={25} />
            <h1 className="font-semibold">Edit Details</h1>
          </li>
          <li className="flex items-center space-x-5 text-sm cursor-pointer">
            <MdLogout size={25} />
            <h1 className="font-semibold">Logout</h1>
          </li>
        </ul>
      </aside>
    </>
  );
}

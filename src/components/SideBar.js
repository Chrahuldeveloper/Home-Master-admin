import React from "react";
import { MdShoppingCartCheckout } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

export default function SideBar({ setsection, settoggle }) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-md">
      <aside className="fixed top-0 left-0 w-[70vw] md:w-[50vw] lg:w-[15vw] h-screen border-r-[1px] border-gray-300 bg-white">
        <div className="flex justify-end px-5 pt-5">
          <RxCross2
            size={23}
            color="black"
            cursor={"pointer"}
            onClick={() => {
              settoggle(false);
            }}
          />
        </div>
        <ul className="px-10 pt-8 space-y-12">
          <li
            className="flex items-center space-x-5 text-sm cursor-pointer"
            onClick={() => {
              setsection("Orders");
               settoggle(false);
            }}
          >
            <MdShoppingCartCheckout size={25} />
            <h1 className="font-semibold">Orders</h1>
          </li>
          <li
            className="flex items-center space-x-5 text-sm cursor-pointer"
            onClick={() => {
              setsection("Enquires");
               settoggle(false);
            }}
          >
            <MdCall size={25} />
            <h1 className="font-semibold">Enquires</h1>
          </li>
          <li
            className="flex items-center space-x-5 text-sm cursor-pointer"
            onClick={() => {
              setsection("Edit");
               settoggle(false);
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
    </div>
  );
}

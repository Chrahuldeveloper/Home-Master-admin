import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Orders from "../components/Orders";
import Edit from "../components/Edit";
import Enquire from "../components/Enquire";
import { CiMenuFries } from "react-icons/ci";

export default function Home() {
  const [section, setsection] = useState(false);

  const [toggle, settoggle] = useState(false);

  return (
    <>
      <div className="border-b-[1px] p-1 border-gray-300">
        <div className="flex items-center justify-between px-10">
          <img
            className="object-contain h-20 w-28"
            src="https://homemaster.in/upload/logo/images_(2).jpg"
            alt=""
          />
          <CiMenuFries
            size={25}
            color="black"
            onClick={() => {
              settoggle(true);
            }}
          />
        </div>
      </div>
      <div className="flex">
        {toggle ? (
          <SideBar setsection={setsection} settoggle={settoggle} />
        ) : null}
        {section === "Enquires" ? (
          <Enquire />
        ) : section === "Orders" ? (
          <Orders />
        ) : section === "Edit" ? (
          <Edit />
        ) : (
          <Orders />
        )}
      </div>
    </>
  );
}

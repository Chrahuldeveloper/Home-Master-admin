import React from "react";

export default function Edit() {
  return (
    <div className="w-[30vw] mx-auto p-5 rounded-lg border-[1px] border-gray-300 m-5  h-[50vh] mt-10">
      <div className="mt-5 space-y-4">
        <h1 className="font-semibold ">Name</h1>
        <input
          type="text"
          className="border-[1px] bg-gray-50 w-full rounded-lg px-2 py-2 outline-none"
        />
      </div>
      <div className="mt-5 space-y-4">
        <h1 className="font-semibold ">Password</h1>
        <input
          type="text"
          className="border-[1px] bg-gray-50 w-full rounded-lg px-2 py-2 outline-none"
        />
      </div>
      <div className="mt-10">
        <button className="text-center rounded-lg bg-[#0b2a97] border-[1px] font-semibold w-full py-2 text-white">
          Update
        </button>
      </div>
    </div>
  );
}

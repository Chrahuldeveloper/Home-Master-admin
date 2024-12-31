import React from "react";

export default function Orders() {
  const orders = [
    {
      id: "#10231",
      customerName: "John Doe",
      date: "2024-12-26",
      status: "Completed",
      amount: "$120.00",
      Service: "Painting",
    },
    {
      id: "#10232",
      customerName: "Jane Smith",
      date: "2024-12-25",
      status: "Pending",
      amount: "$95.00",
      Service: "Painting",
    },
    {
      id: "#10233",
      customerName: "Alice Johnson",
      date: "2024-12-24",
      status: "Shipped",
      amount: "$75.50",
      Service: "Painting",
    },
  ];

  return (
    <div className="w-[75vw] mx-auto">
      <div className="pt-12">
        <div className="overflow-x-auto">
          <table className="mx-auto border border-gray-300 ">
            <thead className="bg-gray-100 border-b border-gray-300">
              <tr>
                <th className="px-10 py-2.5 text-xs cursor-pointer lg:text-sm">
                  Order ID
                </th>
                <th className="px-10 py-2.5 text-xs cursor-pointer lg:text-sm">
                  Customer Name
                </th>
                <th className="px-10 py-2.5 text-xs cursor-pointer lg:text-sm">
                  UserEmail
                </th>
                <th className="px-10 py-2.5 text-xs cursor-pointer lg:text-sm">
                  Service
                </th>
                <th className="px-10 py-2.5 text-xs cursor-pointer lg:text-sm">
                  Date
                </th>
                <th className="px-10 py-2.5 text-xs cursor-pointer lg:text-sm">
                  Amount
                </th>
                <th className="px-10 py-2.5 text-xs cursor-pointer lg:text-sm">
                  Location
                </th>
                <th className="px-10 py-2.5 text-xs cursor-pointer lg:text-sm">
                  Latitude
                </th>
                <th className="px-10 py-2.5 text-xs cursor-pointer lg:text-sm">
                  Longitude
                </th>
              </tr>
            </thead>
            <tbody className="border-b border-gray-300">
              {orders.map((order, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-200 cursor-pointer hover:bg-gray-50"
                >
                  <td className="px-10 py-5 text-xs font-semibold lg:text-[11px]">
                    {order.id}
                  </td>
                  <td className="px-10 py-5 text-xs font-semibold lg:text-[11px]">
                    {order.customerName}
                  </td>
                  <td className="px-10 py-5 text-xs font-semibold lg:text-[11px]">
                    {order.Service}
                  </td>
                  <td className="px-10 py-5 text-xs font-semibold lg:text-[11px]">
                    {order.date}
                  </td>
                  <td className="px-10 py-5 text-xs font-semibold lg:text-[11px]">
                    {order.amount}
                  </td>
                  <td className="px-10 py-5 text-xs font-semibold lg:text-[11px]">
                    {order.amount}
                  </td>
                  <td className="px-10 py-5 text-xs font-semibold lg:text-[11px]">
                    {order.amount}
                  </td>
                  <td className="px-10 py-5 text-xs font-semibold lg:text-[11px]">
                    {order.amount}
                  </td>
                  <td
                    className={`px-10 py-5 text-xs font-semibold lg:text-sm ${
                      order.status === "Pending"
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    {order.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useMemo, useState } from "react";
import AllOrders from "../utlis/Orders";

export default function Orders() {
  const [data, setData] = useState([]);

  const allorders = useMemo(() => new AllOrders(), []);

  useEffect(() => {
    const fetchingUsers = async () => {
      try {
        const fetchedData = await allorders.fetchUsers();
        setData(
          fetchedData.flat().map((item, index) => ({
            id: index + 1,
            ...item,
          }))
        );
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchingUsers();
  }, [allorders]);

  return (
    <div className="w-[95vw] mx-auto">
      <div className="pt-12">
        {/* Add overflow-auto to make the table scrollable */}
        <div className="overflow-auto">
          <table className="min-w-full border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-gray-100 border-b border-gray-300">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold text-left text-gray-600 sm:text-sm">
                  Email
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-left text-gray-600 sm:text-sm">
                  Service
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-left text-gray-600 sm:text-sm">
                  Date
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-left text-gray-600 sm:text-sm">
                  Amount
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-left text-gray-600 sm:text-sm min-w-[200px] max-w-[300px] whitespace-normal break-words">
                  Location
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-left text-gray-600 sm:text-sm">
                  Latitude
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-left text-gray-600 sm:text-sm">
                  Longitude
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((order, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100`}
                >
                  <td className="px-6 py-4 text-xs text-gray-700 sm:text-sm ">
                    {order.UserEmail}
                  </td>
                  <td className="px-6 py-4 text-xs text-gray-700 sm:text-sm min-w-[200px] max-w-[300px] whitespace-normal break-words">
                    {order.serviceName}
                  </td>
                  <td className="px-6 py-4 text-xs text-gray-700 sm:text-sm min-w-[200px] max-w-[300px] whitespace-normal break-words">
                    {order.timestamp}
                  </td>
                  <td className="px-6 py-4 text-xs text-gray-700 sm:text-sm">
                    {order.price}
                  </td>
                  <td className="px-6 py-4 text-xs text-gray-700 sm:text-sm min-w-[200px] max-w-[300px] whitespace-normal break-words">
                    {order.UserAddress}
                  </td>
                  <td className="px-6 py-4 text-xs text-gray-700 sm:text-sm">
                    {order.UserLat}
                  </td>
                  <td className="px-6 py-4 text-xs text-gray-700 sm:text-sm">
                    {order.UserLong}
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

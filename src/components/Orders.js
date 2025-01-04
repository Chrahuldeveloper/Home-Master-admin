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
        <div className="overflow-x-auto">
          <table className="mx-auto border border-gray-300 ">
            <thead className="bg-gray-100 border-b border-gray-300">
              <tr>
                {/* <th className="px-10 py-2.5 text-xs cursor-pointer lg:text-sm">
                  Name
                </th>
                <th className="px-10 py-2.5 text-xs cursor-pointer lg:text-sm">
                  Phone
                </th> */}
                <th className="px-10 py-2.5 text-xs cursor-pointer lg:text-sm">
                  Email
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
              {data.map((order, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-200 cursor-pointer hover:bg-gray-50"
                >
                  {/* <td className="px-10 py-5 text-xs font-semibold lg:text-[11px]">
                    {order.customerName}
                  </td> */}
                  {/* <td className="px-10 py-5 text-xs font-semibold lg:text-[11px]">
                    {order.phone}
                  </td> */}
                  <td className="px-10 py-5 text-xs font-semibold lg:text-[11px]">
                    {order.UserEmail}
                  </td>
                  <td className="px-10 py-5 text-xs font-semibold lg:text-[11px]">
                    {order.serviceName}
                  </td>
                  <td className="px-10 py-5 text-xs font-semibold lg:text-[11px]">
                    {order.timestamp}
                  </td>
                  <td className="px-10 py-5 text-xs font-semibold lg:text-[11px]">
                    {order.price}
                  </td>
                  <td className="px-10 py-5 text-xs font-semibold lg:text-[11px] w-80">
                    {order.UserAddress}
                  </td>
                  <td className="px-10 py-5 text-xs font-semibold lg:text-[11px]">
                    {order.UserLat}
                  </td>
                  <td className="px-10 py-5 text-xs font-semibold lg:text-[11px]">
                    {order.UserLong}
                  </td>
                  {/* <td
                    className={`px-10 py-5 text-xs font-semibold lg:text-sm ${
                      order.status === "Pending"
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    {order.status}
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

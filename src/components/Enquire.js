import React, { useEffect, useState, useMemo } from "react";
import Enquires from "../utlis/Enquires";

export default function Enquire() {
  const enquire = useMemo(() => new Enquires(), []);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchingUsers = async () => {
      try {
        const fetchedData = await enquire.fetchUsers();
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
  }, [enquire]);

  return (
    <>
      <div className="w-[75vw] mx-auto">
        <div className="pt-12">
          <div className="overflow-x-auto">
            <table className="mx-auto border border-gray-300">
              <thead className="bg-gray-100 border-b border-gray-300">
                <tr>
                  <th className="px-10 py-2.5 text-xs cursor-pointer lg:text-sm">
                    S.NO
                  </th>
                  <th className="px-10 py-2.5 text-xs cursor-pointer lg:text-sm">
                    Name
                  </th>
                  <th className="px-10 py-2.5 text-xs cursor-pointer lg:text-sm">
                    Email
                  </th>
                  <th className="px-10 py-2.5 text-xs cursor-pointer lg:text-sm">
                    Service
                  </th>
                  <th className="px-10 py-2.5 text-xs cursor-pointer lg:text-sm">
                    Phone
                  </th>
                  <th className="px-10 py-2.5 text-xs cursor-pointer lg:text-sm">
                    Message
                  </th>
                </tr>
              </thead>
              <tbody className="border-b border-gray-300">
                {data.length > 0 ? (
                  data.map((item) => (
                    <tr key={item.id}>
                      <td className="px-10 py-5 text-xs font-semibold lg:text-[13px]">
                        {item.id}
                      </td>
                      <td className="px-10 py-5 text-xs font-semibold lg:text-[13px]">
                        {item.Name || "N/A"}
                      </td>
                      <td className="px-10 py-5 text-xs font-semibold lg:text-[13px]">
                        {item.email || "N/A"}
                      </td>
                      <td className="px-10 py-5 text-xs font-semibold lg:text-[13px]">
                        {item.Service || "N/A"}
                      </td>
                      <td className="px-10 py-5 text-xs font-semibold lg:text-[13px]">
                        {item.Phone || "N/A"}
                      </td>
                      <td className="px-10 py-5 text-xs font-semibold lg:text-[13px]">
                        {item.message || "N/A"}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-10 py-5 text-center text-xs font-semibold lg:text-[13px]"
                    >
                      No enquiries found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

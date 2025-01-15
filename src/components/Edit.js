import { doc, getDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../Firebase";

export default function Edit() {
  const [userDetails, setUserDetails] = useState({ Name: "", Pass: "" });

  const fetchDetails = async () => {
    try {
      const userDocRef = doc(db, "ADMIN", "H7RMEkwCUDhuU1mbFf55");
      const docSnapshot = await getDoc(userDocRef);

      if (docSnapshot.exists()) {
        console.log("Fetched Data:", docSnapshot.data());
        setUserDetails({
          Name: docSnapshot.data().Name,
          Pass: docSnapshot.data().Pass,
        });
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };

  const updateDetails = async () => {
    try {
      const userDocRef = doc(db, "ADMIN", "H7RMEkwCUDhuU1mbFf55");
      await updateDoc(userDocRef, {
        Name: userDetails.Name,
        Pass: userDetails.Pass,
      });
      console.log("User details updated successfully!");
      alert("Details updated successfully!");
    } catch (error) {
      console.error("Error updating document:", error);
      alert("Failed to update details!");
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  useEffect(() => {
    console.log("Updated User Details:", userDetails);
  }, [userDetails]);

  return (
    <div className="w-[30vw] mx-auto p-5 rounded-lg border-[1px] border-gray-300 m-5 h-[55vh] mt-10">
      <div>
        <h1 className="text-lg font-semibold text-center">
          Update Your Login Details
        </h1>
      </div>
      <div className="space-y-4 mt-7">
        <h1 className="font-semibold">Name</h1>
        <input
          type="text"
          value={userDetails.Name}
          onChange={(e) =>
            setUserDetails({ ...userDetails, Name: e.target.value })
          }
          className="border-[1px] bg-gray-50 w-full rounded-lg px-2 py-2 outline-none"
        />
      </div>
      <div className="mt-5 space-y-4">
        <h1 className="font-semibold">Password</h1>
        <input
          type="text"
          value={userDetails.Pass}
          onChange={(e) =>
            setUserDetails({ ...userDetails, Pass: e.target.value })
          }
          className="border-[1px] bg-gray-50 w-full rounded-lg px-2 py-2 outline-none"
        />
      </div>
      <div className="my-10">
        <button
          onClick={updateDetails}
          className="text-center rounded-lg bg-[#0b2a97] border-[1px] font-semibold w-full py-2 text-white"
        >
          Update
        </button>
      </div>
    </div>
  );
}

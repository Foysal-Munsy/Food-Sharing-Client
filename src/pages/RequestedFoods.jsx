import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";

export default function RequestedFoods() {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    if (!user) return; // wait for user to be ready

    axios
      .get("http://localhost:5001/requested-foods", {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((res) => setFoods(res.data))
      .catch((err) => {
        console.error("Failed to fetch requested foods:", err);
        setFoods([]);
      });
  }, [user]);

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-sm text-left text-amber-900 border border-amber-300">
        <thead className="bg-amber-100 text-amber-800 text-sm font-semibold">
          <tr>
            <th className="py-3 px-4">Donor Name</th>
            <th className="py-3 px-4">Pickup Location</th>
            <th className="py-3 px-4">Expire Date</th>
            <th className="py-3 px-4">Request Date</th>
          </tr>
        </thead>
        <tbody>
          {foods.length === 0 ? (
            <tr>
              <td
                colSpan={4}
                className="text-center py-6 text-amber-700 italic"
              >
                No requested foods found.
              </td>
            </tr>
          ) : (
            foods.map((food) => (
              <tr
                key={food._id}
                className="border-b border-amber-200 hover:bg-amber-50 transition"
              >
                <td className="py-3 px-4 font-medium">
                  {food.donorName || food.donorEmail || "Unknown Donor"}
                </td>
                <td className="py-3 px-4">{food.location || "N/A"}</td>
                <td className="py-3 px-4">{food.date || "N/A"}</td>
                <td className="py-3 px-4">
                  {food.requestedAt
                    ? new Date(food.requestedAt).toLocaleDateString()
                    : "N/A"}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

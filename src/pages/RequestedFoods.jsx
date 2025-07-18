import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";

export default function RequestedFoods() {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);
  console.log("my foods: ", foods);
  useEffect(() => {
    axios
      .get("http://localhost:5001/requested-foods", {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((res) => setFoods(res.data));
  }, [user]);
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-700 border border-gray-200">
        <thead className="bg-green-100 text-gray-800 text-sm">
          <tr>
            <th className="py-3 px-4">Image</th>
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Quantity</th>
            <th className="py-3 px-4">Location</th>
            <th className="py-3 px-4">Date</th>
            <th className="py-3 px-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {foods.map((food) => (
            <tr
              key={food._id}
              className="border-b hover:bg-green-50 transition"
            >
              <td className="py-2 px-4">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-14 h-14 object-cover rounded"
                />
              </td>
              <td className="py-2 px-4">{food.name}</td>
              <td className="py-2 px-4">{food.quantity}</td>
              <td className="py-2 px-4">{food.location}</td>
              <td className="py-2 px-4">{food.date}</td>
              <td className="py-2 px-4 capitalize">{food.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import { Link } from "react-router";
import Swal from "sweetalert2";

export default function MyFoods() {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    axios
      .get("http://localhost:5001/my-foods", {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((res) => setFoods(res.data))
      .catch((err) => {
        console.error("Error fetching foods:", err);
      })
      .finally(() => setLoading(false));
  }, [user]);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await axios.delete(`http://localhost:5001/foods/${id}`);
        if (res.data.deletedCount > 0) {
          setFoods((prev) => prev.filter((food) => food._id !== id));
          Swal.fire("Deleted!", "Food item has been deleted.", "success");
        } else {
          Swal.fire(
            "Not Found",
            "Food item not found or already deleted.",
            "info"
          );
        }
      } catch (err) {
        console.error("Error deleting food item:", err);
        Swal.fire("Error", "Failed to delete food item.", "error");
      }
    }
  };

  if (loading) {
    return (
      <div className="text-center text-amber-700 py-10 font-medium text-lg">
        Loading your food items...
      </div>
    );
  }

  if (foods.length === 0) {
    return (
      <div className="text-center text-amber-700 py-10 font-semibold text-xl">
        You have not listed any food items yet.
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto py-8 px-4">
      <h2 className="text-3xl font-extrabold text-amber-800 mb-6 text-center">
        My Listed Foods
      </h2>
      <table className="w-full text-sm text-left text-gray-700 border border-amber-300">
        <thead className="bg-amber-100 text-amber-900 text-sm font-semibold">
          <tr>
            <th className="py-3 px-4">Image</th>
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Quantity</th>
            <th className="py-3 px-4">Location</th>
            <th className="py-3 px-4">Date</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {foods.map((food) => (
            <tr
              key={food._id}
              className="border-b border-amber-200 hover:bg-amber-50 transition"
            >
              <td className="py-3 px-4">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-14 h-14 object-cover rounded"
                />
              </td>
              <td className="py-3 px-4 font-medium text-amber-900">
                {food.name}
              </td>
              <td className="py-3 px-4">{food.quantity}</td>
              <td className="py-3 px-4">{food.location}</td>
              <td className="py-3 px-4">{food.date}</td>
              <td className="py-3 px-4 capitalize text-amber-700 font-semibold">
                {food.status}
              </td>
              <td className="py-3 px-4 flex gap-2 flex-wrap">
                <Link
                  to={`/update/${food._id}`}
                  className="bg-amber-600 text-white px-3 py-1 rounded hover:bg-amber-700 text-xs transition"
                >
                  Update
                </Link>
                <button
                  onClick={() => handleDelete(food._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-xs transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

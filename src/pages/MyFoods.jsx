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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-amber-700 font-medium text-lg">
            Loading your food items...
          </p>
        </div>
      </div>
    );
  }

  if (foods.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 px-4">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-12 h-12 text-amber-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-amber-800 mb-4">
            No Food Items Yet
          </h2>
          <p className="text-amber-700 mb-6">
            You haven't listed any food items yet. Start sharing food to help
            reduce waste!
          </p>
          <Link
            to="/add-food"
            className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200"
          >
            Add Your First Food Item
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-amber-800 mb-2">
            My Listed Foods
          </h1>
          <p className="text-amber-700">
            Manage your food donations and reduce waste
          </p>
        </div>

        {/* Mobile Card View */}
        <div className="block lg:hidden space-y-4">
          {foods.map((food) => (
            <div
              key={food._id}
              className="bg-white rounded-lg shadow-md border border-amber-200 p-4"
            >
              <div className="flex items-start gap-4">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-lg text-amber-900 truncate">
                    {food.name}
                  </h3>
                  <div className="mt-2 space-y-1 text-sm text-gray-600">
                    <p>
                      <span className="font-medium">Quantity:</span>{" "}
                      {food.quantity}
                    </p>
                    <p>
                      <span className="font-medium">Location:</span>{" "}
                      {food.location}
                    </p>
                    <p>
                      <span className="font-medium">Date:</span> {food.date}
                    </p>
                    <p>
                      <span className="font-medium">Status:</span>
                      <span
                        className={`ml-1 px-2 py-1 rounded-full text-xs font-semibold ${
                          food.status === "available"
                            ? "bg-green-100 text-green-800"
                            : food.status === "requested"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {food.status}
                      </span>
                    </p>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Link
                      to={`/update/${food._id}`}
                      className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 text-sm font-medium transition-colors duration-200"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(food._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 text-sm font-medium transition-colors duration-200"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block bg-white rounded-lg shadow-lg border border-amber-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-amber-100 to-amber-200">
                <tr>
                  <th className="py-4 px-6 text-left text-sm font-bold text-amber-900 uppercase tracking-wider">
                    Image
                  </th>
                  <th className="py-4 px-6 text-left text-sm font-bold text-amber-900 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="py-4 px-6 text-left text-sm font-bold text-amber-900 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="py-4 px-6 text-left text-sm font-bold text-amber-900 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="py-4 px-6 text-left text-sm font-bold text-amber-900 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="py-4 px-6 text-left text-sm font-bold text-amber-900 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="py-4 px-6 text-left text-sm font-bold text-amber-900 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-amber-100">
                {foods.map((food) => (
                  <tr
                    key={food._id}
                    className="hover:bg-amber-50 transition-colors duration-200"
                  >
                    <td className="py-4 px-6">
                      <img
                        src={food.image}
                        alt={food.name}
                        className="w-16 h-16 object-cover rounded-lg shadow-sm"
                      />
                    </td>
                    <td className="py-4 px-6 font-semibold text-amber-900">
                      {food.name}
                    </td>
                    <td className="py-4 px-6 text-gray-700">{food.quantity}</td>
                    <td className="py-4 px-6 text-gray-700">{food.location}</td>
                    <td className="py-4 px-6 text-gray-700">{food.date}</td>
                    <td className="py-4 px-6">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          food.status === "available"
                            ? "bg-green-100 text-green-800"
                            : food.status === "requested"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {food.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex gap-2">
                        <Link
                          to={`/update/${food._id}`}
                          className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 text-sm font-medium transition-colors duration-200"
                        >
                          Update
                        </Link>
                        <button
                          onClick={() => handleDelete(food._id)}
                          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 text-sm font-medium transition-colors duration-200"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/src/hooks/useAxiosSecure";
import axiosPublic from "../hooks/axiosPublic";
import InsidePageLoading from "../components/InsidePageLoading";

export default function MyFoods() {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    axiosSecure
      .get("/my-foods")
      .then((res) => setFoods(res.data))
      .catch((err) => {
        console.error("Error fetching foods:", err);
      })
      .finally(() => setLoading(false));
  }, [user, axiosSecure]);

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
        const res = await axiosPublic.delete(`/foods/${id}`);
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
    return <InsidePageLoading word={"Loading your food items..."} />;
  }

  if (foods.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 px-4">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-amber-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-12 h-12 text-amber-600 dark:text-amber-400"
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
          <h2 className="text-2xl font-bold text-amber-800 dark:text-amber-300 mb-4">
            No Food Items Yet
          </h2>
          <p className="text-amber-700 dark:text-gray-300 mb-6">
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4 sm:px-6 lg:p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-amber-800 dark:text-amber-300 mb-2">
            My Listed Foods
          </h1>
          <p className="text-amber-700 dark:text-gray-300">
            Manage your food donations and reduce waste
          </p>
        </div>

        {/* Mobile Card View */}
        <div className="block lg:hidden space-y-4">
          {foods.map((food) => (
            <div
              key={food._id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-amber-200 dark:border-gray-700 p-4"
            >
              <div className="flex items-start gap-4">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-lg text-amber-900 dark:text-amber-200 truncate">
                    {food.name}
                  </h3>
                  <div className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-300">
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
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : food.status === "requested"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
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
        <div className="hidden lg:block bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-amber-200 dark:border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-amber-100 to-amber-200 dark:from-gray-700 dark:to-gray-600">
                <tr>
                  {[
                    "Image",
                    "Name",
                    "Quantity",
                    "Location",
                    "Date",
                    "Status",
                    "Actions",
                  ].map((header) => (
                    <th
                      key={header}
                      className="py-4 px-6 text-left text-sm font-bold text-amber-900 dark:text-amber-200 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-amber-100 dark:divide-gray-700">
                {foods.map((food) => (
                  <tr
                    key={food._id}
                    className="hover:bg-amber-50 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <td className="py-4 px-6">
                      <img
                        src={food.image}
                        alt={food.name}
                        className="w-16 h-16 object-cover rounded-lg shadow-sm"
                      />
                    </td>
                    <td className="py-4 px-6 font-semibold text-amber-900 dark:text-amber-200">
                      {food.name}
                    </td>
                    <td className="py-4 px-6 text-gray-700 dark:text-gray-300">
                      {food.quantity}
                    </td>
                    <td className="py-4 px-6 text-gray-700 dark:text-gray-300">
                      {food.location}
                    </td>
                    <td className="py-4 px-6 text-gray-700 dark:text-gray-300">
                      {food.date}
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          food.status === "available"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : food.status === "requested"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
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

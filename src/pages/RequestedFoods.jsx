import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "../hooks/src/hooks/useAxiosSecure";
import InsidePageLoading from "../components/InsidePageLoading";

export default function RequestedFoods() {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    setLoading(true);
    axiosSecure
      .get("/requested-foods")
      .then((res) => setFoods(res.data))
      .catch((err) => {
        console.error("Failed to fetch requested foods:", err);
        setFoods([]);
      })
      .finally(() => setLoading(false));
  }, [user, axiosSecure]);

  if (loading) {
    return <InsidePageLoading word={"Loading your requested foods..."} />;
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
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-amber-800 dark:text-amber-300 mb-4">
            No Requested Foods
          </h2>
          <p className="text-amber-700 dark:text-amber-400">
            You haven't requested any food items yet. Browse available foods to
            make requests!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4 sm:px-6 lg:p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-amber-800 dark:text-amber-300 mb-2">
            My Requested Foods
          </h1>
          <p className="text-amber-700 dark:text-amber-400">
            Track your food requests and pickup details
          </p>
        </div>

        {/* Mobile Card View */}
        <div className="block lg:hidden space-y-4">
          {foods.map((food) => (
            <div
              key={food._id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-amber-200 dark:border-gray-700 p-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg text-amber-900 dark:text-amber-300">
                    {food.donorName || food.donorEmail || "Unknown Donor"}
                  </h3>
                  <span className="bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-300 px-3 py-1 rounded-full text-sm font-medium">
                    Requested
                  </span>
                </div>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-amber-600 dark:text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="font-medium">Location:</span>{" "}
                    {food.location || "N/A"}
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-amber-600 dark:text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2M8 7v4a1 1 0 001 1h6a1 1 0 001-1V7"
                      />
                    </svg>
                    <span className="font-medium">Expires:</span>{" "}
                    {food.date || "N/A"}
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-amber-600 dark:text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-medium">Requested:</span>
                    {food.requestedAt
                      ? new Date(food.requestedAt).toLocaleDateString()
                      : "N/A"}
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
                    "Donor Information",
                    "Pickup Location",
                    "Expiry Date",
                    "Request Date",
                    "Status",
                  ].map((head) => (
                    <th
                      key={head}
                      className="py-4 px-6 text-left text-sm font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider"
                    >
                      {head}
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
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-amber-200 dark:bg-gray-600 rounded-full flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-amber-700 dark:text-amber-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-amber-900 dark:text-amber-300">
                            {food.donorName || "Anonymous Donor"}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {food.donorEmail || "No email provided"}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-amber-600 dark:text-amber-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">
                          {food.location || "Not specified"}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-amber-600 dark:text-amber-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2M8 7v4a1 1 0 001 1h6a1 1 0 001-1V7"
                          />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">
                          {food.date || "Not specified"}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-amber-600 dark:text-amber-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">
                          {food.requestedAt
                            ? new Date(food.requestedAt).toLocaleDateString()
                            : "Not specified"}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-gray-600">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                        Requested
                      </span>
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

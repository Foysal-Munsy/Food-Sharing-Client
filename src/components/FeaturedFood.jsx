import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import axiosPublic from "../hooks/axiosPublic";

const FeaturedFood = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axiosPublic
      .get("/featured-foods")
      .then((res) => setFoods(res.data))
      .catch((err) => console.error("Failed to fetch featured foods", err));
  }, []);

  return (
    <div className="py-16 px-4 md:px-10 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 dark:from-amber-400 dark:via-orange-400 dark:to-yellow-400 mb-4 tracking-tight">
            Featured Foods
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 dark:from-amber-400 dark:to-orange-400 mx-auto rounded-full"></div>
        </div>

        {foods.length === 0 ? (
          <div className="text-center mt-32">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 max-w-md mx-auto border border-amber-200/50 dark:border-gray-700/50">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-400 dark:from-amber-500 dark:to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white"
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
              <p className="text-amber-800 dark:text-amber-200 text-2xl font-bold mb-2">
                No Featured Foods
              </p>
              <p className="text-amber-600 dark:text-amber-400">
                Check back soon for amazing food deals!
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3  mb-16">
              {foods.map((food) => (
                <div
                  key={food._id}
                  className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden border border-white/50 dark:border-gray-700/50 flex flex-col transform hover:-translate-y-2 transition-all duration-300 hover:scale-105"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={food.image}
                      alt={food.name}
                      className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-amber-500 dark:bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg capitalize">
                        {food.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-4 group-hover:text-amber-700 dark:group-hover:text-amber-200 transition-colors duration-200">
                      {food.name}
                    </h3>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-amber-700 dark:text-amber-300">
                        <div className="w-2 h-2 bg-amber-500 dark:bg-amber-400 rounded-full mr-3"></div>
                        <span className="font-semibold text-sm">Quantity:</span>
                        <span className="ml-2 text-amber-800 dark:text-amber-200 font-medium">
                          {food.quantity}
                        </span>
                      </div>
                      <div className="flex items-center text-amber-700 dark:text-amber-300">
                        <div className="w-2 h-2 bg-orange-500 dark:bg-orange-400 rounded-full mr-3"></div>
                        <span className="font-semibold text-sm">Location:</span>
                        <span className="ml-2 text-amber-800 dark:text-amber-200 font-medium truncate">
                          {food.location}
                        </span>
                      </div>
                      <div className="flex items-center text-amber-700 dark:text-amber-300">
                        <div className="w-2 h-2 bg-red-500 dark:bg-red-400 rounded-full mr-3"></div>
                        <span className="font-semibold text-sm">Expires:</span>
                        <span className="ml-2 text-amber-800 dark:text-amber-200 font-medium">
                          {food.date}
                        </span>
                      </div>
                    </div>

                    <Link
                      to={`/details/${food._id}`}
                      className="mt-auto block bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 hover:from-amber-700 hover:via-orange-700 hover:to-amber-700 dark:from-amber-500 dark:via-orange-500 dark:to-amber-500 dark:hover:from-amber-600 dark:hover:via-orange-600 dark:hover:to-amber-600 text-white px-6 py-3 rounded-xl transition-all duration-300 text-center font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/available-foods"
                className="inline-flex items-center bg-gradient-to-r from-amber-700 via-orange-700 to-amber-700 hover:from-amber-800 hover:via-orange-800 hover:to-amber-800 dark:from-amber-600 dark:via-orange-600 dark:to-amber-600 dark:hover:from-amber-700 dark:hover:via-orange-700 dark:hover:to-amber-700 text-white text-xl font-bold px-12 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105"
              >
                <span>Show All Available Foods</span>
                <svg
                  className="w-6 h-6 ml-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FeaturedFood;

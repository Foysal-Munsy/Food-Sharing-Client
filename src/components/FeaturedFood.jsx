import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
const FeaturedFood = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/featured-foods")
      .then((res) => setFoods(res.data))
      .catch((err) => console.error("Failed to fetch featured foods", err));
  }, []);

  return (
    <div className="py-10 px-4 md:px-10 bg-amber-50 min-h-screen">
      <h2 className="text-3xl font-extrabold text-amber-800 mb-8 text-center tracking-wide">
        Featured Foods
      </h2>

      {foods.length === 0 ? (
        <p className="text-center text-amber-700 text-xl font-medium mt-20">
          No featured foods available right now.
        </p>
      ) : (
        <>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {foods.map((food) => (
              <div
                key={food._id}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-amber-200 flex flex-col"
              >
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-48 object-cover"
                />

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">
                    {food.name}
                  </h3>

                  <p className="text-sm text-amber-700 mb-1">
                    <span className="font-medium">Quantity:</span>{" "}
                    {food.quantity}
                  </p>
                  <p className="text-sm text-amber-700 mb-1">
                    <span className="font-medium">Pickup Location:</span>{" "}
                    {food.location}
                  </p>
                  <p className="text-sm text-amber-700 mb-1">
                    <span className="font-medium">Expire Date:</span>{" "}
                    {food.date}
                  </p>

                  <p className="text-sm text-amber-600 mt-auto">
                    Status:{" "}
                    <span className="font-semibold text-amber-700 capitalize">
                      {food.status}
                    </span>
                  </p>

                  <Link
                    to={`/details/${food._id}`}
                    className="mt-5 block bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded transition duration-200 text-center font-semibold"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/available-foods"
              className="inline-block bg-amber-700 hover:bg-amber-800 text-white text-lg font-semibold px-8 py-3 rounded-md transition duration-200"
            >
              Show All Available Foods
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default FeaturedFood;

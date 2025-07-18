import axios from "axios";
import React, { useEffect, useState } from "react";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5001/available-foods")
      .then((res) => setFoods(res.data));
  }, []);

  return (
    <div className="py-10 px-4 md:px-10 bg-green-50 min-h-screen">
      <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
        Available Foods
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {foods.map((food) => (
          <div
            key={food._id}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-green-200"
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-900">
                {food.name}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Quantity: {food.quantity}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                Pickup: {food.location}
              </p>
              <p className="text-sm text-gray-600 mb-2">Expire: {food.date}</p>
              <p className="text-sm text-gray-500">
                Status:{" "}
                <span className="font-medium text-green-600">
                  {food.status}
                </span>
              </p>

              <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition duration-200 w-full">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;

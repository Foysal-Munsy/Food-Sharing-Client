import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { format } from "date-fns";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const [sortedFoods, setSortedFoods] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [isThreeColumnLayout, setIsThreeColumnLayout] = useState(true); // Layout toggle

  useEffect(() => {
    axios.get("http://localhost:5001/available-foods").then((res) => {
      const sorted = sortFoods(res.data, sortOrder);
      setFoods(res.data);
      setSortedFoods(sorted);
    });
  }, []);

  useEffect(() => {
    const sorted = sortFoods([...foods], sortOrder);
    setSortedFoods(sorted);
  }, [sortOrder, foods]);

  const sortFoods = (data, order) => {
    return data.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return order === "asc" ? dateA - dateB : dateB - dateA;
    });
  };

  const filteredFoods = sortedFoods.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-10 px-4 md:px-10 bg-amber-50 min-h-screen">
      <h2 className="text-3xl font-extrabold text-amber-800 mb-6 text-center tracking-wide">
        Available Foods
      </h2>

      {/* Toggle Grid Layout Button */}
      <div className="text-center mb-6">
        <button
          onClick={() => setIsThreeColumnLayout(!isThreeColumnLayout)}
          className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded font-semibold transition duration-200"
        >
          Change Layout
        </button>
      </div>

      {/* Search Section */}
      <div className="max-w-md mx-auto mb-6">
        <input
          type="text"
          placeholder="Search by food name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-amber-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-600 bg-white text-amber-800"
        />
      </div>

      {/* Sorting Section */}
      <div className="mb-8 max-w-xs mx-auto">
        <label className="block mb-2 text-amber-800 font-medium">
          Sort by Expire Date:
        </label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="w-full px-4 py-2 border border-amber-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-600 bg-white text-amber-800"
        >
          <option value="asc">Oldest First</option>
          <option value="desc">Newest First</option>
        </select>
      </div>

      {/* Food Section */}
      {filteredFoods.length === 0 ? (
        <p className="text-center text-lg text-amber-600 font-medium">
          No matching food found.
        </p>
      ) : (
        <div
          className={`grid gap-8 sm:grid-cols-2 ${
            isThreeColumnLayout ? "lg:grid-cols-3" : "lg:grid-cols-2"
          } xl:grid-cols-${isThreeColumnLayout ? "3" : "2"}`}
        >
          {filteredFoods.map((food) => (
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
                  <span className="font-medium">Quantity:</span> {food.quantity}
                </p>
                <p className="text-sm text-amber-700 mb-1">
                  <span className="font-medium">Pickup Location:</span>{" "}
                  {food.location}
                </p>
                <p className="text-sm text-amber-700 mb-1">
                  <span className="font-medium">Expire Date:</span>{" "}
                  {format(new Date(food.date), "yyyy-MM-dd")}
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
      )}
    </div>
  );
};

export default AvailableFoods;

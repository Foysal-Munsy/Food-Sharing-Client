import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { format } from "date-fns";
import axiosPublic from "../hooks/axiosPublic";
import Pagination from "@mui/material/Pagination";
import InsidePageLoading from "../components/InsidePageLoading";

const AvailableFoods = () => {
  // pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  // total count state for server-side pagination
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);

  // data state
  const [foods, setFoods] = useState([]);
  const [sortedFoods, setSortedFoods] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [isThreeColumnLayout, setIsThreeColumnLayout] = useState(true); // Layout toggle

  useEffect(() => {
    setLoading(true);
    axiosPublic
      .get(`/available-foods?page=${currentPage}&size=${itemsPerPage}`)
      .then((res) => {
        const sorted = sortFoods(res.data.foods, sortOrder);
        setFoods(res.data.foods);
        setSortedFoods(sorted);
        setTotalCount(res.data.total);
        // setLoading(false);
      })
      .finally(() => setLoading(false));
  }, [sortOrder, currentPage, itemsPerPage]);

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

  const numberOfPages = Math.ceil(totalCount / itemsPerPage);

  const handlePagination = (event, value) => {
    setCurrentPage(value);
  };
  const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value);
    setItemsPerPage(val);
    setCurrentPage(1);
  };
  if (loading)
    return <InsidePageLoading word={"Available foods are loading...."} />;

  return (
    <div className="py-16 px-4 md:px-10 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 mb-4 tracking-tight">
            Available Foods
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Controls Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 mb-12 border border-white/50">
          <div className="flex flex-col lg:flex-row items-center gap-6 justify-between">
            {/* Layout Toggle */}
            <div className="flex items-center gap-4">
              <span className="text-amber-800 font-semibold">Layout:</span>
              <button
                onClick={() => setIsThreeColumnLayout(!isThreeColumnLayout)}
                className="relative cursor-pointer inline-flex items-center bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {isThreeColumnLayout ? "3 Columns" : "2 Columns"}
              </button>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="w-5 h-5 text-amber-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search by food name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-amber-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-amber-200/50 focus:border-amber-500 bg-white/90 text-amber-900 placeholder-amber-400 font-medium transition-all duration-300"
                />
              </div>
            </div>

            {/* Sorting */}
            <div className="flex items-center gap-4">
              <label className="text-amber-800 font-semibold whitespace-nowrap">
                Sort by Date:
              </label>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="px-4 py-3 border-2 border-amber-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-amber-200/50 focus:border-amber-500 bg-white/90 text-amber-900 font-medium transition-all duration-300 cursor-pointer"
              >
                <option value="asc">Oldest First</option>
                <option value="desc">Newest First</option>
              </select>
            </div>
          </div>
        </div>

        {/* Food Section */}
        {filteredFoods.length === 0 ? (
          <div className="text-center mt-32">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 max-w-md mx-auto border border-amber-200/50">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full mx-auto mb-6 flex items-center justify-center">
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
                    d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <p className="text-amber-800 text-2xl font-bold mb-2">
                No Foods Found
              </p>
              <p className="text-amber-600">
                Try adjusting your search or filters.
              </p>
            </div>
          </div>
        ) : (
          <div
            className={`grid gap-8 sm:grid-cols-2 ${
              isThreeColumnLayout ? "lg:grid-cols-3" : "lg:grid-cols-2"
            } xl:grid-cols-${isThreeColumnLayout ? "3" : "2"}`}
          >
            {filteredFoods.map((food) => (
              <div
                key={food._id}
                className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden border border-white/50 flex flex-col transform hover:-translate-y-2 transition-all duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={food.image}
                    alt={food.name}
                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg capitalize">
                      {food.status}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-amber-900 mb-4 group-hover:text-amber-700 transition-colors duration-200">
                    {food.name}
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-amber-700">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      <span className="font-semibold text-sm">Quantity:</span>
                      <span className="ml-2 text-amber-800 font-medium">
                        {food.quantity}
                      </span>
                    </div>
                    <div className="flex items-center text-amber-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="font-semibold text-sm">Location:</span>
                      <span className="ml-2 text-amber-800 font-medium truncate">
                        {food.location}
                      </span>
                    </div>
                    <div className="flex items-center text-amber-700">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      <span className="font-semibold text-sm">Expires:</span>
                      <span className="ml-2 text-amber-800 font-medium">
                        {format(new Date(food.date), "yyyy-MM-dd")}
                      </span>
                    </div>
                  </div>

                  <Link
                    to={`/details/${food._id}`}
                    className="mt-auto block bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 hover:from-amber-700 hover:via-orange-700 hover:to-amber-700 text-white px-6 py-3 rounded-xl transition-all duration-300 text-center font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}

            {/* Pagination UI */}
            <div className="col-span-full flex flex-col sm:flex-row items-center justify-center gap-6 mt-10  p-5  ">
              {/* MUI Pagination */}
              <Pagination
                count={numberOfPages}
                page={currentPage}
                onChange={handlePagination}
                shape="rounded"
                color="primary"
                siblingCount={1}
                boundaryCount={1}
                sx={{
                  "& .MuiPaginationItem-root": {
                    color: "#92400E", // amber-900
                    fontWeight: "bold",
                  },
                  "& .Mui-selected": {
                    background:
                      "linear-gradient(to right, #d97706, #f59e0b, #d97706)", // amber-orange gradient
                    color: "#fff",
                  },
                  "& .MuiPaginationItem-root:hover": {
                    backgroundColor: "#fde68a", // amber-200
                  },
                }}
              />

              {/* Items Per Page Dropdown */}
              <div className="flex items-center gap-3">
                <label className="text-amber-800 font-medium">
                  Items per page:
                </label>
                <select
                  value={itemsPerPage}
                  onChange={handleItemsPerPage}
                  className="px-4 py-2 border-2 border-amber-200 rounded-xl bg-white/90 text-amber-900 font-medium focus:outline-none focus:ring-4 focus:ring-amber-200/50 focus:border-amber-500 transition-all duration-300 cursor-pointer hover:shadow-md"
                >
                  <option value="2">2</option>
                  <option value="4">4</option>
                  <option value="6">6</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AvailableFoods;

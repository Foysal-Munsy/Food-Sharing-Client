import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import axiosPublic from "../hooks/axiosPublic";

const AddFoods = () => {
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    quantity: "",
    location: "",
    date: "",
    notes: "",
    status: "available",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      donorEmail: user.email,
      donorName: user.displayName,
      donorImg: user.photoURL,
    };

    try {
      const res = await axiosPublic.post("/add-food", data);
      if (res.data.insertedId || res.data.acknowledged) {
        Swal.fire({
          title: "Success!",
          text: "Food has been added successfully!",
          icon: "success",
          confirmButtonColor: "#f59e0b",
        });
        setFormData({
          name: "",
          image: "",
          quantity: "",
          location: "",
          date: "",
          notes: "",
          status: "available",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong while adding the food.",
        icon: "error",
        confirmButtonColor: "#f59e0b",
      });
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 px-4">
      <div className="container mx-auto px-4 sm:px-6 lg:p-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 dark:from-yellow-400 dark:via-orange-400 dark:to-yellow-300 mb-4 tracking-tight">
            Add New Food
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400 mx-auto rounded-full"></div>
          <p className="text-amber-700 dark:text-gray-300 mt-4 text-lg">
            Share your surplus food and help reduce waste
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/50 dark:border-gray-700"
        >
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Food Name */}
              <div className="group">
                <label className="block text-sm font-bold text-amber-800 dark:text-yellow-200 mb-3 flex items-center">
                  <div className="w-2 h-4 bg-amber-500 dark:bg-yellow-400 rounded-full mr-2"></div>
                  Food Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter food name..."
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-2 border-amber-200 dark:border-gray-600 p-4 rounded-xl bg-amber-50/50 dark:bg-gray-700 text-amber-900 dark:text-gray-200 placeholder-amber-400 dark:placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-amber-200/50 dark:focus:ring-yellow-400/50 focus:border-amber-500 dark:focus:border-yellow-400 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Food Image URL */}
              <div className="group">
                <label className="block text-sm font-bold text-amber-800 dark:text-yellow-200 mb-3 flex items-center">
                  <div className="w-2 h-4 bg-orange-500 dark:bg-orange-400 rounded-full mr-2"></div>
                  Food Image URL
                </label>
                <div className="relative">
                  <input
                    type="url"
                    name="image"
                    placeholder="https://example.com/image.jpg"
                    value={formData.image}
                    onChange={handleChange}
                    className="w-full border-2 border-amber-200 dark:border-gray-600 p-4 rounded-xl bg-amber-50/50 dark:bg-gray-700 text-amber-900 dark:text-gray-200 placeholder-amber-400 dark:placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-amber-200/50 dark:focus:ring-yellow-400/50 focus:border-amber-500 dark:focus:border-yellow-400 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Quantity */}
              <div className="group">
                <label className="block text-sm font-bold text-amber-800 dark:text-yellow-200 mb-3 flex items-center">
                  <div className="w-2 h-4 bg-yellow-500 dark:bg-yellow-400 rounded-full mr-2"></div>
                  Food Quantity
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="quantity"
                    placeholder="Enter quantity..."
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full border-2 border-amber-200 dark:border-gray-600 p-4 rounded-xl bg-amber-50/50 dark:bg-gray-700 text-amber-900 dark:text-gray-200 placeholder-amber-400 dark:placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-amber-200/50 dark:focus:ring-yellow-400/50 focus:border-amber-500 dark:focus:border-yellow-400 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Pickup Location */}
              <div className="group">
                <label className="block text-sm font-bold text-amber-800 dark:text-yellow-200 mb-3 flex items-center">
                  <div className="w-2 h-4 bg-red-500 dark:bg-red-400 rounded-full mr-2"></div>
                  Pickup Location
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="location"
                    placeholder="Enter pickup location..."
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full border-2 border-amber-200 dark:border-gray-600 p-4 rounded-xl bg-amber-50/50 dark:bg-gray-700 text-amber-900 dark:text-gray-200 placeholder-amber-400 dark:placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-amber-200/50 dark:focus:ring-yellow-400/50 focus:border-amber-500 dark:focus:border-yellow-400 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Expire Date */}
              <div className="group">
                <label className="block text-sm font-bold text-amber-800 dark:text-yellow-200 mb-3 flex items-center">
                  <div className="w-2 h-4 bg-green-500 dark:bg-green-400 rounded-full mr-2"></div>
                  Expire Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full border-2 border-amber-200 dark:border-gray-600 p-4 rounded-xl bg-amber-50/50 dark:bg-gray-700 text-amber-900 dark:text-gray-200 focus:outline-none focus:ring-4 focus:ring-amber-200/50 dark:focus:ring-yellow-400/50 focus:border-amber-500 dark:focus:border-yellow-400 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Food Status */}
              <div className="group">
                <label className="block text-sm font-bold text-amber-800 dark:text-yellow-200 mb-3 flex items-center">
                  <div className="w-2 h-4 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></div>
                  Food Status
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="status"
                    value={formData.status}
                    readOnly
                    className="w-full border-2 border-amber-200 dark:border-gray-600 p-4 rounded-xl bg-green-50 dark:bg-green-800 text-green-800 dark:text-green-200 focus:outline-none cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div className="mt-8">
              <label className="block text-sm font-bold text-amber-800 dark:text-yellow-200 mb-3 flex items-center">
                <div className="w-2 h-4 bg-purple-500 dark:bg-purple-400 rounded-full mr-2"></div>
                Additional Notes
              </label>
              <div className="relative">
                <textarea
                  name="notes"
                  placeholder="Add any additional information about the food..."
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full border-2 border-amber-200 dark:border-gray-600 p-4 rounded-xl bg-amber-50/50 dark:bg-gray-700 text-amber-900 dark:text-gray-200 placeholder-amber-400 dark:placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-amber-200/50 dark:focus:ring-yellow-400/50 focus:border-amber-500 dark:focus:border-yellow-400 transition-all duration-300 resize-none"
                  rows="4"
                ></textarea>
              </div>
            </div>

            {/* Donor Information */}
            <div className="mt-8">
              <label className="block text-sm font-bold text-amber-800 dark:text-yellow-200 mb-3 flex items-center">
                <div className="w-2 h-4 bg-indigo-500 dark:bg-indigo-400 rounded-full mr-2"></div>
                Donor Information
              </label>
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 border-2 border-amber-100 dark:border-gray-500 p-6 rounded-2xl">
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <img
                      src={user?.photoURL}
                      alt="Donor"
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-amber-900 dark:text-gray-200 mb-1">
                      {user.displayName}
                    </h3>
                    <p className="text-amber-700 dark:text-gray-300 flex items-center">
                      {user.email}
                    </p>
                    <span className="inline-block bg-green-100 dark:bg-green-700 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-semibold mt-2">
                      Verified Donor
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-12 text-center">
              <button
                type="submit"
                className="inline-flex items-center bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 hover:from-amber-700 hover:via-orange-700 hover:to-amber-700 dark:from-yellow-500 dark:via-orange-500 dark:to-yellow-500 dark:hover:from-yellow-600 dark:hover:via-orange-600 dark:hover:to-yellow-600 text-white text-xl font-bold px-12 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105"
              >
                Add Food to Sharing
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFoods;

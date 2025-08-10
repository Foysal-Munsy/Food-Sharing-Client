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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-16 px-4">
      <div className="container mx-auto px-4 sm:px-6 lg:p-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 mb-4 tracking-tight">
            Add New Food
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
          <p className="text-amber-700 mt-4 text-lg">
            Share your surplus food and help reduce waste
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/50"
        >
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Food Name */}
              <div className="group">
                <label className="block text-sm font-bold text-amber-800 mb-3 flex items-center">
                  <div className="w-2 h-4 bg-amber-500 rounded-full mr-2"></div>
                  Food Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter food name..."
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-2 border-amber-200 p-4 rounded-xl bg-amber-50/50 text-amber-900 placeholder-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-200/50 focus:border-amber-500 transition-all duration-300"
                    required
                  />
                  <div className="absolute top-4 right-4">
                    <svg
                      className="w-5 h-5 text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Food Image URL */}
              <div className="group">
                <label className="block text-sm font-bold text-amber-800 mb-3 flex items-center">
                  <div className="w-2 h-4 bg-orange-500 rounded-full mr-2"></div>
                  Food Image URL
                </label>
                <div className="relative">
                  <input
                    type="url"
                    name="image"
                    placeholder="https://example.com/image.jpg"
                    value={formData.image}
                    onChange={handleChange}
                    className="w-full border-2 border-amber-200 p-4 rounded-xl bg-amber-50/50 text-amber-900 placeholder-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-200/50 focus:border-amber-500 transition-all duration-300"
                    required
                  />
                  <div className="absolute top-4 right-4">
                    <svg
                      className="w-5 h-5 text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Quantity */}
              <div className="group">
                <label className="block text-sm font-bold text-amber-800 mb-3 flex items-center">
                  <div className="w-2 h-4 bg-yellow-500 rounded-full mr-2"></div>
                  Food Quantity
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="quantity"
                    placeholder="Enter quantity..."
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full border-2 border-amber-200 p-4 rounded-xl bg-amber-50/50 text-amber-900 placeholder-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-200/50 focus:border-amber-500 transition-all duration-300"
                    required
                  />
                  <div className="absolute top-4 right-4">
                    <svg
                      className="w-5 h-5 text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Pickup Location */}
              <div className="group">
                <label className="block text-sm font-bold text-amber-800 mb-3 flex items-center">
                  <div className="w-2 h-4 bg-red-500 rounded-full mr-2"></div>
                  Pickup Location
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="location"
                    placeholder="Enter pickup location..."
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full border-2 border-amber-200 p-4 rounded-xl bg-amber-50/50 text-amber-900 placeholder-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-200/50 focus:border-amber-500 transition-all duration-300"
                    required
                  />
                  <div className="absolute top-4 right-4">
                    <svg
                      className="w-5 h-5 text-amber-400"
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
                  </div>
                </div>
              </div>

              {/* Expire Date */}
              <div className="group">
                <label className="block text-sm font-bold text-amber-800 mb-3 flex items-center">
                  <div className="w-2 h-4 bg-green-500 rounded-full mr-2"></div>
                  Expire Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full border-2 border-amber-200 p-4 rounded-xl bg-amber-50/50 text-amber-900 focus:outline-none focus:ring-4 focus:ring-amber-200/50 focus:border-amber-500 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Food Status */}
              <div className="group">
                <label className="block text-sm font-bold text-amber-800 mb-3 flex items-center">
                  <div className="w-2 h-4 bg-blue-500 rounded-full mr-2"></div>
                  Food Status
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="status"
                    value={formData.status}
                    readOnly
                    className="w-full border-2 border-amber-200 p-4 rounded-xl bg-green-50 text-green-800 focus:outline-none cursor-not-allowed"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div className="mt-8">
              <label className="block text-sm font-bold text-amber-800 mb-3 flex items-center">
                <div className="w-2 h-4 bg-purple-500 rounded-full mr-2"></div>
                Additional Notes
              </label>
              <div className="relative">
                <textarea
                  name="notes"
                  placeholder="Add any additional information about the food..."
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full border-2 border-amber-200 p-4 rounded-xl bg-amber-50/50 text-amber-900 placeholder-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-200/50 focus:border-amber-500 transition-all duration-300 resize-none"
                  rows="4"
                ></textarea>
                <div className="absolute top-4 right-4">
                  <svg
                    className="w-5 h-5 text-amber-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Donor Information */}
            <div className="mt-8">
              <label className="block text-sm font-bold text-amber-800 mb-3 flex items-center">
                <div className="w-2 h-4 bg-indigo-500 rounded-full mr-2"></div>
                Donor Information
              </label>
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-100 p-6 rounded-2xl">
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
                    <h3 className="text-xl font-bold text-amber-900 mb-1">
                      {user.displayName}
                    </h3>
                    <p className="text-amber-700 flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      {user.email}
                    </p>
                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mt-2">
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
                className="inline-flex items-center bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 hover:from-amber-700 hover:via-orange-700 hover:to-amber-700 text-white text-xl font-bold px-12 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105"
              >
                <svg
                  className="w-6 h-6 mr-3"
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

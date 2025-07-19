import React, { useState } from "react";
import { useLoaderData } from "react-router";
import axios from "axios";

export default function Update() {
  const {
    _id,
    name: initialName,
    image: initialImage,
    quantity: initialQuantity,
    location: initialLocation,
    date: initialDate,
    notes: initialNotes,
    status,
  } = useLoaderData();

  const [name, setName] = useState(initialName);
  const [image, setImage] = useState(initialImage);
  const [quantity, setQuantity] = useState(initialQuantity);
  const [location, setLocation] = useState(initialLocation);
  const [date, setDate] = useState(initialDate);
  const [notes, setNotes] = useState(initialNotes);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedFood = {
      name,
      image,
      quantity,
      location,
      date,
      notes,
    };

    try {
      const res = await axios.put(
        `http://localhost:5001/update/${_id}`,
        updatedFood
      );
      console.log("Update response: ", res.data);
      alert("Food item updated successfully!");
    } catch (err) {
      console.error("Error updating food item:", err);
      alert("Failed to update food item.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-amber-800 mb-2">
            Update Food Item
          </h1>
          <p className="text-amber-700">Modify your food donation details</p>
        </div>

        <div className="bg-white rounded-xl shadow-xl border border-amber-200 overflow-hidden">
          <div className="bg-gradient-to-r from-amber-100 to-amber-200 px-6 py-4">
            <h2 className="text-xl font-semibold text-amber-800">
              Food Information
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Food Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                label="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="e.g., 2 kg, 5 portions"
                required
              />
            </div>

            <Input
              label="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="https://example.com/image.jpg"
              required
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Pickup Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g., Downtown, Main St"
                required
              />
              <Input
                label="Expiry Date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-amber-800 mb-2">
                Current Status
              </label>
              <div className="relative">
                <div
                  className={`inline-flex items-center px-4 py-2 rounded-lg font-medium text-sm ${
                    status === "available"
                      ? "bg-green-100 text-green-800 border border-green-200"
                      : status === "requested"
                      ? "bg-yellow-100 text-yellow-800 border border-yellow-200"
                      : "bg-red-100 text-red-800 border border-red-200"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full mr-2 ${
                      status === "available"
                        ? "bg-green-500"
                        : status === "requested"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                  ></div>
                  {status}
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Status is managed automatically based on requests
                </p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-amber-800 mb-2">
                Additional Notes
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full border-2 border-amber-200 rounded-lg px-4 py-3 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200 resize-none"
                rows="4"
                placeholder="Add any special instructions, dietary information, or additional details..."
              ></textarea>
            </div>

            <div className="pt-4 border-t border-amber-100">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
              >
                <span className="flex items-center justify-center">
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
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>
                  Update Food Item
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* Preview Section */}
        {image && (
          <div className="mt-8 bg-white rounded-xl shadow-lg border border-amber-200 overflow-hidden">
            <div className="bg-gradient-to-r from-amber-100 to-amber-200 px-6 py-3">
              <h3 className="text-lg font-semibold text-amber-800">Preview</h3>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4">
                <img
                  src={image}
                  alt={name || "Food preview"}
                  className="w-20 h-20 object-cover rounded-lg shadow-sm"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/80x80/f59e0b/ffffff?text=No+Image";
                  }}
                />
                <div>
                  <h4 className="text-lg font-semibold text-amber-900">
                    {name || "Food Name"}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {quantity || "Quantity"} • {location || "Location"}
                  </p>
                  <p className="text-xs text-gray-500">
                    Expires: {date || "Date"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const Input = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false,
}) => (
  <div>
    <label className="block text-sm font-semibold text-amber-800 mb-2">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full border-2 border-amber-200 rounded-lg px-4 py-3 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200"
    />
  </div>
);

import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const AddFoods = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    quantity: 1,
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
    // console.log("Form submitted:", data);

    axios.post("http://localhost:5001/add-food", data).then((res) => {
      console.log("axios result ", res.data);
    });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto p-6 bg-amber-50 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <h2 className="text-3xl font-bold text-center text-green-700 md:col-span-2">
          Add Food
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Food Name"
          value={formData.name}
          onChange={handleChange}
          className="border border-green-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <input
          type="url"
          name="image"
          placeholder="Food Image URL"
          value={formData.image}
          onChange={handleChange}
          className="border border-green-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <input
          type="number"
          name="quantity"
          placeholder="Food Quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="border border-green-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Pickup Location"
          value={formData.location}
          onChange={handleChange}
          className="border border-green-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="border border-green-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <textarea
          name="notes"
          placeholder="Additional Notes"
          value={formData.notes}
          onChange={handleChange}
          className="border border-green-300 p-2 rounded w-full md:col-span-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          rows="3"
        ></textarea>

        <div className="flex items-center space-x-4 col-span-1 md:col-span-2 border border-green-200 bg-white p-3 rounded">
          <img
            src={user?.photoURL}
            alt="Donor"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-green-700">{user.displayName}</p>
            <p className="text-sm text-gray-600">{user.email}</p>
          </div>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-green-700">
            Food Status
          </label>
          <input
            type="text"
            name="status"
            value={formData.status}
            readOnly
            className="border border-green-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded mt-4 md:col-span-2"
        >
          Add Food
        </button>
      </form>
    </div>
  );
};

export default AddFoods;

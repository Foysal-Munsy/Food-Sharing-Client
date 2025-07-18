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
    <div className="max-w-3xl mx-auto p-6 bg-amber-50 shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-amber-800">
        Update Food Information
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Food Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Input
          label="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <Input
          label="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Input
          label="Expire Date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        {/* Read-only Status Display */}
        <div>
          <label className="block text-sm text-amber-700 mb-1">Status</label>
          <p className="border border-amber-300 rounded p-2 bg-amber-100 text-amber-900">
            {status}
          </p>
        </div>

        <div>
          <label className="block text-sm text-amber-700 mb-1">Notes</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full border border-amber-300 rounded p-2 bg-amber-50 text-amber-900"
            rows="4"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-amber-700 hover:bg-amber-800 text-white py-2 px-4 rounded transition"
        >
          Update Food
        </button>
      </form>
    </div>
  );
}

const Input = ({ label, value, onChange, type = "text" }) => (
  <div>
    <label className="block text-sm text-amber-700 mb-1">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="w-full border border-amber-300 rounded p-2 bg-amber-50 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
    />
  </div>
);

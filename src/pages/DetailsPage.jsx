import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const DetailsPage = () => {
  const {
    _id,
    name,
    image,
    quantity,
    location,
    date,
    notes,
    status,
    donorEmail,
    donorName,
    donorImg,
  } = useLoaderData();

  const { user } = useContext(AuthContext);
  const [userNotes, setUserNotes] = useState(notes || "");

  const currentDate = new Date().toLocaleDateString();

  const handleRequest = () => {
    const requestData = {
      foodId: _id,
      foodName: name,
      donorEmail,
      donorName,
      requesterEmail: user?.email,
      requestDate: currentDate,
      pickupLocation: location,
      expireDate: date,
      additionalNotes: userNotes,
    };

    console.log("Request Data:", requestData);

    // Example POST request
    // fetch("/api/food-requests", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(requestData),
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     console.log(result);
    //   });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded p-6 mt-10 space-y-4">
      <h2 className="text-2xl font-bold text-green-700 text-center mb-4">
        Food Details
      </h2>

      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover rounded mb-4"
      />

      <Info label="Food ID" value={_id} />
      <Info label="Food Name" value={name} />
      <Info label="Quantity" value={quantity} />
      <Info label="Pickup Location" value={location} />
      <Info label="Expire Date" value={date} />
      <Info label="Status" value={status} />
      <Info label="Donor Email" value={donorEmail} />
      <Info label="Donor Name" value={donorName} />
      <Info label="User Email" value={user?.email || "Not logged in"} />
      <Info label="Request Date" value={currentDate} />

      <div>
        <label className="block text-sm text-gray-500 mb-1">
          Additional Notes
        </label>
        <textarea
          value={userNotes}
          onChange={(e) => setUserNotes(e.target.value)}
          className="w-full border border-green-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          rows="4"
          placeholder="Enter additional notes..."
        ></textarea>
      </div>

      <div className="pt-4">
        <h3 className="text-xl font-semibold text-green-600 mb-2">
          Donor Info
        </h3>
        <div className="flex items-center space-x-4">
          <img
            src={donorImg}
            alt={donorName}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">{donorName}</p>
            <p className="text-sm text-gray-600">{donorEmail}</p>
          </div>
        </div>
      </div>

      <button
        onClick={handleRequest}
        className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition duration-200"
      >
        Request
      </button>
    </div>
  );
};

const Info = ({ label, value }) => (
  <div>
    <span className="block text-sm text-gray-500">{label}</span>
    <p className="text-base font-medium text-gray-800">{value}</p>
  </div>
);

export default DetailsPage;

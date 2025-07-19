import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

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
    axios
      .patch(
        `http://localhost:5001/request/${_id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      )
      .then((res) => {
        if (res.data.modifiedCount > 0 || res.data.success) {
          Swal.fire({
            icon: "success",
            title: "Request Successful",
            text: "Your food request has been submitted!",
            confirmButtonColor: "#d97706", // amber-600
          });
        } else {
          Swal.fire({
            icon: "info",
            title: "Already Requested",
            text: "You have already requested this item.",
            confirmButtonColor: "#d97706",
          });
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Request Failed",
          text: "There was a problem submitting your request.",
          confirmButtonColor: "#dc2626", // red-600
        });
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 mb-4 tracking-tight">
            Food Details
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/50">
          {/* Hero Image */}
          <div className="relative">
            <img
              src={image}
              alt={name}
              className="w-full h-80 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            <div className="absolute top-6 right-6">
              <span className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg capitalize">
                {status}
              </span>
            </div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                {name}
              </h3>
            </div>
          </div>

          <div className="p-8 md:p-12">
            {/* Food Information Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-amber-900 mb-6 flex items-center">
                  <div className="w-2 h-8 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full mr-3"></div>
                  Food Information
                </h4>
                <Info label="Food ID" value={_id} icon="🆔" />
                <Info label="Quantity" value={quantity} icon="📦" />
                <Info label="Pickup Location" value={location} icon="📍" />
                <Info label="Expire Date" value={date} icon="📅" />
              </div>

              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-amber-900 mb-6 flex items-center">
                  <div className="w-2 h-8 bg-gradient-to-b from-orange-500 to-red-500 rounded-full mr-3"></div>
                  Request Information
                </h4>
                <Info
                  label="User Email"
                  value={user?.email || "Not logged in"}
                  icon="👤"
                />
                <Info label="Request Date" value={currentDate} icon="📋" />
              </div>
            </div>

            {/* Additional Notes */}
            <div className="mb-12">
              <label className="block text-xl font-bold text-amber-900 mb-4 flex items-center">
                <div className="w-2 h-6 bg-gradient-to-b from-yellow-500 to-amber-500 rounded-full mr-3"></div>
                Additional Notes
              </label>
              <div className="relative">
                <textarea
                  value={userNotes}
                  onChange={(e) => setUserNotes(e.target.value)}
                  className="w-full border-2 border-amber-200 rounded-2xl p-6 bg-amber-50/50 text-amber-900 focus:outline-none focus:ring-4 focus:ring-amber-200/50 focus:border-amber-500 transition-all duration-300 resize-none"
                  rows="4"
                  placeholder="Enter additional notes..."
                ></textarea>
                <div className="absolute top-4 right-4">
                  <svg
                    className="w-6 h-6 text-amber-400"
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

            {/* Donor Info */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold text-amber-900 mb-6 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full mr-3"></div>
                Donor Information
              </h4>
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-100">
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <img
                      src={donorImg}
                      alt={donorName}
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
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
                    <h5 className="text-xl font-bold text-amber-900 mb-1">
                      {donorName}
                    </h5>
                    <p className="text-amber-700 mb-2 flex items-center">
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
                      {donorEmail}
                    </p>
                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Verified Donor
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Request Button */}
            <div className="text-center">
              <button
                onClick={handleRequest}
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
                Request This Food
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Info = ({ label, value, icon }) => (
  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-amber-100 hover:shadow-lg transition-all duration-300">
    <div className="flex items-start space-x-3">
      <span className="text-2xl">{icon}</span>
      <div className="flex-1">
        <span className="block text-sm font-semibold text-amber-600 uppercase tracking-wide mb-1">
          {label}
        </span>
        <p className="text-lg font-bold text-amber-900 break-words">{value}</p>
      </div>
    </div>
  </div>
);

export default DetailsPage;

import React from "react";
import { useRouteError } from "react-router";
// import Header from "../components/Header";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4">
        <div className="text-center space-y-8 max-w-lg">
          {/* 404 Number */}
          <div className="relative">
            <h1 className="text-8xl sm:text-9xl font-black text-transparent bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text">
              404
            </h1>
            <div className="absolute inset-0 text-8xl sm:text-9xl font-black text-orange-200 -z-10 translate-x-1 translate-y-1">
              404
            </div>
          </div>

          {/* Error Message */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-800">
              Oops! Page Not Found
            </h2>
            <p className="text-orange-600 text-lg leading-relaxed">
              Oops! Looks like this tasty page got lost in the kitchen. 🍽️ Don't
              worry, even the best chefs misplace a recipe sometimes. Try
              checking the URL or head back to our delicious homepage!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => window.history.back()}
              className="cursor-pointer bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Go Back
            </button>
            <button
              onClick={() => (window.location.href = "/")}
              className="cursor-pointer bg-white text-orange-600 border-2 border-orange-300 hover:bg-orange-50 hover:border-orange-400 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Go Home
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center space-x-4 pt-8">
            <div className="w-3 h-3 bg-amber-400 rounded-full animate-bounce"></div>
            <div
              className="w-3 h-3 bg-orange-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-3 h-3 bg-amber-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;

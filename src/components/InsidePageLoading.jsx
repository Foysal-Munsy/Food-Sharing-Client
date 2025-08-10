import React from "react";

export default function InsidePageLoading({ word }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-amber-600 dark:border-amber-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-amber-700 dark:text-amber-300 font-medium text-lg transition-colors duration-300">
          {word}
        </p>
      </div>
    </div>
  );
}

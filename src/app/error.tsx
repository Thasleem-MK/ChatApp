"use client";
import React from "react";

const ErrorComponent = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center space-y-4">
        <h1 className="text-2xl font-bold text-red-600">Error</h1>
        <p className="text-gray-700">{error.message}</p>
        <button
          onClick={reset}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition"
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default ErrorComponent;

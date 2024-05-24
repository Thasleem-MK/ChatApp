import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="h-screen w-screen bg-sky-700 flex justify-center items-center">
      <div className="bg-white rounded-md shadow-lg p-8 max-w-md w-full mx-4 h-fit">
        <form action="" className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-center text-sky-700">
              ChatApp
            </h1>
            <h2 className="text-sm font-bold text-center text-sky-700 mt-0">
              Login
            </h2>
          </div>
          <input
            type="email"
            placeholder="sample@gmail.com"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <input
            type="text"
            placeholder="Password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <button
            type="submit"
            className="w-full py-2 bg-sky-700 text-white rounded-md hover:bg-sky-800 transition-colors"
          >
            Sign in
          </button>
        </form>
        <p className="text-center mt-4 text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-sky-700 font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default page;

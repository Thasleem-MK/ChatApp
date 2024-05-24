"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Page = ():JSX.Element => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (value: string, name: string): void => {
    setNewUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="h-screen w-screen bg-sky-700 flex justify-center items-center">
      <div className="bg-white rounded-md shadow-lg p-8 max-w-md w-full mx-4">
        <form action="" className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-center text-sky-700">
              ChatApp
            </h1>
            <h2 className="text-sm font-bold text-center text-sky-700 mt-0">
              Register
            </h2>
          </div>
          <input
            type="text"
            placeholder="John"
            required
            name="name"
            onChange={(e) => {
              handleChange(e.target.value, e.target.name);
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <PhoneInput
            country={"us"}
            placeholder="123-456-7890"
            onChange={(e) => {
              setNewUser({ ...newUser, phone: e });
            }}
            inputProps={{ required: true }}
            containerClass="w-full"
            inputClass="!w-full !h-full px-4 !py-2 !border !border !border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="sample@gmail.com"
            onChange={(e) => {
              handleChange(e.target.value, e.target.name);
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <input
            type="text"
            placeholder="Password"
            required
            name="password"
            onChange={(e) => {
              handleChange(e.target.value, e.target.name);
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          />

          <button
            type="submit"
            className="w-full py-2 bg-sky-700 text-white rounded-md hover:bg-sky-800 transition-colors"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;

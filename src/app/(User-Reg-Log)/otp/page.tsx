"use client";
import { Axios } from "@/app/Axios";
import { errorToast, successToast } from "@/app/Toast";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const [otp, setOtp] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await Axios.post(
      "/otp",
      { OTP: otp },
      { withCredentials: true }
    )
      .then((result) => {
        if (result) {
          successToast(result.data.message);
          router.push("/");
        }
      })
      .catch((error) => {
        console.error(error);
        errorToast("Something went wrong!!");
      });
  };
  return (
    <div className="h-screen w-screen bg-sky-700 flex justify-center items-center">
      <div className="bg-white rounded-md shadow-lg p-8 max-w-md w-full mx-4 h-fit">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-center text-sky-700">
              ChatApp
            </h1>
            <h2 className="text-sm font-bold text-center text-sky-700 mt-0">
              OTP
            </h2>
          </div>
          <input
            type="text"
            placeholder="1234..."
            required
            onChange={(e) => {
              setOtp(e.target.value);
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <button
            type="submit"
            className="w-full py-2 bg-sky-700 text-white rounded-md hover:bg-sky-800 transition-colors"
          >
            Varify
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;

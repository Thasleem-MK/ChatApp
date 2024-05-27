"use client";
import React, { useContext } from "react";
import { StorageContext } from "./Storage";

const Message: React.FC = () => {
  const storageContext = useContext(StorageContext);

  if (!storageContext) {
    throw new Error("StorageContext must be used within a StorageProvider");
  }

  const { storage } = storageContext;

  return (
    <>
      <div className="bg-slate-700 p-4 text-white text-xl font-bold">
        Chat Header
      </div>
      <div className="flex-grow overflow-y-auto p-4 bg-white">
        {storage.map((file, index) => (
          <audio key={index} src={URL.createObjectURL(file)} controls></audio>
        ))}
        <div className="mb-4">{/* Messages will go here */}</div>
      </div>
    </>
  );
};

export default Message;

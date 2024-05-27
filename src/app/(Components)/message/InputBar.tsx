"use client";
import React, { useState, useEffect, useContext } from "react";
import { useReactMediaRecorder } from "react-media-recorder-2";
import attach from "../../../../public/attach.png";
import mic from "../../../../public/microphone-filled_.png";
import send from "../../../../public/send_.png";
import Image from "next/image";
import { StorageContext } from "./Storage";

const InputBar: React.FC = () => {
  const storageContext = useContext(StorageContext);

  if (!storageContext) {
    throw new Error("StorageContext must be used within a StorageProvider");
  }

  const { storage, setStorage } = storageContext;

  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({
      video: false,
      audio: {
        echoCancellation: true,
      },
    });

  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (mediaBlobUrl) {
      const Data = async () => {
        const response = await fetch(mediaBlobUrl);
        const blob = await response.blob();
        const file = new File([blob], "audio-message.webm", {
          type: "audio/webm",
        });
        setStorage((prev: File[]) => [...prev, file]);
      };
      Data();
    }
  }, [mediaBlobUrl, setStorage]);

  useEffect(() => {
    return () => {
      if (status === "recording") {
        stopRecording();
      }
    };
  }, [status, stopRecording]);

  const handleSend = async () => {
    // send text message
    if (message.trim()) {
      console.log("Sending text message:", message);
      setMessage(""); // Clear the input field after sending
    }
  };

  return (
    <div className="p-4 bg-slate-200 flex items-center space-x-2">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
        placeholder="Type a message"
      />
      <input type="file" className="hidden" id="attachFile" />
      <label
        htmlFor="attachFile"
        className="cursor-pointer rounded-full p-2 hover:bg-gray-300 transition-colors"
      >
        <Image src={attach} alt="Attach file" width={24} height={24} />
      </label>

      <button
        className="ml-2 p-2 rounded-full hover:bg-gray-300 transition-colors"
        onMouseDown={startRecording}
        onMouseUp={stopRecording}
        aria-label="Record audio"
      >
        <Image src={mic} alt="Record audio" height={22} width={22} />
      </button>

      <button
        className="ml-2 p-2 text-white rounded-md hover:bg-gray-300 transition-colors"
        onClick={handleSend}
        aria-label="Send message"
      >
        <Image src={send} alt="Send message" width={20} height={20} />
      </button>
    </div>
  );
};

export default InputBar;
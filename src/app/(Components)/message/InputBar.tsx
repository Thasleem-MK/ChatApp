"use client";
import React, { useState } from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import attach from "../../../../public/attach.png";
import mic from "../../../../public/microphone-filled_.png";
import send from "../../../../public/send_.png";
import Image from "next/image";

interface Blob {
  size: number;
  type: string;
}

const InputBar = () => {
  const recorderControls = useAudioRecorder();
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [isRecording, setIsRecording] = useState(false);

  const addAudioElement = (blob: Blob) => {
    setAudioBlob(blob);
  };

  const handleMouseDown = () => {
    setIsRecording(true);
    recorderControls.startRecording();
  };

  const handleMouseUp = () => {
    if (isRecording) {
      setIsRecording(false);
      recorderControls.stopRecording();
    }
  };

  const handleSend = async () => {
    // Implement sending functionality here
    if (audioBlob) {
      // Send the audio blob to the backend or handle it accordingly
      const formData = new FormData();
      // formData.append("audio", audioBlob as Blob);

      try {
        const response = await fetch("YOUR_BACKEND_ENDPOINT", {
          method: "POST",
          body: formData,
        });
        if (response.ok) {
          console.log("Audio sent successfully");
          // Clear the audio blob after sending
          setAudioBlob(null);
        } else {
          console.error("Failed to send audio");
        }
      } catch (error) {
        console.error("Error sending audio:", error);
      }
    }
  };

  return (
    <div className="p-4 bg-slate-200 flex items-center space-x-2">
      <input
        type="text"
        className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
        placeholder="Type a message"
      />
      <input type="file" className="hidden" id="attachFile" />
      <label
        htmlFor="attachFile"
        className="cursor-pointer rounded-full p-2  hover:bg-gray-300 transition-colors"
      >
        <Image src={attach} alt="Attach" width={24} height={24} />
      </label>
      <div className="hidden">
        <AudioRecorder
          onRecordingComplete={(blob: Blob) => {
            addAudioElement(blob);
          }}
          recorderControls={recorderControls}
        ></AudioRecorder>
      </div>
      <button
        className="ml-2 p-2 rounded-full hover:bg-gray-300 transition-colors"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <Image src={mic} alt="" height={22} width={22}></Image>
      </button>

      <button
        className={
          isRecording
            ? "ml-2 p-2 text-white rounded-md hover:bg-gray-300 transition-colors opacity-0"
            : "ml-2 p-2 text-white rounded-md hover:bg-gray-300 transition-colors opacity-100"
        }
        onClick={handleSend}
        disabled={isRecording}
      >
        <Image src={send} alt="" width={20} height={20} />
      </button>
    </div>
  );
};

export default InputBar;
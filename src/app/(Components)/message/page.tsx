import React from "react";
import InputBar from "./InputBar";

const MessageBar = (): React.JSX.Element => {
  return (
    <div className="w-3/4 h-full flex flex-col">
      <div className="bg-slate-700 p-4 text-white text-xl font-bold">
        Chat Header
      </div>
      <div className="flex-grow overflow-y-auto p-4 bg-white">
        <div className="mb-4">{/* Messages will go here */}</div>
      </div>
      <InputBar />
    </div>
  );
};

export default MessageBar;

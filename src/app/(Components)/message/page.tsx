import React from "react";
import InputBar from "./InputBar";
import Message from "./Message";
import { StorageProvider } from "./Storage";

const MessageBar: React.FC = () => {
  return (
    <StorageProvider>
      <div className="w-3/4 h-full flex flex-col">
        <Message />
        <InputBar />
      </div>
    </StorageProvider>
  );
};

export default MessageBar;

// Storage.tsx
"use client";
import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// Define the type for the storage context
interface StorageContextType {
  storage: File[];
  setStorage: Dispatch<SetStateAction<File[]>>;
}

// Create the context with a default undefined value
export const StorageContext = createContext<StorageContextType | undefined>(
  undefined
);

// Define the type for the children prop
interface StorageProviderProps {
  children: ReactNode;
}

// Create the StorageProvider component
export const StorageProvider: React.FC<StorageProviderProps> = ({
  children,
}) => {
  const [storage, setStorage] = useState<File[]>([]);

  return (
    <StorageContext.Provider value={{ storage, setStorage }}>
      {children}
    </StorageContext.Provider>
  );
};

"use client";
// contexts/ShortenedUrlContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// Define the context types
interface ShortenedUrlContextType {
  shortenedUrl: string;
  setShortenedUrl: Dispatch<SetStateAction<string>>;
}

// Create the context
const ShortenedUrlContext = createContext<ShortenedUrlContextType | undefined>(
  undefined
);

// Create a provider component
interface ShortenedUrlProviderProps {
  children: ReactNode;
}

export const ShortenedUrlProvider: React.FC<ShortenedUrlProviderProps> = ({
  children,
}) => {
  const [shortenedUrl, setShortenedUrl] = useState<string>("");

  return (
    <ShortenedUrlContext.Provider value={{ shortenedUrl, setShortenedUrl }}>
      {children}
    </ShortenedUrlContext.Provider>
  );
};

// Create a custom hook to use the ShortenedUrlContext
export const useShortenedUrl = (): ShortenedUrlContextType => {
  const context = useContext(ShortenedUrlContext);
  if (!context) {
    throw new Error(
      "useShortenedUrl must be used within a ShortenedUrlProvider"
    );
  }
  return context;
};

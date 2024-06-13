"use client";
import React, {
  createContext,
  useContext,
  useRef,
  ReactNode,
  RefObject,
} from "react";

interface ScrollContextProps {
  sectionRef: RefObject<HTMLDivElement>;
}

const ScrollContext = createContext<ScrollContextProps | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <ScrollContext.Provider value={{ sectionRef }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = (): ScrollContextProps => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};

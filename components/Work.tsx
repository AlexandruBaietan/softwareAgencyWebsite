import React from "react";
import Link from "next/link";

export const WorkContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="grid grid-col-1 lg:grid-cols-2 w-full min-h-screen">
      {children}
    </div>
  );
};

export const WorkBackground: React.FC = () => (
  <div className="grid grid-cold-1 lg:grid-cols-2 w-full min-h-screen top-0  sticky">
    <div className="bg-blxk h-p[30vh] lg:h-auto"></div>
    <div className="bg-white h-[70vh] lg:min-h-screen"></div>
  </div>
);

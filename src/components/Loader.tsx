import React from "react";

interface LoaderProps {
  className?: string;
}

export default function Loader({ className = "" }: LoaderProps) {
  return (
    <div className={`flex justify-center items-center h-full ${className}`}>
      <span className="loader"></span>
    </div>
  );
}

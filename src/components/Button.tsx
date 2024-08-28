import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="py-4 px-[60px] h-14 rounded-full bg-button text-white font-medium hover:bg-buttonHover transition-colors"
    >
      {children}
    </button>
  );
}

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  width: string;
  className?: string;
}

export default function Button({
  children,
  onClick,
  width,
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{ minWidth: width }}
      className={`py-4 h-[58px] rounded-full bg-button font-medium
        hover:bg-buttonHover transition-colors w-fit ${className}`}
    >
      {children}
    </button>
  );
}

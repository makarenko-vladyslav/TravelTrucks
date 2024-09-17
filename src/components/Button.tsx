import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  width: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  width,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      style={{ minWidth: width }}
      disabled={disabled}
      className={`py-4 h-[58px] rounded-full bg-button font-medium hover:bg-buttonHover transition-all w-fit ${className}
      ${
        disabled
          ? "opacity-20 hover:cursor-default hover:bg-inherit hover:text-main"
          : ""
      }`}
    >
      {children}
    </button>
  );
}

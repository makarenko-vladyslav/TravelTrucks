import { ButtonProps } from "../types/types";

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
          ? "opacity-20 hover:cursor-default bg-grayLight text-inputs hover:bg-grayLight hover:text-main"
          : ""
      }`}
    >
      {children}
    </button>
  );
}

import { RotatingLines } from "react-loader-spinner";

interface LoaderProps {
  fullScreen?: boolean;
  text?: string;
  className?: string;
  width?: string;
}

export default function Loader({
  fullScreen = false,
  text = "",
  className = "",
  width = "40",
}: LoaderProps) {
  return (
    <div
      className={`flex justify-center items-center gap-3 ${
        fullScreen ? "h-screen loading" : ""
      } ${className}`}
      aria-live="polite"
    >
      {text && (
        <p
          className={`text-center text-main font-bold ${
            fullScreen ? "text-4xl" : "text-lg"
          }`}
        >
          {text}
        </p>
      )}

      <RotatingLines
        visible={true}
        width={width}
        strokeColor="var(--color-main)"
        strokeWidth="4"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
}

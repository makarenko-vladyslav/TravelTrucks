import { RotatingLines } from "react-loader-spinner";

export default function Loader({ fullScreen = false, text = "" }) {
  return (
    <div
      className={`flex justify-center items-center gap-3 ${
        fullScreen ? "h-svh loading " : ""
      }`}
    >
      {text && (
        <p className="text-center text-main text-8xl font-bold">{text}</p>
      )}

      <RotatingLines
        visible={true}
        height="58"
        width="58"
        strokeColor="var(--color-main)"
        strokeWidth="4"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

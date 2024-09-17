import { useEffect } from "react";

const useDisableScrollAndKeyboard = (
  isOpen: boolean,
  handleNext: () => void,
  handlePrev: () => void,
  onRequestClose: () => void
) => {
  useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (event: KeyboardEvent): void => {
        if (event.key === "ArrowRight") {
          handleNext();
        } else if (event.key === "ArrowLeft") {
          handlePrev();
        } else if (event.key === "Escape") {
          onRequestClose();
        } else {
          event.preventDefault();
        }
      };

      const handleWheel = (event: WheelEvent): void => {
        event.preventDefault();
      };

      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("wheel", handleWheel, { passive: false });

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("wheel", handleWheel);
      };
    }
  }, [isOpen, handleNext, handlePrev, onRequestClose]);
};

export default useDisableScrollAndKeyboard;

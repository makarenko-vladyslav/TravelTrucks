import React, { useEffect } from "react";
import { ModalProps } from "../types/types";

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, children }) => {
  const handleEscapeKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  return (
    <>
      <div
        className={`fixed inset-0 z-10 bg-main bg-opacity-50 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-modal="true"
        role="dialog"
      ></div>
      <div
        className={`text-nowrap absolute right-5 top-5 z-20 bg-white bg-opacity-90 backdrop-blur-lg border border-text border-opacity-30 p-6 rounded-lg w-fit shadow-lg transform transition-all duration-300 ${
          isVisible ? "scale-100 top-0 right-0" : "scale-0 -top-32 -right-36"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;

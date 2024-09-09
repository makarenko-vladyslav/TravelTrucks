import React, { useEffect } from "react";
import Modal from "react-modal";
import { IoMdCloseCircle } from "react-icons/io";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

interface ModalImageProps {
  isOpen: boolean;
  onRequestClose: () => void;
  activeImageIndex: number;
  gallery: { original: string }[];
  handleNext: () => void;
  handlePrev: () => void;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    height: "fit-content",
    maxWidth: "object-fit",
    border: "none",
    padding: "0",
    background: "transparent",
    overflow: "visible",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.80)",
    zIndex: "99",
  },
};

Modal.setAppElement("#root");

const ModalImage: React.FC<ModalImageProps> = ({
  isOpen,
  onRequestClose,
  activeImageIndex,
  gallery,
  handleNext,
  handlePrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, activeImageIndex, handleNext, handlePrev]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <button onClick={onRequestClose} className="absolute top-2 -right-4 z-[999]">
        <IoMdCloseCircle className="size-9 text-grayLight hover:text-button cursor-pointer transition-colors" />
      </button>

      <button onClick={handlePrev}>
        <FaCircleChevronLeft className="absolute top-1/2 transform -translate-y-1/2 left-5 size-12 text-white hover:text-main transition-colors" />
      </button>
      <img
        src={gallery[activeImageIndex].original}
        alt={`Slide ${activeImageIndex + 1}`}
        className="w-full h-full object-cover object-center rounded-[16px]"
      />
      <button onClick={handleNext}>
        <FaCircleChevronRight className="absolute top-1/2 transform -translate-y-1/2 right-5 size-12 text-white hover:text-main transition-colors" />
      </button>
    </Modal>
  );
};

export default ModalImage;

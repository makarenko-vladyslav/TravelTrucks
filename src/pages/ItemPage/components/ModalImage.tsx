import React from "react";
import Modal from "react-modal";
import { IoMdCloseCircle } from "react-icons/io";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import useDisableScrollAndKeyboard from "../../../hooks/seDisableScrollAndKeyboard";

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
    maxWidth: "90%",
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
  useDisableScrollAndKeyboard(isOpen, handleNext, handlePrev, onRequestClose);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <button
        id="modal-close-button"
        onClick={onRequestClose}
        className="absolute top-3 -right-3 z-[999] transition-opacity duration-300"
      >
        <IoMdCloseCircle className="size-6 text-grayLight hover:text-button cursor-pointer" />
      </button>

      <button onClick={handlePrev}>
        <FaCircleChevronLeft className="absolute top-1/2 transform -translate-y-1/2 left-5 size-12 text-white hover:text-main transition-colors" />
      </button>
      <img
        src={gallery[activeImageIndex].original}
        alt={`Slide ${activeImageIndex + 1}`}
        className="w-full h-full object-cover object-center rounded-[8px]"
      />
      <button onClick={handleNext}>
        <FaCircleChevronRight className="absolute top-1/2 transform -translate-y-1/2 right-5 size-12 text-white hover:text-main transition-colors" />
      </button>
    </Modal>
  );
};

export default ModalImage;

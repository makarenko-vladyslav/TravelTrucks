import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../../../utils/responsive";
import ModalImage from "../../../components/ModalImage";

interface CamperGalleryProps {
  gallery: { original: string }[];
  isTabletOrMobile: boolean;
}

const CamperGallery: React.FC<CamperGalleryProps> = ({
  gallery,
  isTabletOrMobile,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openModal = (index: number) => {
    setActiveImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNext = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === gallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === 0 ? gallery.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <Carousel
        additionalTransfrom={0}
        autoPlaySpeed={3000}
        infinite
        keyBoardControl
        minimumTouchDrag={80}
        partialVisible
        pauseOnHover
        renderArrowsWhenDisabled={false}
        rtl={false}
        shouldResetAutoplay={true}
        showDots={false}
        slidesToSlide={1}
        swipeable
        removeArrowOnDeviceType={["mobile", "tablet"]}
        responsive={responsive}
        autoPlay={!isTabletOrMobile}
        rewind={true}
        rewindWithAnimation={true}
        className="mb-6"
      >
        {gallery.map((image, index) => (
          <img
            key={index}
            src={image.original}
            alt={`Camper photo ${index + 1}`}
            className="object-cover object-center w-[292px] h-[312px] rounded-[10px] overflow-hidden bg-badges cursor-pointer"
            onClick={() => openModal(index)}
          />
        ))}
      </Carousel>

      <ModalImage
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        activeImageIndex={activeImageIndex}
        gallery={gallery}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </>
  );
};

export default CamperGallery;

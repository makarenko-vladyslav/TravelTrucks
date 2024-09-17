import React, { useState } from "react";
import { CamperGalleryProps } from "../../../types/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import ModalImage from "./ModalImage";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

const CamperGallery: React.FC<CamperGalleryProps> = ({ gallery }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const openModal = (index: number): void => {
    setActiveImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  const handleNext = (): void => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === gallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = (): void => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === 0 ? gallery.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView="auto"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        scrollbar={{ draggable: true }}
        modules={[Navigation, Pagination]}
        className="mb-6 flex items-center justify-center gap-12"
      >
        {gallery.map((image, index) => (
          <SwiperSlide key={index} style={{ width: "auto" }}>
            <img
              src={image.original}
              alt={`Camper photo ${index + 1}`}
              className="object-cover object-center w-[292px] h-[312px] rounded-[10px] overflow-hidden bg-badges cursor-pointer"
              onClick={() => openModal(index)}
            />
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev after:hidden">
          <FaCircleChevronLeft className="text-white hover:text-main transition-colors" />
        </div>
        <div className="swiper-button-next after:hidden">
          <FaCircleChevronRight className="text-white hover:text-main transition-colors" />
        </div>

        <div className="swiper-pagination"></div>
      </Swiper>

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

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../utils/responsive";

interface CamperGalleryProps {
  gallery: { original: string }[];
  isTabletOrMobile: boolean;
}

const CamperGallery: React.FC<CamperGalleryProps> = ({
  gallery,
  isTabletOrMobile,
}) => (
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
        className="object-cover object-center w-[292px] h-[312px] rounded-[10px] overflow-hidden bg-badges"
      />
    ))}
  </Carousel>
);

export default CamperGallery;

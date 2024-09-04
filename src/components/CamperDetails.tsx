import React from "react";
import { FaStar } from "react-icons/fa";
import { CiMap } from "react-icons/ci";
import { BsSuitHeart } from "react-icons/bs";

interface CamperDetailsProps {
  name: string;
  rating: number;
  reviews: {
    reviewer_name: string;
    reviewer_rating: number;
    comment: string;
  }[];
  location: string;
  price: number;
}

const CamperDetails: React.FC<CamperDetailsProps> = ({
  name,

  rating,
  reviews,
  location,
  price,
}) => (
  <>
    <div className="flex justify-between gap-3">
      <h2 className="text-2xl leading-[1.33] font-semibold mb-2">{name}</h2>
      <BsSuitHeart className="text-2xl self-center hover:fill-button" />
    </div>

    <div className="flex gap-4 mb-4">
      <p className="flex align-center tracking-wide underline">
        <span className="flex items-center gap-1">
          <FaStar className="fill-rating" />
          {rating}
        </span>
        ({reviews.length} Reviews)
      </p>

      <p className="flex align-center gap-1">
        <CiMap className="self-center text-lg" />
        {location.split(", ").reverse().join(", ")}
      </p>
    </div>
    <span className="flex align-center text-2xl leading-[1.33] font-semibold gap-3 mb-7">
      €{price.toFixed(2)}
    </span>
  </>
);

export default CamperDetails;

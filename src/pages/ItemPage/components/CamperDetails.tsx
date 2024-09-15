import React from "react";
import { FaStar } from "react-icons/fa";
import { CiMap } from "react-icons/ci";
import FavoriteButton from "../../../components/FavoriteButton";
import { Link } from "react-router-dom";
import { Camper } from "../../../types/types";

const CamperDetails: React.FC<Camper> = (currentItem) => {
  const { name, rating, reviews, location, price } = currentItem;

  return (
    <>
      <div className="flex justify-between gap-3">
        <h2 className="text-2xl leading-[1.33] font-semibold mb-2">{name}</h2>
        <FavoriteButton favorite={currentItem} />
      </div>

      <div className="flex gap-4 mb-4">
        <Link to={`/catalog/${currentItem.id}/reviews`}>
          <p className="flex align-center tracking-wide underline">
            <span className="flex items-center gap-1">
              <FaStar className="fill-rating" />
              {rating}
            </span>
            ({reviews.length} Reviews)
          </p>
        </Link>

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
};

export default CamperDetails;

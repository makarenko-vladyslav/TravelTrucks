import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import { FaStar } from "react-icons/fa";
import { CiMap } from "react-icons/ci";
import ItemDetailsIcon from "../../../components/Equipment";
import { Camper, IconKey } from "../../../types/types";
import FavoriteButton from "../../../components/FavoriteButton";

interface CatalogItemProps {
  camper: Camper;
}

const allowedKeys: IconKey[] = [
  "transmission",
  "engine",
  "AC",
  "bathroom",
  "kitchen",
  "TV",
  "radio",
  "refrigerator",
  "microwave",
  "gas",
  "water",
];

const CatalogItem: React.FC<CatalogItemProps> = ({ camper }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <Link to={`/catalog/${camper.id}/features`}>
        <div className="relative h-full rounded-lg overflow-hidden">
          <img
            src={camper.gallery[0]?.thumb}
            alt={`${camper.name} photo`}
            className={`h-full w-full object-cover transition-all duration-500 ${
              isLoading ? "blur-md" : "blur-0"
            }`}
            onLoad={handleImageLoad}
          />
        </div>
      </Link>

      <div className="relative">
        <div className="flex justify-between gap-3 max-mobLarge:block">
          <Link to={`/catalog/${camper.id}/features`}>
            <h2 className="text-2xl leading-[1.33] font-semibold mb-2">
              {camper.name}
            </h2>
          </Link>

          <span className="flex max-mobLarge:mb-1 align-center text-2xl leading-[1.33] font-semibold gap-3">
            €{camper.price.toFixed(2)}
            <FavoriteButton
              favorite={camper}
              className="max-mobLarge:absolute max-mobLarge:right-0 max-mobLarge:top-1"
            />
          </span>
        </div>

        <div className="flex gap-4 mb-6 ">
          <Link to={`/catalog/${camper.id}/reviews`}>
            <p className="flex align-center tracking-wide underline">
              <span className="flex items-center gap-1">
                <FaStar className="fill-rating" />
                {camper.rating}
              </span>
              ({camper.reviews.length} Reviews)
            </p>
          </Link>

          <p className="flex align-center gap-1">
            <CiMap className="self-center text-lg" />
            {camper.location.split(", ").reverse().join(", ")}
          </p>
        </div>

        <p className="text-text  desk:w-[560px] truncate mb-6">
          {camper.description}
        </p>

        <ul className="flex flex-wrap gap-2 mb-6 max-mobLarge:justify-center">
          {Object.entries(camper)
            .filter(([key]) => allowedKeys.includes(key as IconKey))
            .map(([key, value]) => (
              <ItemDetailsIcon
                key={key}
                detailKey={key as IconKey}
                value={value}
              />
            ))}
        </ul>

        <div className="flex justify-center lap:justify-start">
          <Link to={`/catalog/${camper.id}/features`}>
            <Button className="text-white max-tab:mb-3" width="166px">
              Show more
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CatalogItem;

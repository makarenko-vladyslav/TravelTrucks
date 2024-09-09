import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import { FaStar } from "react-icons/fa";
import { CiMap } from "react-icons/ci";
import ItemDetailsIcons from "../../../components/Equipment";
import { Camper } from "../../../types";
import FavoriteButton from "../../../components/FavoriteButton";

interface CatalogItemProps {
  camper: Camper;
}

const allowedKeys = [
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
  return (
    <>
      <Link to={`/catalog/${camper.id}/features`}>
        <img
          src={camper.gallery[0]?.thumb}
          alt={`${camper.name} photo`}
          className="h-full rounded-lg object-cover bg-grayLight"
        />
      </Link>

      <div>
        <div className="flex justify-between gap-3">
          <Link to={`/catalog/${camper.id}/features`}>
            <h2 className="text-2xl leading-[1.33] font-semibold mb-2">
              {camper.name}
            </h2>
          </Link>

          <span className="flex align-center text-2xl leading-[1.33] font-semibold gap-3">
            €{camper.price.toFixed(2)}
            <FavoriteButton favorite={camper} />
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

        <p className="text-text w-[518px] truncate mb-6">
          {camper.description}
        </p>

        <ul className="flex flex-wrap gap-2 mb-6">
          {Object.entries(camper)
            .filter(([key]) => allowedKeys.includes(key))
            .map(([key, value]) => (
              <ItemDetailsIcons key={key} detailKey={key} value={value} />
            ))}
        </ul>

        <Link to={`/catalog/${camper.id}/features`}>
          <Button className="text-white" width="166px">
            Show more
          </Button>
        </Link>
      </div>
    </>
  );
};

export default CatalogItem;

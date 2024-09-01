import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { FaStar } from "react-icons/fa";
import { BsSuitHeart } from "react-icons/bs";
import { CiMap } from "react-icons/ci";
import DetailItem from "./DetailItem";
import { Camper } from "../types";

interface CatalogListItemProps {
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

const CatalogListItem: React.FC<CatalogListItemProps> = ({ camper }) => {
  return (
    <li
      key={camper.id}
      className="grid grid-cols-2 lap:grid-cols-[300px_1fr] gap-6 border border-grayLight p-6 rounded-[20px] w-full min-h-[368px] overflow-hidden"
    >
      <img
        src={camper.gallery[0]?.thumb}
        alt={`${camper.name} photo`}
        className="h-full rounded-lg object-cover"
      />
      <div>
        <div className="flex justify-between gap-3">
          <h2 className="text-2xl leading-[1.33] font-semibold mb-2">
            {camper.name}
          </h2>

          <span className="flex align-center text-2xl leading-[1.33] font-semibold gap-3">
            €{camper.price.toFixed(2)}
            <BsSuitHeart className="self-center -translate-y-1.5 hover:fill-button" />
          </span>
        </div>

        <div className="flex gap-4 mb-6 ">
          <p className="flex align-center tracking-wide underline">
            <span className="flex items-center gap-1">
              <FaStar className="fill-rating" />
              {camper.rating}
            </span>
            ({camper.reviews.length} Reviews)
          </p>

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
              <DetailItem key={key} detailKey={key} value={value} />
            ))}
        </ul>

        <Link to={`/catalog/${camper.id}`}>
          <Button className="text-white" width="166px">
            Show more
          </Button>
        </Link>
      </div>
    </li>
  );
};

export default CatalogListItem;

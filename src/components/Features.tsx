import React from "react";
import DetailItem from "./DetailItem";
import campersData from "../data/campers.json";
import { useParams } from "react-router-dom";
import BookingForm from "./BookingForm";

export default function Features() {
  const campers = campersData.items;

  const { id } = useParams<{ id: string }>();
  const camper = campers.find((camper) => camper._id === id);
  const specs = camper?.specs || {};

  const splitValue = (value) => {
    if (value.includes("km")) {
      return value;
    }
    const isText = value.search(/[a-zA-Z]/);

    if (isText === -1) {
      return value;
    }

    const numberPart = value.substring(0, isText).trim();
    let textPart = value.substring(isText).trim();

    if (textPart.length > 3) {
      textPart = textPart.charAt(0).toUpperCase() + textPart.slice(1);
    }

    return `${numberPart} ${textPart}`;
  };

  return (
    <div className="py-11 flex gap-10">
      <div className="w-full max-w-[640px] py-11 px-20 bg-inputs rounded-[10px]">
        <ul className="flex flex-wrap items-start justify-start gap-2 w-full mb-11">
          {Object.entries(camper?.details || {}).map(([key, value]) => (
            <DetailItem key={key} detailKey={key} value={value} />
          ))}
        </ul>

        <h3 className="after-line">Vehicle Type</h3>

        <ul className="flex flex-col gap-4 pt-6">
          {Object.entries(specs).map(([key, value]) => {
            return (
              <li key={key} className="flex justify-between">
                <p className="capitalize">{key}</p>
                <p>{splitValue(value)}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <BookingForm />
    </div>
  );
}

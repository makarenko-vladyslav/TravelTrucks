import React from "react";
import DetailItem from ".//DetailItem";
import campersData from "../data/campers.json";
import { useParams } from "react-router-dom";
import BookingForm from "./BookingForm";

export default function Features() {
  const campers = campersData.items;

  const { id } = useParams<{ id: string }>();
  const camper: Camper | undefined = campers.find(
    (camper) => camper._id === id
  );

  return (
    <div>
      <ul className="flex flex-wrap gap-2 mb-6">
        {Object.entries(camper.details).map(([key, value]) => (
          <DetailItem key={key} detailKey={key} value={value} />
        ))}
      </ul>

      <BookingForm />
    </div>
  );
}

import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import BookingForm from "./BookingForm";
import DetailItem from "./DetailItem";
import { RootState } from "../redux/store";

const Features: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const campers = useSelector((state: RootState) => state.campers.items);

  if (!campers || !Array.isArray(campers)) {
    return <div>We don`t have details for this camper</div>;
  }

  const camper = campers.find((camper) => camper.id === id);

  if (!camper) {
    return <div>Camper not found</div>;
  }

  const {
    form,
    length,
    width,
    height,
    tank,
    consumption,
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
  } = camper;

  const booleanDetails = {
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
  };

  const textDetails = {
    form,
    length,
    width,
    height,
    tank,
    consumption,
    transmission,
    engine,
  };

  return (
    <div className="py-11 flex gap-10">
      <div className="w-full max-w-[640px] py-11 px-20 bg-inputs rounded-[10px]">
        <ul className="flex flex-wrap items-start justify-start gap-2 w-full mb-11">
          {Object.entries(booleanDetails).map(([key, value]) => (
            <DetailItem key={key} detailKey={key} value={value} />
          ))}
        </ul>

        <h3 className="after-line">Vehicle Type</h3>

        <ul className="flex flex-col gap-4 pt-6">
          {Object.entries(textDetails).map(([key, value]) => (
            <li key={key} className="flex justify-between capitalize">
              <p>{key}</p>
              <p>{value?.toString() ?? ""}</p>
            </li>
          ))}
        </ul>
      </div>

      <BookingForm />
    </div>
  );
};

export default Features;

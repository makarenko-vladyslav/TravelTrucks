import React from "react";
import { useSelector } from "react-redux";
import BookingForm from "./BookingForm";
import ItemDetailsIcons from "../../../components/Equipment";
import { selectCampers } from "../../../redux/selectors";

const Features: React.FC = () => {
  const { currentItem } = useSelector(selectCampers);

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
  } = currentItem;

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
            <ItemDetailsIcons key={key} detailKey={key} value={value} />
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

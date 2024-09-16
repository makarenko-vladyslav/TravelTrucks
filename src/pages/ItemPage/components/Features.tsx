import React from "react";
import { useSelector } from "react-redux";
import { selectCampers } from "../../../redux/selectors";
import ItemDetailsIcons from "../../../components/Equipment";
import { BooleanDetails, TextDetails, IconKey } from "../../../types/types";

const BooleanDetailsList: React.FC<{ details: BooleanDetails }> = ({
  details,
}) => (
  <ul className="flex flex-wrap items-start justify-start gap-2 w-full mb-11">
    {Object.entries(details).map(([key, value]) => (
      <ItemDetailsIcons key={key} detailKey={key as IconKey} value={value} />
    ))}
  </ul>
);

const TextDetailsList: React.FC<{ details: TextDetails }> = ({ details }) => (
  <ul className="flex flex-col gap-4 pt-6">
    {Object.entries(details).map(([key, value]) => (
      <li key={key} className="flex justify-between capitalize">
        <p>{key}</p>
        <p>{value?.toString() ?? ""}</p>
      </li>
    ))}
  </ul>
);

const Features: React.FC = () => {
  const { currentItem } = useSelector(selectCampers);

  if (!currentItem) return null;

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

  const booleanDetails: BooleanDetails = {
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

  const textDetails: TextDetails = {
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
    <div className="w-full py-11 px-4 tab:px-8 desk:px-20 bg-inputs rounded-[10px]">
      <BooleanDetailsList details={booleanDetails} />
      <h3 className="after-line">Vehicle Type</h3>
      <TextDetailsList details={textDetails} />
    </div>
  );
};

export default Features;

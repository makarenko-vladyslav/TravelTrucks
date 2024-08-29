import React from "react";
import { GiGasStove } from "react-icons/gi";
import { HiOutlineRadio } from "react-icons/hi2";
import { PiWind, PiBathtub } from "react-icons/pi";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { BsCupHot, BsDroplet, BsFuelPumpDiesel } from "react-icons/bs";
import {
  MdOutlineTv,
  MdLocalGasStation,
  MdOutlineElectricRickshaw,
} from "react-icons/md";
import {
  TbMicrowave,
  TbAutomaticGearbox,
  TbManualGearboxFilled,
} from "react-icons/tb";

// Function to get the appropriate icon based on detail key and value
const getIcon = (key: string, value: string | boolean | number | undefined) => {
  switch (key) {
    case "AC":
      return PiWind;
    case "bathroom":
      return PiBathtub;
    case "kitchen":
      return BsCupHot;
    case "TV":
      return MdOutlineTv;
    case "radio":
      return HiOutlineRadio;
    case "refrigerator":
      return CgSmartHomeRefrigerator;
    case "microwave":
      return TbMicrowave;
    case "gas":
      return GiGasStove;
    case "water":
      return BsDroplet;
    case "transmission":
      return value === "automatic" ? TbAutomaticGearbox : TbManualGearboxFilled;
    case "engine":
      switch (value) {
        case "diesel":
          return BsFuelPumpDiesel;
        case "hybrid":
          return MdOutlineElectricRickshaw;
        case "petrol":
          return MdLocalGasStation;
        default:
          return null;
      }
    default:
      return null;
  }
};

interface DetailItemProps {
  detailKey: string;
  value: string | boolean | number | undefined;
}

const DetailItem: React.FC<DetailItemProps> = ({ detailKey, value }) => {
  const Icon = getIcon(detailKey, value);

  // Check if value should be displayed
  const shouldDisplay =
    typeof value === "boolean"
      ? value
      : typeof value === "string"
      ? Boolean(value.trim())
      : typeof value === "number"
      ? true
      : false;

  if (!shouldDisplay) {
    return null;
  }

  return (
    <li className="flex align-center gap-2 px-[18px] py-3 bg-badges rounded-full">
      {Icon && <Icon className="w-6 h-auto" />}

      <span>
        {typeof value === "boolean" ? (
          <span className="capitalize">{detailKey && detailKey}</span>
        ) : (
          <span className="capitalize">
            {value !== undefined ? value.toString() : ""}
          </span>
        )}
      </span>
    </li>
  );
};

export default DetailItem;

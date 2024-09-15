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

type IconKey =
  | "AC"
  | "bathroom"
  | "kitchen"
  | "TV"
  | "radio"
  | "refrigerator"
  | "microwave"
  | "gas"
  | "water"
  | "transmission"
  | "engine";

type EngineValue = "diesel" | "hybrid" | "petrol" | undefined;

const getIcon = (
  key: IconKey,
  value: string | boolean | number | EngineValue
) => {
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

interface ItemDetailsIconsProps {
  detailKey: IconKey;
  value: string | boolean | number | EngineValue;
  style?: string;
}

const ItemDetailsIcons: React.FC<ItemDetailsIconsProps> = ({
  detailKey,
  value,
  style,
}) => {
  const Icon = getIcon(detailKey, value);

  const shouldDisplay =
    value !== undefined &&
    (typeof value === "boolean" ? value : String(value).trim().length > 0);

  if (!shouldDisplay) {
    return null;
  }

  const getValue = (value: string | boolean | number | EngineValue) => {
    if (typeof value === "boolean") {
      return value ? detailKey : "";
    }
    return value?.toString() ?? "";
  };

  return (
    <li
      className={`flex justify-center items-center gap-2 px-[18px] py-3 max-h-12 bg-badges rounded-full ${style}`}
    >
      {Icon && <Icon className="w-6 h-auto" />}
      <span className="capitalize">{getValue(value)}</span>
    </li>
  );
};

export default ItemDetailsIcons;

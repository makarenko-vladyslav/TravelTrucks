import React from "react";
import { useSelector } from "react-redux";
import { selectCampers } from "../../../redux/selectors";
import ReviewList from "./ReviewList";

const Reviews: React.FC = () => {
  const { currentItem } = useSelector(selectCampers);

  if (!currentItem) return null;

  return <ReviewList reviews={currentItem.reviews} />;
};

export default Reviews;

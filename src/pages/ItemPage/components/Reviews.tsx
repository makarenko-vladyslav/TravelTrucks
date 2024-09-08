import React from "react";
import { useSelector } from "react-redux";
import BookingForm from "./BookingForm";

import { selectCampers } from "../../../redux/selectors";
import { renderStars } from "../../../utils/renderStars";

const Reviews: React.FC = () => {
  const { currentItem } = useSelector(selectCampers);

  return (
    <div className="py-11 flex gap-10">
      <ul className="py-3 max-w-[640px]">
        {currentItem?.reviews.length ? (
          currentItem.reviews.map((review, index) => (
            <li
              key={index + review.reviewer_rating + review.reviewer_name}
              className="mb-11 grid grid-cols-[60px_auto] gap-4"
            >
              <div className="rounded-full bg-badges w-[60px] h-[60px] flex justify-center items-center text-2xl leading-[1.33] text-button">
                {review.reviewer_name[0]}
              </div>

              <div className="flex flex-col gap-1 justify-center">
                <span className="font-medium">{review.reviewer_name}</span>
                <div className="flex items-center">
                  {renderStars(review.reviewer_rating)}
                </div>
              </div>

              <p className="col-span-2 text-text">{review.comment}</p>
            </li>
          ))
        ) : (
          <p className="text-gray-700 min-w-[320px]">
            We don't have any reviews for this camper yet.
          </p>
        )}
      </ul>

      <BookingForm />
    </div>
  );
};

export default Reviews;

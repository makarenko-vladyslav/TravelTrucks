import React from "react";
import campersData from "../data/campers.json";
import { useParams } from "react-router-dom";
import BookingForm from "./BookingForm";

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

type Review = {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
};

type Camper = {
  id: string;
  reviews: Review[];
};

export default function Reviews() {
  const campers = campersData.items as Camper[];

  const { id } = useParams<{ id: string }>();
  const camper = campers.find((camper) => camper.id === id);

  const renderStars = (rating: number) => {
    const stars: React.ReactNode[] = [];

    for (let i = 0; i < 5; i++) {
      if (rating >= i + 1) {
        stars.push(<FaStar key={`full-${i}`} className="text-rating" />);
      } else if (rating >= i + 0.5) {
        stars.push(<FaStarHalfAlt key={`half-${i}`} className="text-rating" />);
      } else {
        stars.push(<FaRegStar key={`empty-${i}`} className="text-badges" />);
      }
    }
    return stars;
  };

  return (
    <div className="py-11 flex gap-10">
      <ul className="py-3 max-w-[640px]">
        {camper?.reviews.length ? (
          camper.reviews.map((review, index) => (
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
}

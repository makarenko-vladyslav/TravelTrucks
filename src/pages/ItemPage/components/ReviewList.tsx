import { ReviewProps } from "../../../types/types";
import ReviewItem from "./ReviewItem";

const ReviewList: React.FC<{ reviews: ReviewProps[] }> = ({ reviews }) => (
  <ul className="py-3 max-w-[640px]">
    {reviews.length ? (
      reviews.map((review, index) => (
        <ReviewItem
          key={index + review.reviewer_rating + review.reviewer_name}
          review={review}
        />
      ))
    ) : (
      <p className="text-gray-700 min-w-[320px]">
        We don't have any reviews for this camper yet.
      </p>
    )}
  </ul>
);

export default ReviewList;

import { renderStars } from "../../../utils/renderStars";
import { ReviewProps } from "../../../types/types";

const ReviewItem: React.FC<{ review: ReviewProps }> = ({ review }) => (
  <li className="mb-11 grid grid-cols-[60px_auto] gap-4">
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
);

export default ReviewItem;

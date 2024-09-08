import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export const renderStars = (rating: number) => {
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

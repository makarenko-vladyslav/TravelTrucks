import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../redux/campersSlice";
import { selectCampers } from "../redux/selectors";
import { BsSuitHeart } from "react-icons/bs";

interface FavoriteButtonProps {
  isFavorite: boolean;
  toggleFavorite: () => void;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ favoriteId }) => {
  const dispatch = useDispatch();
  const { favorites } = useSelector(selectCampers);

  const isFavorite = favorites.some(
    (favorite: number) => favorite.id === favoriteId
  );

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(favoriteId));
  };

  return (
    <BsSuitHeart
      className={`cursor-pointer self-center -translate-y-1.5 hover:fill-button 
        ${isFavorite ? "fill-button" : ""}`}
      onClick={handleToggleFavorite}
    />
  );
};

export default FavoriteButton;

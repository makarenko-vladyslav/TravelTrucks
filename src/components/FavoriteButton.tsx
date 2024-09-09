import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../redux/campersSlice";
import { selectCampers } from "../redux/selectors";
import { BsSuitHeart } from "react-icons/bs";

interface FavoriteButtonProps {
  favorite: {
    id: number;
  };
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ favorite }) => {
  const dispatch = useDispatch();
  const { favorites } = useSelector(selectCampers);

  const isFavorite = favorites.some(
    (favItem: { id: number }) => favItem.id === favorite.id
  );

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(favorite));
  };

  return (
    <BsSuitHeart
      className={`cursor-pointer self-center -translate-y-1.5 hover:fill-button size-6
        ${isFavorite ? "fill-button" : ""}`}
      onClick={handleToggleFavorite}
    />
  );
};

export default FavoriteButton;

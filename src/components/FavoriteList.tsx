import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { selectCampers } from "../redux/selectors";
import { BsSuitHeartFill } from "react-icons/bs";
import FavoritesModal from "./FavoritesModal";

interface CampersState {
  favorites: string[];
}

const FavoriteList: React.FC = () => {
  const { favorites } = useSelector((state: CampersState) =>
    selectCampers(state)
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = useCallback(() => {
    setIsModalOpen((prevState) => !prevState);
  }, []);

  return (
    <div className="relative">
      <button
        aria-label="Toggle Favorites Modal"
        className={`cursor-pointer p-2 rounded-full text-white border transition-colors
          ${
            favorites.length > 0
              ? "bg-button hover:bg-text"
              : "bg-text hover:bg-buttonHover"
          }`}
        onClick={handleToggleModal}
      >
        <BsSuitHeartFill size={16} />
      </button>

      {isModalOpen && (
        <FavoritesModal favorites={favorites} onClose={handleToggleModal} />
      )}
    </div>
  );
};

export default FavoriteList;

import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { selectCampers } from "../redux/selectors";
import { BsSuitHeartFill } from "react-icons/bs";
import FavoritesModal from "./FavoritesModal";

const FavoriteList: React.FC = () => {
  const { favorites } = useSelector(selectCampers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleModal = useCallback(() => {
    if (isModalOpen) {
      setIsVisible(false);
      setTimeout(() => {
        setIsModalOpen(false);
      }, 300);
    } else {
      setIsModalOpen(true);
      setTimeout(() => {
        setIsVisible(true);
      }, 10);
    }
  }, [isModalOpen]);

  return (
    <div className="relative">
      <button
        aria-label="Toggle Favorites Modal"
        className={`z-50 absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer p-2 rounded-full text-white border transition-colors size-8 flex justify-center items-center ${
          favorites.length > 0
            ? "bg-button hover:bg-white hover:text-buttonHover"
            : "bg-text hover:bg-buttonHover"
        }`}
        onClick={handleToggleModal}
      >
        <BsSuitHeartFill size="100%" />
      </button>

      {isModalOpen && (
        <FavoritesModal
          favorites={favorites}
          isVisible={isVisible}
          onClose={handleToggleModal}
        />
      )}
    </div>
  );
};

export default FavoriteList;

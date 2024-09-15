import React from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { FavoritesModalProps } from "../types/types";

const FavoritesModal: React.FC<FavoritesModalProps> = ({
  favorites,
  isVisible,
  onClose,
}) => {
  const navigate = useNavigate();

  const handleNavigateToItem = (id: number) => {
    navigate(`/catalog/${id}/features`);
    onClose();
  };

  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <h2
        id="favorites-modal-title"
        className="text-2xl font-semibold mb-4 text-button"
      >
        Your Favorites:
      </h2>
      {favorites.length === 0 ? (
        <p>No favorites yet!</p>
      ) : (
        <ul>
          {favorites.map((favorite, index) => (
            <li
              key={favorite.id}
              className="cursor-pointer text-text text-xl font-bold hover:text-button"
              onClick={() => handleNavigateToItem(favorite.id)}
            >
              {index + 1}. {favorite.name}
            </li>
          ))}
        </ul>
      )}
      <button
        className="mt-4 px-6 py-2 bg-button text-white rounded-full"
        onClick={onClose}
      >
        Close
      </button>
    </Modal>
  );
};

export default FavoritesModal;

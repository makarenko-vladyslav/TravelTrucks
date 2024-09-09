import React from "react";
import { useNavigate } from "react-router-dom";

interface FavoritesModalProps {
  favorites: {
    id: number;
    name: string;
  }[];
  onClose: () => void;
}

const FavoritesModal: React.FC<FavoritesModalProps> = ({
  favorites,
  onClose,
}) => {
  const navigate = useNavigate();

  const handleNavigateToItem = async (id: number) => {
    navigate(`/catalog/${id}`);
  };

  const handleModalClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-10 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="absolute z-50 top-20 right-[10%] bg-white bg-opacity-5 backdrop-blur-lg border border-text border-opacity-30 p-6 rounded-lg w-fit shadow-lg"
        onClick={handleModalClick}
      >
        <h2 className="text-2xl font-semibold mb-4 text-button">
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
      </div>
    </div>
  );
};

export default FavoritesModal;

import React, { useEffect } from "react";
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

  const handleNavigateToItem = (id: number) => {
    navigate(`/catalog/${id}/features`);
    onClose();
  };

  const handleModalClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
  };

  const handleEscapeKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-10 flex justify-center items-center bg-main bg-opacity-50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="favorites-modal-title"
    >
      <div
        className="absolute z-50 top-20 right-[10%] bg-white bg-opacity-90 backdrop-blur-lg border border-text border-opacity-30 p-6 rounded-lg w-fit shadow-lg"
        onClick={handleModalClick}
      >
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
      </div>
    </div>
  );
};

export default FavoritesModal;

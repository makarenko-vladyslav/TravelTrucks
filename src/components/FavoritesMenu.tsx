import React, { useEffect, useState } from "react";
import { getFavoritesFromLocalStorage } from "../utils/storage";
import { Link } from "react-router-dom";

export default function FavoritesMenu() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    setFavorites(getFavoritesFromLocalStorage());
  }, []);

  return (
    <div className="absolute top-16 right-4 bg-white border shadow-lg rounded p-4 w-64">
      <h2 className="font-bold mb-2"></h2>
      {favorites.length === 0 ? (
        <p>No favorites added.</p>
      ) : (
        <ul>
          {favorites.map((id) => (
            <li key={id}>
              <Link to={`/catalog/${id}`} className="text-blue-500">
                Trailer {id}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

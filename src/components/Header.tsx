import { Link, NavLink } from "react-router-dom";
import logoUrl from "../assets/logo.svg";
import FavoriteList from "./FavoriteList";

export default function Header() {
  return (
    <header className="bg-inputs w-screen">
      <nav className="container py-3">
        <ul className="flex justify-end pr-4 tab:pr-0 tab:justify-between items-center relative py-3">
          <li>
            <Link to="/" aria-label="Go to homepage">
              <img
                src={logoUrl}
                alt="Site logo"
                className="absolute top-0 left-4 lap:left-16 py-3 cursor-pointer w-[136px]"
              />
            </Link>
          </li>
          <li className="flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-2 py-3 tab:px-4 font-medium ${
                  isActive ? "text-button" : "text-text"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/catalog"
              className={({ isActive }) =>
                `px-2 py-3 tab:px-4 font-medium ${
                  isActive ? "text-button" : "text-text"
                }`
              }
            >
              Catalog
            </NavLink>
          </li>
          <FavoriteList />
        </ul>
      </nav>
    </header>
  );
}

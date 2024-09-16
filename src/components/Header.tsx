import { Link, NavLink } from "react-router-dom";
import logoUrl from "../assets/logo.svg";
import FavoriteListButton from "./FavoriteListButton";

export default function Header() {
  return (
    <header className="bg-inputs w-screen">
      <nav className="desk:container mx-auto relative py-3 min-w-[320px] px-4 tab:px-16">
        <ul className="flex justify-between">
          <li className="mr-20">
            <Link to="/" aria-label="Go to homepage">
              <img
                src={logoUrl}
                alt="Site logo"
                className="absolute top-0 py-3 cursor-pointer w-28 tab:w-32 desk:w-[136px]"
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
          <FavoriteListButton />
        </ul>
      </nav>
    </header>
  );
}

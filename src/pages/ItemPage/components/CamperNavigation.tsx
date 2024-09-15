import React from "react";
import { NavLink } from "react-router-dom";

const CamperNavigation: React.FC = () => (
  <ul className="text-xl leading-[1.2] font-semibold flex gap-10 after-line">
    <li className="leading-[1.2]">
      <NavLink
        className={({ isActive }) =>
          isActive ? "details-active relative" : "after:opacity-0"
        }
        to="features"
      >
        Features
      </NavLink>
    </li>

    <li className="leading-[1.2]">
      <NavLink
        className={({ isActive }) =>
          isActive ? "details-active relative" : "after:opacity-0"
        }
        to="reviews"
      >
        Reviews
      </NavLink>
    </li>
  </ul>
);

export default CamperNavigation;

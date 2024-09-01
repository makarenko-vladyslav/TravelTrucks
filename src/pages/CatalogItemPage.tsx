import React, { Suspense, useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";

import campersData from "../data/campers.json";
import Header from "../components/Header";
import { FaStar } from "react-icons/fa";
import { BsSuitHeart } from "react-icons/bs";
import { CiMap } from "react-icons/ci";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import isMobileOrTablet from "../hooks/isMobileOrTablet";

const responsive = {
  mobile: {
    breakpoint: {
      max: 768,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 35,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 768,
    },
    items: 2,
    partialVisibilityGutter: 40,
  },
  laptop: {
    breakpoint: {
      max: 1440,
      min: 1024,
    },
    items: 3,
    partialVisibilityGutter: 0,
  },
  desktop: {
    breakpoint: {
      max: Infinity,
      min: 1440,
    },
    items: 4,
    partialVisibilityGutter: -12,
  },
};

const campers = campersData.items;
export default function CatalogItemPage() {
  const { id } = useParams<{ id: string }>();
  const camper: Camper | undefined = campers.find(
    (camper) => camper._id === id
  );

  const isTabletOrMobile = isMobileOrTablet();
  if (!camper) {
    return <div>Camper not found</div>;
  }

  return (
    <>
      <Header />

      <section className="container wrapper">
        <div className="flex justify-between gap-3">
          <h2 className="text-2xl leading-[1.33] font-semibold mb-2">
            {camper.name}
          </h2>

          <BsSuitHeart className="text-2xl self-center hover:fill-button" />
        </div>
        <div className="flex gap-4 mb-4 ">
          <p className="flex align-center tracking-wide underline">
            <span className="flex items-center gap-1">
              <FaStar className="fill-rating" />
              {camper.rating}
            </span>
            ({camper.reviews.length} Reviews)
          </p>

          <p className="flex align-center gap-1">
            <CiMap className="self-center text-lg" />
            {camper.location.split(", ").reverse().join(", ")}
          </p>
        </div>
        <span className="flex align-center text-2xl leading-[1.33] font-semibold gap-3 mb-7">
          €{camper.price.toFixed(2)}
        </span>

        <Carousel
          additionalTransfrom={0}
          autoPlaySpeed={3000}
          focusOnSelect={!isTabletOrMobile}
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          partialVisible
          pauseOnHover
          renderArrowsWhenDisabled={false}
          rtl={false}
          shouldResetAutoplay={true}
          showDots={false}
          slidesToSlide={1}
          swipeable
          removeArrowOnDeviceType={["mobile", "tablet"]}
          responsive={responsive}
          autoPlay={!isTabletOrMobile}
          rewind={true}
          rewindWithAnimation={true}
          className="mb-6"
        >
          {camper.gallery.map((image, k = camper._id) => (
            <img
              key={k}
              src={image.original}
              alt={`${camper.name} photo`}
              className="object-cover object-center w-[292px] h-[312px] rounded-[10px] overflow-hidden bg-badges"
            />
          ))}
        </Carousel>

        <p className="text-text mb-[60px]">{camper.description}</p>

        <section className="booking">
          <ul className="text-xl leading-[1.2] font-semibold flex gap-10 after-line">
            <li className="leading-[1.2] ">
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

          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </section>
      </section>
    </>
  );
}

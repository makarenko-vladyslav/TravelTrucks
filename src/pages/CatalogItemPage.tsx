import React from "react";
import { useParams } from "react-router-dom";
import campersData from "../data/campers.json";
import Header from "../components/Header";
// import { Camper } from "../types/types";

const campers = campersData.items;
export default function CatalogItemPage() {
  const { id } = useParams<{ id: string }>();
  const camper: Camper | undefined = campers.find(
    (camper) => camper._id === id
  );

  if (!camper) {
    return <div>Camper not found</div>;
  }

  return (
    <>
      <Header />

      <section className="container wrapper">
        <h1>{camper.name}</h1>
        <p>{camper.description}</p>
        <p>Price: ${camper.price}</p>
        <p>Rating: {camper.rating}</p>
        <p>Location: {camper.location}</p>
        <h2>Specifications</h2>
        <ul>
          <li>Form: {camper.specs.form}</li>
          <li>Length: {camper.specs.length}</li>
          <li>Width: {camper.specs.width}</li>
          <li>Height: {camper.specs.height}</li>
          <li>Tank: {camper.specs.tank}</li>
          <li>Consumption: {camper.specs.consumption}</li>
        </ul>
        <h2>Details</h2>
        <ul>
          {Object.entries(camper.details).map(([key, value]) => (
            <li key={key}>
              {key}: {value ? "Yes" : "No"}
            </li>
          ))}
        </ul>
        <h2>Gallery</h2>
        <div>
          {camper.gallery.map((image, index) => (
            <img
              key={index}
              src={image.original}
              alt={camper.name}
              className="w-1/4"
            />
          ))}
        </div>
        <h2>Reviews</h2>
        <ul>
          {camper.reviews.map((review, index) => (
            <li key={index}>
              <strong>{review.reviewer_name}</strong> (Rating:{" "}
              {review.reviewer_rating})<p>{review.comment}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

import React from "react";
import campers from "../data/campers.json";
import Button from "./Button";
import CatalogListItem from "./CatalogListItem";

export default function CatalogList() {
  const handleClick = () => {
    console.log("Load more");
  };

  return (
    <div>
      <ul className="grid gap-8 w-full">
        {campers.items.map((camper) => (
          <CatalogListItem key={camper._id} camper={camper} />
        ))}

        <Button
          onClick={handleClick}
          width="145px"
          className="mx-auto text-main bg-white border border-grayLight 
          hover:bg-white hover:border-buttonHover"
        >
          Load more
        </Button>
      </ul>
    </div>
  );
}

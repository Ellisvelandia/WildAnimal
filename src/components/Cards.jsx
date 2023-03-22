import React from "react";
import { wilds } from "../data/wildAnimals";

const Cards = () => {
  return (
    <div className="grid grid-cols-1 gap-2 mt-16 w-full">
      {wilds.map((wild) => (
        <div className="w-full relative text-center" key={wild.id}>
          <h2 className="absolute top-1 text-white left-0 right-0 text-7xl font-bold z-10">
            {wild.name}
          </h2>
          <img
            src={wild.image}
            alt="images wild"
            className="object-fill brightness-50"
          />
          <p className="text-white text-2xl font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {wild.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cards;

import React from "react";
import { wilds } from "../data/wildAnimals";

const Cards = () => {
  return (
    <div className="grid grid-cols-1 gap-2 md:mt-16 max-w-full px-4">
      {wilds.map((wild) => (
        <div
          className="w-full relative text-center border border-solid shadow-2xl my-8 p-4"
          key={wild.id}
        >
          <h2 className="md:absolute md:top-5 md:text-white text-black md:left-0 md:right-0 lg:text-7xl md:text-2xl font-bold z-10 text-base">
            {wild.name}
          </h2>
          <img
            src={wild.image}
            alt="images wild"
            className="object-fill brightness-50 lg:h-auto md:h-[400px]"
          />
          <p className="md:text-white lg:text-2xl md:text-base text-sm font-semibold md:absolute lg:top-1/2 md:top-[55%] left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 md:text-center text-justify md:w-auto w-full">
            {wild.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cards;

import React from "react";
import { animalsWarning } from "../../data/animals";

const Animals = () => {
  return (
    <div className="w-full lg:min-h-screen h-auto bg-[#3C693B] text-white py-4">
      <h2 className="lg:text-3xl md:text-xl text-lg font-bold text-center my-4">
        Saving Endangered Species: A Call to Action to Protect Wildlife
      </h2>
      <div className="grid grid-cols-4 gap-1">
        {animalsWarning.map((animal) => (
          <div className="shadow" key={animal.id}>
            <img src={animal.img} alt="animals" className="w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Animals;

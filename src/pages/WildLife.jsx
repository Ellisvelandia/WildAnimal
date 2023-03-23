import React from "react";
import Cards from "../components/Cards";

const WildLife = () => {
  return (
    <main className="inline-block w-full">
      <center>
        <p className="lg:text-7xl md:text-4xl text-2xl inline text-center w-full whitespace-nowrap overflow-hidden ">
          It's time to save
          <span className="text-green-500"> Wildlife.</span>
        </p>
      </center>
      <Cards />
    </main>
  );
};

export default WildLife;

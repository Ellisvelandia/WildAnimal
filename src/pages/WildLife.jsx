import React from "react";
import Cards from "../components/Cards";

const WildLife = () => {
  
  return (
    <main className="inline-block w-full">
      <center className="">
        <div className="">
          <div className="">
            <p className="typing lg:text-7xl md:text-4xl text-2xl inline text-center border-r-4 border-solid w-full whitespace-nowrap overflow-hidden">
              It's time to save
              <span className="text-green-500"> Wildlife.</span>
            </p>
          </div>
        </div>
      </center>
      <div className="">
        <div className="">
          <Cards />
        </div>
      </div>
    </main>
  );
};

export default WildLife;

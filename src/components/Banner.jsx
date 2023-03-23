import React from "react";
import bird  from "../../public/assets/banner_1.png";

const Banner = () => {
  return (
    <section className="bg-[url(/assets/banner.png)] bg-cover w-full bg-no-repeat min-h-screen block">
      <div className="flex items-center p-8 flex-wrap gap-24">
        <div className="flex1">
          <h3 className="text-xl font-semibold text-center uppercase text-green-600">stay with pets</h3>
          <p className="text-base lg:py-4 px-0 text-justify font-medium leading-7">
            pet, any animal kept by human beings as a source of companionship
            and pleasure. While a pet is generally kept for the pleasure that it
            can give to its owner, often, especially with horses, dogs, and
            cats, as well as with some other domesticated animals, this pleasure
            appears to be mutual.
          </p>
        </div>

        <div className=" flex2">
          <img src={bird} alt="bird banner" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Banner;

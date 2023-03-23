import React from "react";

const Article = () => {
  return (
    <div className="w-full grid place-content-center h-auto bg-[#3C693B] lg:p-4 px-4">
      <div className=" mt-20 flex lg:flex-row flex-col h-auto">
        <p className="text-left text-white md:text-3xl text-base lg:my-5 px-2">
          Wildlife conservation is the practice of protecting plant and animal
          species and their habitats. As part of the world’s ecosystems,
          wildlife provides balance and stability to nature’s processes. The
          goal of wildlife conservation is to ensure the survival of these
          species, and to educate people on living sustainably with other
          species. The human population has grown exponentially over the past
          200 years, to more than seven billion people today, and it continues
          to rapidly grow. This means natural resources are being consumed
          faster than ever by the billions of people on the planet. This growth
          and development also endangers the habitats and existence of various
          types of wildlife around the world, particularly animals and plants
          that may be displaced for land development, or used for food or other
          human purposes. Other threats to wildlife include the introduction of
          invasive species from other parts of the world, climate change,
          pollution, hunting, fishing, and poaching.
        </p>
        <img
          src="https://scontent.fbog16-2.fna.fbcdn.net/v/t39.30808-6/308677248_400293805612691_9144844298172603828_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=cxn_XX_J7JkAX8LoPPg&_nc_ht=scontent.fbog16-2.fna&oh=00_AfAGj6cXXdNrI7oiFvZPW8Hne1m8aKfNIn2DzoFA1Slaag&oe=64214905"
          alt="protection animal wild life"
          className="lg:w-1/2 w-full lg:pt-0 pt-4"
        />
      </div>
    </div>
  );
};

export default Article;

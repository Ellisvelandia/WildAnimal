import React from "react";
import animal from "/assets/animal.jpg";

const Contribute = () => {
  return (
    <div className="w-full">
      <div className="w-full my-0 mx-0 py-0 px-8 bg-cover relative">
        <img
          src={animal}
          alt="world wide img"
          className="md:h-[600px]  w-full"
          loading="lazy"
        />
        <img
          src="https://www.worldanimalprotection.org/themes/custom/wap_master/images/svg/wap-logo.svg"
          alt="logo"
          className="absolute top-5 md:w-40 md:h-40 w-16 h-16 left-5"
            loading="lazy"

        />
      </div>
      <article className="w-full flex flex-col justify-center mt-4 h-full text-center">
        <div className="p-8 justify-center text-center flex flex-col max-w-4xl my-0 mx-auto h-full">
          <h2 className="my-4">
            <span className="md:text-4xl text-xl font-semibold text-green-600">
              WildLife
            </span>
          </h2>
          <p className="md:text-lg text-sm">
            Billions of wild animals across the world are experiencing
            unbearable cruelty. Here at World Animal Protection, we believe that
            wild animals should have the right to a wild life.
          </p>
        </div>

        <div className="w-full p-4">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/t_miJbRl-o0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="aspect-video w-full mb-4"
            loading="lazy"
          ></iframe>
          <a
            href="https://www.bornfree.org.uk/adopt"
            target="_blank"
            className="text-center py-4 text-green-600 md:text-lg text-sm font-bold"
          >
            visit this link to adopt an animal
          </a>
        </div>

        <div className="w-full p-4">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3qs3Nxgq9lw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="aspect-video w-full mb-4"
            loading="lazy"
          ></iframe>
          <a
            href="https://www.worldanimalprotection.org/"
            target="_blank"
            className="text-center py-4 text-green-600 md:text-lg text-sm font-bold"
          >
            visit this link to help world animal protection
          </a>
        </div>
      </article>
    </div>
  );
};

export default Contribute;

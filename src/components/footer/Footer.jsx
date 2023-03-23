import React from "react";
import { FaPaw } from "react-icons/fa";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillPhone,
  AiOutlineMail,
} from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="grid place-content-center -mt-8 w-full bg-cover py-12 px-[7%] bg-[#3C693B] text-white">
      <div className="w-full grid md:grid-cols-3 gap-4 grid-cols-1 place-content-center">
        <div className="h-full flex flex-col items-center gap-2">
          <FaPaw size={30} />
          <p className="lg:w-1/2 text-left lg:text-base text-sm">
            Wildlife conservation is the preservation and protection of animals,
            plants, and their habitats. By conserving wildlife, we're ensuring
            that future generations can enjoy our natural world and the
            incredible species that live within it.
          </p>
        </div>

        <div className="py-4 flex flex-col my-1 space-y-2 md:text-base text-sm">
          <h3 className="text-lg mb-2">Contact Info</h3>
          <p className="inline-flex items-center gap-1">
            <AiFillPhone />
            12345-147-7855
          </p>
          <p className="inline-flex items-center gap-1">
            <AiFillPhone />
            12345-147-7855
          </p>
          <p className="inline-flex items-center gap-1">
            <AiOutlineMail /> eyis619@gmail.com
          </p>
          <p className="inline-flex items-center gap-1">
            <HiLocationMarker /> Colombia, ibague
          </p>
        </div>

        <div>
          <h3 className="text-lg py-2 px-0">newsletter</h3>
          <input
            type="email"
            placeholder="Your Email"
            className="my-3 mx-0 rounded text-base p-2 text-black"
          />
          <div className="w-full gap-2 text-lg rounded-md text-center mt-6 flex">
            <AiFillFacebook size={30} />
            <AiFillTwitterSquare size={30} />
            <AiFillInstagram size={30} />
            <AiFillLinkedin size={30} />
          </div>
        </div>
      </div>

      <div className="w-full text-base text-center mt-8 pt-10 border-t-2 pb-4 ">
        &copy; 2022 Wildlife
      </div>
    </footer>
  );
};

export default Footer;

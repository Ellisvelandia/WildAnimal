import React, { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import Links from "./Links";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="container my-9 items-center justify-center w-full">
      <div className="w-full hidden md:block">
        <Links />
        <div className="justify-start flex items-center -mt-9 w-full">
          <a
            href=""
            className="justify-end flex items-center no-underline text-black text-base ml-12"
          >
            <img
              src="https://i.ibb.co/pxS0ZBM/download-removebg-preview.webp"
              alt="Earth"
              className="w-12 h-12 cursor-pointer mr-2"
            />
            <h3 className="text-base">Earth</h3>
          </a>
        </div>
      </div>
      <div className="flex md:hidden w-full justify-end px-4">
        <Hamburger
          duration={1.2}
          color="green"
          size={30}
          toggled={isOpen}
          toggle={setIsOpen}
          onClick={() => setToggle(!toggle)}
        />

        {isOpen && (
          <div className="flex flex-col justify-center w-full items-center">
            <Links />
            <img
              src="https://i.ibb.co/pxS0ZBM/download-removebg-preview.webp"
              alt="Earth"
              className="w-12 h-12 cursor-pointer mt-4 mr-6"
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

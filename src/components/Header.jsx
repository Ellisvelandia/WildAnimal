import React from "react";

const Header = () => {
  return (
    <header className="container m-9 items-center justify-center">
      <div className="mt-4 justify-end flex items-center">
        <a
          href="/"
          className="mr-10 no-underline text-base font-semibold relative text-[rgb(81,81,81)] hover:underline "
        >
          Home
        </a>
        <a
          href="/contribute"
          className="mr-10 no-underline text-base font-semibold relative text-[rgb(81,81,81)] hover:underline "
        >
          Contribute
        </a>
        <a
          href="/wildlife"
          className="mr-10 no-underline text-base font-semibold relative text-[rgb(81,81,81)] hover:underline "
        >
          Wildlife
        </a>
      </div>
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
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

const Navlinks = [
  { name: "Home", to: "/" },
  { name: "Contribute", to: "/contribute" },
  { name: "Wildlife", to: "/wildlife" },
];

const Links = () => {
  return (
    <div className="mt-4 md:justify-end flex justify-center items-center w-full">
      {Navlinks.map(({ name, to }) => (
        <ul className="flex text-lg justify-center" key={name + to}>
          <li>
            <Link
              to={to}
              className="lg:mr-8 mr-4 tracking-wide text-center text-black cursor-pointer hover:text-green-600 delay-100 lg:text-lg font-bold md:text-base text-sm"
            >
              {name}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Links;

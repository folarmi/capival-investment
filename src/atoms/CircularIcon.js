import React from "react";
import { Link } from "react-router-dom";

const CircularIcon = ({ icon, title, path }) => {
  return (
    <Link
      to={path}
      className="flex flex-col items-center justify-center bg-blueTwo mb-4 w-20 h-20 lg:w-40 lg:h-40 rounded-full cursor-pointer hover:bg-blueFour"
    >
      <img
        loading="lazy"
        src={icon}
        alt={icon}
        className="w-12 h-12 lg:w-20 lg:h-20"
      />
      <p className="font-medium text-base text-center text-white">{title}</p>
    </Link>
  );
};

export { CircularIcon };

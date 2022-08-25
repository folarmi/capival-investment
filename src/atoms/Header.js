import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex whitespace-nowrap items-center justify-between bg-blueOne px-4 lg:px-16 xl:px-20 py-3">
      <img
        src={process.env.PUBLIC_URL + "assets/icons/logo.svg"}
        alt="capival-logo"
        className="w-36"
        loading="lazy"
      />
      {/* w-40 h-40 md:w-full md:h-full */}
      {/* <Button buttonText="Open an Account" /> */}
      <Link
        to="/create-profile"
        className="text-white font-normal md:font-semibold md:text-lg bg-primary rounded-3xl px-3 py-2 md:px-5 md:py-3"
      >
        Open an Account
      </Link>
    </header>
  );
};

export { Header };

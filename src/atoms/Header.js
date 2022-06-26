import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-blueOne md:px-10 lg:px-16 xl:px-20 py-3">
      <img
        src={process.env.PUBLIC_URL + "assets/icons/logo.svg"}
        alt="capival-logo"
      />
      {/* <Button buttonText="Open an Account" /> */}
      <Link
        to="/create-profile"
        className="text-white font-semibold text-lg bg-primary rounded-3xl px-5 py-3"
      >
        Open an Account
      </Link>
    </header>
  );
};

export { Header };

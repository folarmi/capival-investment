import React from "react";

const SearchBar = ({ placeholder }) => {
  return (
    <div
      className="relative w-full"
      style={{
        boxShadow: "0px 1px 1px rgba(51, 154, 240, 0.1)",
      }}
    >
      <input
        type="text"
        placeholder="Search"
        className="py-1 pl-10 w-full bg-white rounded-3xl placeholder-blueTwo"
      />
      <img
        src={process.env.PUBLIC_URL + "assets/icons/search.svg"}
        alt="search"
        className="absolute ml-[9%] top-2"
      />
    </div>
  );
};

export { SearchBar };

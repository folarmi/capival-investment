import React from "react";

const SearchBar = ({ placeholder }) => {
  return (
    <div
      className="relative w-[30%] mt-6"
      style={{
        boxShadow: "0px 1px 1px rgba(51, 154, 240, 0.1)",
      }}
    >
      <input
        type="text"
        placeholder={placeholder}
        className="p-3 pl-8 w-full rounded-2xl bg-blueSix"
        // style={{
        //   background: "rgba(59, 88, 168, 1)",
        // }}
      />
      <img
        src="/assets/icons/search.svg"
        alt="search"
        className="absolute mx-[3%] top-4"
        loading="lazy"
      />
    </div>
  );
};

export { SearchBar };

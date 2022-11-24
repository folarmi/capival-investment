import React from "react";
import { Loader } from "../atoms";
// import { Link } from "react-router-dom";

const BillCard = ({ cardName, onClick, path, id }) => {
  return (
    <>
      <div
        to={path}
        className="cursor-pointer py-4  bg-[#CBE1FD]/50 rounded-2xl gallery__img"
        onClick={onClick}
        id={id}
        style={{
          dropShadow: "0px 4px 4px #3B58A8",
          boxShadow: "0px 4px 4px 0px rgba(59, 88, 168, 1)",
        }}
      >
        <p className="text-center font-normal text-sm text-blueTwo flex justify-center items-center px-4 max-w-xl">
          {cardName}
        </p>
      </div>
    </>
  );
};

export { BillCard };

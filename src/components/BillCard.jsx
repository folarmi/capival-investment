import React from "react";
import { Link } from "react-router-dom";

const BillCard = ({ cardName, onClick, path }) => {
  return (
    <Link
      to={path}
      className="bg-[#CBE1FD]/50 rounded-2xl min-w-[192px]"
      onClick={onClick}
      style={{
        dropShadow: "0px 4px 4px #3B58A8",
        boxShadow: "0px 4px 4px 0px rgba(59, 88, 168, 1)",
      }}
    >
      <p className="font-normal text-base text-blueTwo py-8 flex justify-center items-center">
        {cardName}
      </p>
    </Link>
  );
};

export { BillCard };

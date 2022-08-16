import React from "react";

const TableHeader = ({ header, pageNumber }) => {
  return (
    <div className="flex items-center whitespace-nowrap justify-between">
      <p className="uppercase text-blueTwo text-sm md:text-lg">{header}</p>
      <p className="text-blueTwo text-sm md:text-base">{pageNumber}</p>
    </div>
  );
};

export { TableHeader };

import React from "react";

const TableHeader = ({ header, pageNumber }) => {
  return (
    <div className="flex justify-between">
      <p className="uppercase text-blueTwo text-lg">{header}</p>
      <p className="text-blueTwo text-base">{pageNumber}</p>
    </div>
  );
};

export { TableHeader };

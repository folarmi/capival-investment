import React from "react";

const ProgressBar = ({ width = "10%" }) => {
  return (
    <div className="flex items-center">
      <div className="w-3/5  rounded-full h-2.5">
        <div className="bg-white w-full rounded-full">
          <div
            className=" h-2 bg-blueTwo rounded-full"
            style={{ color: "white", width }}
          ></div>
        </div>
      </div>

      <p className="font-medium whitespace-nowrap text-blueTwo text-xs pl-3">
        {width} complete
      </p>
    </div>
  );
};

export { ProgressBar };

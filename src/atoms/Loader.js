import React from "react";

const Loader = () => {
  return (
    <div className="fixed flex justify-center w-full">
      <div className="pt-[60px] md:pt-[120px] md:pr-64">
        <div className="flex justify-center"></div>
        <div className=" w-full flex justify-center items-center h-52">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Loader };

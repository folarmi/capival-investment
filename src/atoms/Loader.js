import React from "react";

const Loader = () => {
  return (
    <div className="w-full flex items-center justify-center mt-[15%]">
      <div>
        <img
          src="/assets/icons/loading.svg"
          alt="spinner"
          className="flex justify-center items-center ml-[20%]"
        />
        <p className="font-normal text-base flex items-center justify-center">
          Loading, Please Wait.
        </p>
      </div>
    </div>
  );
};

export { Loader };

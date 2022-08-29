import React from "react";
import { useSelector } from "react-redux";

const BvnModal = ({ toggleBVNModal }) => {
  const bvnNumber = useSelector(
    (state) => state.auth.login?.user?.user?.customer_data?.BVN
  );

  return (
    <div className="mt-3 px-2 text-center">
      <div className="flex justify-end cursor-pointer" onClick={toggleBVNModal}>
        <img
          src="/assets/icons/closeTwo.svg"
          alt="close-button"
          className="justify-end"
        />
      </div>

      <p className="text-xl text-blueTwo pb-4">My BVN</p>
      <p className="text-lg text-black/80 pb-4">{bvnNumber || "-"}</p>
    </div>
  );
};

export { BvnModal };

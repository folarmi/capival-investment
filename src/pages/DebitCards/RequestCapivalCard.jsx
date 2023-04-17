import React from "react";

const RequestCapivalCard = ({ toggleRequestCardModal }) => {
  return (
    <div className="px-6 py-3 h-full">
      <div className="flex justify-end" onClick={toggleRequestCardModal}>
        <img src="/assets/icons/closeTwo.svg" alt="closeButton" />
      </div>
      <p className="flex items-center justify-center font-semibold text-xl mt-16">
        Coming Soon!!!
      </p>
    </div>
  );
};

export { RequestCapivalCard };

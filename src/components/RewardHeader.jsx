import React from "react";

const RewardHeader = ({ title, pageTitle }) => {
  return (
    <>
      <p className="text-xl font-semibold text-center pb-2 text-blueTwo">
        {pageTitle}
      </p>
      <div className="py-2 flex justify-center items-center bg-[#d8deee] rounded-lg">
        <img
          src="/assets/icons/logoIcon.svg"
          alt="logo"
          className="w-20 h-20"
          loading="lazy"
        />
        <div>
          <img src="/assets/icons/logoText.svg" alt="logoText" loading="lazy" />
          <p className="text-redOne font-medium text-sm uppercase">{title}</p>
        </div>
      </div>
    </>
  );
};

export { RewardHeader };

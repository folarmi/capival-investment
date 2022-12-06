import React from "react";

const UserAvatar = ({ initials, userName, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="mt-4 md:mt-8 lg:mt-0 inline-flex flex-col overflow-hidden relative justify-center items-center w-14 h-14 lg:w-28 lg:h-28 bg-blueTwo rounded-full dark:bg-blueTwo md:mr-12 cursor-pointer"
    >
      <span className="font-medium text-white text-xl uppercase">
        {initials}
      </span>
      <span className="font-normal text-white text-xs text-center uppercase">
        {userName}
      </span>
    </div>
  );
};

export { UserAvatar };

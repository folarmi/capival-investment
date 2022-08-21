import React from "react";

const UserAvatar = ({ initials, userName }) => {
  return (
    <div className="mt-4 md:mt-8 lg:mt-0 inline-flex flex-col overflow-hidden relative justify-center items-center w-28 h-28 bg-blueTwo rounded-full dark:bg-blueTwo md:mr-12">
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

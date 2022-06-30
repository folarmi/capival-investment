import React from "react";

const CircularIcon = ({ icon, onClick, title }) => {
  return (
    <div
      class="flex flex-col items-center justify-center bg-blueTwo mb-4 w-40 h-40 rounded-full cursor-pointer hover:bg-blueFour"
      onClick={onClick}
    >
      <img src={icon} alt={icon} class="w-20 h-20" />
      <p className="font-medium text-base text-center text-white">{title}</p>
    </div>
    // <div className="cursor-pointer w-[25%] h-42 mb-4 hover:bg-opacity-50">
    //   <img src={icon} alt={icon} />
    // </div>
  );
};

export { CircularIcon };

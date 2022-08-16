import React from "react";

const DebitButton = ({ icon, text, ifPrimary = true }) => {
  return (
    <div
      className="flex items-center rounded-lg py-3 px-10"
      style={{
        backgroundColor: ifPrimary ? "#c2cce4" : "#9dacd3",
        dropShadow: "0 4 4 rgba(0,0,0,0.25)",
      }}
    >
      <img src={icon} alt="icon" className="mr-1" />
      <p className="text-sm font-medium text-blueTwo">{text}</p>
    </div>
  );
};

export { DebitButton };

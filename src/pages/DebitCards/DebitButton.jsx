import React from "react";

const DebitButton = ({ icon, text, ifPrimary = true, onClick, isLoading }) => {
  return (
    <div
      className="flex mb-4 max-w-[250px] lg:max-w-[270px]  whitespace-nowrap items-center rounded-lg py-3 px-4 lg:px-10 cursor-pointer mr-2"
      onClick={onClick}
      style={{
        backgroundColor: ifPrimary ? "#c2cce4" : "#9dacd3",
        dropShadow: "0 4 4 rgba(0,0,0,0.25)",
      }}
    >
      <img src={icon} alt="icon" className="mr-1" loading="lazy" />

      {isLoading ? (
        <div className="flex items-center justify-center">
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      ) : (
        <p className="text-xs lg:text-sm font-medium text-blueTwo">{text} </p>
      )}
    </div>
  );
};

export { DebitButton };

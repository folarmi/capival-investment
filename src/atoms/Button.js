import React from "react";

const Button = ({
  buttonText,
  disabled,
  isLoading,
  type,
  className,
  size,
  onClick,
  borderRadius,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${
        type === "primary"
          ? "bg-primary text-white"
          : type === "secondary"
          ? "bg-white border border-primary text-primary"
          : type === "tertiary"
          ? "bg-grayOne text-blueTwo"
          : type === "footer-btn"
          ? "bg-white text-darkBlue font-medium"
          : "bg-primary text-white"
      } px-4 py-4 rounded-[${borderRadius}px] ${className}`}
      style={{
        width:
          size === "lg"
            ? "100%"
            : size === "md"
            ? "50%"
            : size === "sm"
            ? "40%"
            : "100%",
      }}
    >
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
        <p className="text-lg md:text-xl font-normal lg:font-semibold">
          {buttonText}
        </p>
      )}
    </button>
  );
};

export { Button };

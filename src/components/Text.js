import React from "react";

const Text = ({ type, children, className }) => {
  return (
    <div>
      <p
        className={`${
          type === "h1"
            ? "text-[50px] font-semi-bold"
            : type === "h2"
            ? "text-[40px] font-bold"
            : type === "h3"
            ? "lg:text-2xl 2xl:text-[32px] font-bold"
            : type === "h4"
            ? "text-base md:text-[32px] font-medium"
            : type === "h5"
            ? "text-[28px] font-bold"
            : type === "h6"
            ? "text-2xl font-bold"
            : type === "h7"
            ? "text-sm lg:text-base xl:text-xl 2xl:text-2xl font-medium"
            : type === "h8"
            ? "text-lg font-bold"
            : type === "h9"
            ? "text-base font-bold"
            : type === "h10"
            ? "text-lg font-medium"
            : type === "body1"
            ? "text-sm 2xl:text-xl font-normal"
            : type === "body2"
            ? "lg:text-sm 2xl:text-lg font-normal"
            : type === "body3"
            ? "text-base font-normal"
            : type === "body4"
            ? "text-sm font-normal"
            : type === "body5"
            ? "text-xs font-normal"
            : "text-black/80"
        }   ${className}`}
      >
        {children}
      </p>
    </div>
  );
};

export { Text };

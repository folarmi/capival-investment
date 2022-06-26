import React from "react";

const RegisterInput = ({ placeholder, icon, name, ifIcon = false, type }) => {
  return (
    <label className="relative text-gray-400 focus-within:text-gray-600 block">
      {ifIcon && (
        <img
          className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-[68%]"
          viewBox="0 0 20 20"
          fill="currentColor"
          src={icon}
          alt={name}
          type={type}
        />
      )}
      <input
        type="text"
        className="border border-blueTwo/50 rounded-2xl w-3/4 py-3.5 placeholder-blueThree text-sm pl-12"
        placeholder={placeholder}
      />
    </label>
  );
};

export { RegisterInput };

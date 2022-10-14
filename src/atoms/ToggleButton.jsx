import React from "react";

const ToggleButton = ({ onChange, toggleText, value }) => {
  return (
    <div className="my-4 flex items-center justify-center col-span-2">
      <div className="form-check form-switch">
        <input
          className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          value={value}
          onChange={onChange}
        />
        <label
          className="form-check-label inline-block ml-3 text-sm font-medium text-blueTwo"
          htmlFor="flexSwitchCheckDefault"
        >
          {toggleText}
        </label>
      </div>
    </div>
  );
};

export { ToggleButton };

import React from "react";

const ToggleButton = ({ onChange, toggleText, value }) => {
  return (
    <div className="my-4 flex items-center justify-center col-span-2">
      <label
        htmlFor="default-toggle"
        className="inline-flex relative items-center cursor-pointer"
      >
        <input
          type="checkbox"
          value={value}
          id="default-toggle"
          className="sr-only peer"
          onChange={onChange}
        />
        <div className="w-[12%] h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[10px] after:left-[19px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 mr-10"></div>
        <span className="ml-3 text-sm font-medium text-blueTwo ">
          {toggleText}
        </span>
      </label>
    </div>
  );
};

export { ToggleButton };

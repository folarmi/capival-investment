import React from "react";

const SavingsInput = ({
  placeholder,
  icon,
  label,
  id,
  name,
  ifIcon = false,
  type,
  error,
  readOnly,
  register,
  ...inputProps
}) => {
  return (
    <>
      <label htmlFor={name} className="text-sm font-normal text-blueTwo">
        {label}
      </label>

      <label className="relative text-gray-400 block">
        {ifIcon && (
          <img
            className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-[87%]"
            viewBox="0 0 20 20"
            fill="currentColor"
            src={icon}
            alt={name}
          />
        )}
        <input
          type={type}
          name={name}
          id={id}
          {...register}
          placeholder={placeholder}
          {...inputProps}
          className="border border-blueTwo/50 rounded-[20px] w-full py-3.5 placeholder-blueThree text-sm pl-[10px] text-blueTwo bg-blueTwo/20"
          style={{
            border: error ? "1px solid red" : "",
            backgroundColor: readOnly ? "#DCDCDC" : "",
          }}
          readOnly={readOnly}
        />
      </label>

      <span>
        <p className="text-red-500 text-xs"> {error}</p>
      </span>
    </>
  );
};

export { SavingsInput };

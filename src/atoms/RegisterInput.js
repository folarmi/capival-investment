import React from "react";

const RegisterInput = ({
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
      <label htmlFor={name} className="text-xs md:text-base font-normal">
        {label}
      </label>

      <label className="relative text-gray-400  block">
        {ifIcon && (
          <img
            className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-[68%]"
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
          className="border border-blueTwo/50 rounded-2xl w-3/4 py-3.5 placeholder-blueThree text-sm pl-12 text-blueTwo"
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

export { RegisterInput };

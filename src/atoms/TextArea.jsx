import React from "react";

const TextArea = ({
  label,
  className,
  placeholder,
  register,
  width = "w-full",
}) => {
  return (
    <div className={`${className}`}>
      <label className={`text-sm font-normal text-blueTwo`}>{label}</label>
      <textarea
        {...register}
        className={`form-control
        block
        px-5
        py-1.5
        text-base
        font-normal
        bg-blueTwo/20 bg-clip-padding
        border border-blueTwo/50 rounded-[20px]
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:border-lighterBlue focus:outline-none ${width}`}
        id="exampleFormControlTextarea1"
        rows="5"
        cols="18"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export { TextArea };

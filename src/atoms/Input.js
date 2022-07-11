const Input = ({
  icon,
  placeholder,
  className,
  type,
  name,
  id,
  error,
  label,
  bgColor = "bg-s",
  readOnly,
  labelClassName,
  normalLabelCase,
  register,
  ...inputProps
}) => {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="text-xs md:text-base font-normal">
        {label}
      </label>

      <label className="relative text-gray-400 focus-within:text-gray-600 block">
        <img
          className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3"
          viewBox="0 0 20 20"
          fill="currentColor"
          src={icon}
          alt={name}
        />
        <input
          type={type}
          name={name}
          id={id}
          {...register}
          placeholder={placeholder}
          {...inputProps}
          className="w-full rounded-2xl bg-blueTwo/[0.2] focus:outline-none font-medium text-[15px] placeholder-primary py-4 pl-14"
          style={{
            border: error ? "1px solid red" : "",
            backgroundColor: readOnly ? "#ACB5BD" : "",
          }}
          readOnly={readOnly}
        />
      </label>

      <span>
        <p className="text-red-500 text-xs"> {error}</p>
      </span>
    </div>
  );
};

export { Input };

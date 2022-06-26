const SettingsInput = ({
  placeholder,
  className,
  type,
  name,
  id,
  error,
  label,
  bgColor = "bg-s",
  readOnly,
  register,
  ...inputProps
}) => {
  return (
    <div className="">
      <label
        htmlFor={name}
        className="text-xs md:text-base font-normal uppercase mb-3"
      >
        {label}
      </label>
      <input
        readOnly={readOnly}
        type={type}
        name={name}
        id={id}
        ref={register}
        {...register}
        placeholder={placeholder}
        {...inputProps}
        className="w-full border rounded-lg bg-skyBlue focus:outline-none focus:border-lighterBlue p-1.5"
        style={{
          border: error ? "1px solid red" : "",
          backgroundColor: readOnly ? "#ACB5BD" : "",
        }}
      />
      <span>
        <p className="text-red-500 text-xs"> {error}</p>
      </span>
    </div>
  );
};

export { SettingsInput };

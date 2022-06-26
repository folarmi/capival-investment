const FluentSelect = ({
  options,
  onValueChange,
  selectedValue,
  className,
  labelName,
  label,
  register,
  placeholder,
  error,
  ...rest
}) => {
  return (
    <div className="mb-6 otherSelect">
      <label className="text-xs md:text-base font-normal uppercase mb-3">
        {label}
      </label>

      <select
        {...register}
        className={`w-3/4 rounded-2xl border border-blueTwo/50 py-3.5 placeholder-blueThree text-sm pl-12 ${className}`}
        {...rest}
        placeholder={placeholder}
      >
        <option value="" selected disabled>
          {labelName}
        </option>
        {options?.map(({ value, label }) => (
          <option
            key={value}
            value={value}
            className="pb-2"
            // style={{ backgroundColor: "#EEF5FF" }}
          >
            {label}
          </option>
        ))}
      </select>

      <span>
        <p className="text-red-500 text-sm">{error}</p>
      </span>
    </div>
  );
};

export { FluentSelect };

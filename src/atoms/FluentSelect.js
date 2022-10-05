import React from "react";
import Select from "react-select";
import { colourStyles } from "../utils/HelperFunctions";
import { useController } from "react-hook-form";

const FluentSelect = ({
  options,
  isLoading,
  placeholder,
  name,
  control,
  error,
  label,
  customOnChange,
  rules,
  isMulti,
  className,
}) => {
  const { field } = useController({ name, control, rules });

  return (
    <div className={`mt-4 ${className}`}>
      <label className="text-sm font-normal text-blueTwo">{label}</label>
      <Select
        options={options}
        onChange={(val) => {
          customOnChange && customOnChange(val);
          isMulti
            ? // onchange for react-select multi options
              field.onChange(val.map((val) => val.value))
            : field.onChange(val.value);
        }}
        isLoading={isLoading}
        placeholder={placeholder}
        isMulti={isMulti}
        styles={colourStyles}
      />
      {error && (
        <span>
          <p className="text-red-500 text-sm">{error}</p>
        </span>
      )}
    </div>
  );
};

export { FluentSelect };

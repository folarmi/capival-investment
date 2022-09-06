import React from "react";
import Select from "react-select";
import { colourStyles } from "../utils/HelperFunctions";
import { useController, useForm } from "react-hook-form";

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
}) => {
  const { field } = useController({ name, control, rules });

  return (
    <div>
      <label className="text-sm font-normal text-blueTwo">{label}</label>
      <Select
        options={options}
        onChange={(val) => {
          customOnChange && customOnChange(val);
          field.onChange(val.value);
        }}
        isLoading={isLoading}
        placeholder={placeholder}
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

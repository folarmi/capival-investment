import Select from "react-select";
import { components } from "react-select";

const { Option } = components;
export const IconOption = (props) => (
  <Option {...props}>
    <div className="flex items-center cursor-pointer">
      <div className="ml-2">{props.data.label}</div>
    </div>
  </Option>
);

const colourStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    borderRadius: "16px",
    minHeight: 53,
    border: "1px solid rgba(59, 88, 168, 0.5)",
    paddingLeft: "40px",
    color: "8EA8DD",
  }),
  placeholder: (styles) => ({
    ...styles,
    color: "#8EA8DD",
    fontSize: "14px",
  }),
};

const CustomSelect = ({
  options,
  isDisabled,
  value,
  placeholder,
  isLoading,
  defaultValue,
  onChange,
  multipleOptions = false,
}) => {
  return (
    <Select
      isDisabled={isDisabled}
      options={options}
      value={options ? options.find((option) => option?.value === value) : ""}
      // onChange={onChange}
      onChange={(value) => {
        onChange(value);
      }}
      styles={colourStyles}
      placeholder={!isLoading ? placeholder : ""}
      isLoading={isLoading}
      defaultInputValue={defaultValue}
      isMulti={multipleOptions}
    />
  );
};

export { CustomSelect };

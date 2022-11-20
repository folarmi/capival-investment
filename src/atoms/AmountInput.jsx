import React from "react";
import { useController } from "react-hook-form";
import CurrencyFormat from "react-currency-format";

const AmountInput = ({
  label,
  name,
  control,
  placeholder,
  error,
  rules,
  min,
  readOnly,
  className,
}) => {
  const { field } = useController({ name, control, rules });

  return (
    <div className={`mt-4 ${className}`}>
      <label htmlFor="amount" className={`text-sm font-normal text-blueTwo`}>
        {label}
      </label>
      <div className="border border-blueTwo/50 rounded-[20px] w-full py-3.5 placeholder-blueThree text-sm pl-[10px] text-blueTwo bg-blueTwo/20">
        <CurrencyFormat
          style={{
            backgroundColor: "3B58A8",
          }}
          displayType={"input"}
          thousandSeparator={true}
          placeholder={placeholder}
          name={name}
          min={min}
          readOnly={readOnly}
          prefix={"₦"}
          onChange={field.onChange}
        />
      </div>
      {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  );
};

export { AmountInput };

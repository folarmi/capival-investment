import React from "react";
import ReactDatePicker from "react-datepicker";
import { useController } from "react-hook-form";

const DatePicker = ({ name, className, label, rules, control, error }) => {
  const { field } = useController({ name, control, rules });

  const newDateOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  return (
    <div className={`${className}`}>
      <label
        htmlFor="start Date"
        className={`text-sm font-normal text-blueTwo`}
      >
        {label}
      </label>

      <div
        className={`cursor-pointer px-4 border border-blueTwo/50 py-3 rounded-[20px] flex items-center text-blueTwo bg-blueTwo/20`}
      >
        <ReactDatePicker
          name={name}
          onChange={(date) => field.onChange(date)}
          // onChange={field.onChange((date) =>
          //   date?.toLocaleString("en-US", newDateOptions)
          // )}
          selected={field.value || new Date()}
          inputProps={{
            placeholder: "MM-DD-YYYY HH:mm",
          }}
          // viewMode="time"
        />
        <img src="/assets/icons/calendar.svg" alt="" />
      </div>
      {error && (
        <span>
          <p className="text-red-500 text-sm">{error}</p>
        </span>
      )}
    </div>
  );
};

export { DatePicker };

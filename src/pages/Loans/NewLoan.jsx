import React from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

import { Button, SavingsInput } from "../../atoms";

const NewLoan = () => {
  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "rgba(59, 88, 168, 0.2)",
      borderRadius: "20px",
      minHeight: 49,
      border: "1px solid rgba(59, 88, 168, 0.5)",
      paddingLeft: "10px",
      color: "8EA8DD",
    }),
    placeholder: (styles) => ({
      ...styles,
      color: "#3B58A8",
      fontSize: "14px",
    }),
  };

  const { control } = useForm({
    // resolver: yupResolver(validationSchema),
  });

  return (
    <div className="mt-8">
      <p className="font-normal text-xl text-blueTwo pl-12">New Loan</p>

      <main className="grid grid-cols-2 gap-16 bg-blueSix rounded-xl mx-10 px-[6%] py-6 mt-8">
        <div>
          <SavingsInput placeholder="First Name" label="Loan Amount" />
        </div>

        <Controller
          control={control}
          name="gender"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <div>
              <label className="text-sm font-normal text-blueTwo">
                Investment Type?
              </label>
              <Select
                onBlur={onBlur} // notify when input is touched
                onChange={onChange} // send value to hook form
                checked={value}
                inputRef={ref}
                // options={genderData}
                placeholder="O months"
                styles={colourStyles}
              />
            </div>
          )}
        />

        <div className="w-[40%] justify-self-center col-span-2">
          <Controller
            control={control}
            name="gender"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <div>
                <label className="text-sm font-normal text-blueTwo">
                  Select repayment method
                </label>
                <Select
                  onBlur={onBlur}
                  onChange={onChange}
                  checked={value}
                  inputRef={ref}
                  // options={genderData}
                  placeholder="O months"
                  styles={colourStyles}
                />
              </div>
            )}
          />
        </div>

        <div className="w-[40%] justify-self-center col-span-2">
          <Button buttonText="Apply Now" className="rounded-xl" size="lg" />
        </div>
      </main>
    </div>
  );
};

export { NewLoan };

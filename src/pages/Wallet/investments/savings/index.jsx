import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

import { Button, SavingsInput } from "../../../../atoms";

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

const Savings = () => {
  const navigate = useNavigate();

  const { control } = useForm({
    // resolver: yupResolver(validationSchema),
  });

  const goToConfirmationPage = () => {
    navigate("/dashboard/wallet/investments/new-saving/confirm");
  };

  return (
    <div>
      <p className="text-center text-blueTwo text-xl uppercase py-6">
        Start Investing
      </p>

      <p className="text-blueTwo font-normal text-base text-center bg-blueThree rounded-2xl py-2 m-auto w-[30%]">
        Interest rate: <span className="text-black">2.34% Per Annum</span>
      </p>

      <form className="mt-10 mx-[15%]">
        <div className="grid grid-cols-2 gap-16">
          <Controller
            control={control}
            name="gender"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <>
                {/* <label>Investment Type?</label> */}
                <Select
                  onBlur={onBlur} // notify when input is touched
                  onChange={onChange} // send value to hook form
                  checked={value}
                  inputRef={ref}
                  // options={genderData}
                  placeholder="Savings"
                  styles={colourStyles}
                />
              </>
            )}
          />

          <div>
            <SavingsInput
              placeholder="First Name"
              ifIcon
              icon="/assets/icons/savingEye.svg"
              //   label="How much would you like to save?"
              // register={register("firstname")}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-16 mt-8">
          <div>
            <SavingsInput
              placeholder="Number of Months"
              //   label="How much would you like to save?"
              // register={register("firstname")}
            />
          </div>

          <Controller
            control={control}
            name="gender"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <>
                {/* <label>Investment Type?</label> */}
                <Select
                  onBlur={onBlur} // notify when input is touched
                  onChange={onChange} // send value to hook form
                  checked={value}
                  inputRef={ref}
                  // options={genderData}
                  placeholder="Savings"
                  styles={colourStyles}
                />
              </>
            )}
          />
        </div>

        <div className="grid grid-cols-2 gap-16 mt-8">
          <div>
            <SavingsInput
              placeholder="N0.0"
              //   label="How much would you like to save?"
              // register={register("firstname")}
            />
          </div>
        </div>

        <div className="m-auto mt-20 w-1/3">
          <Button
            buttonText="Continue"
            className="rounded-xl"
            size="lg"
            onClick={goToConfirmationPage}
          />
        </div>
      </form>
    </div>
  );
};

export { Savings };

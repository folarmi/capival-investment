import React from "react";
import { useDispatch } from "react-redux";
import { CustomSelect } from "../../atoms";

import { Button } from "../../atoms/Button";
import { RegisterInput } from "../../atoms/RegisterInput";
import { handleNextButton } from "../../slices/multistep";

const ContactDetails = () => {
  const dispatch = useDispatch();

  const goToNext = () => {
    dispatch(handleNextButton());
  };

  const maritalStatus = [
    { value: "Single", label: "Single" },
    { value: "Married", label: "Married" },
  ];

  return (
    <div className="w-full h-screen register-bg">
      <div className="m-auto md:w-[80%] lg:w-[70%] xl:w-[54%] mt-16">
        <p className="text-redOne font-semibold md:text-4xl lg:text-5xl xl:text-[50px] pb-10">
          Contact Details
        </p>
      </div>

      <section className="bg-blueOne">
        <div className="m-auto md:w-[80%] lg:w-[70%] xl:w-[54%]">
          <p className="text-blueTwo font-normal text-sm py-6">
            Please provide your address information
          </p>
        </div>
      </section>

      <div className="m-auto mt-8 md:w-[80%] lg:w-[70%] xl:w-[54%]">
        <RegisterInput
          placeholder="Home Address"
          ifIcon
          icon={process.env.PUBLIC_URL + "assets/icons/home.svg"}
        />

        <div className="mt-8 w-3/4">
          <CustomSelect placeholder="State" options={maritalStatus} />
        </div>

        <div className="mt-8 w-3/4">
          <CustomSelect
            placeholder="Local Govt. Area"
            options={maritalStatus}
          />
        </div>

        <div className="mt-16 w-1/2">
          <Button
            buttonText="Continue"
            className="rounded-2xl"
            onClick={goToNext}
          />
        </div>
      </div>
    </div>
  );
};

export { ContactDetails };

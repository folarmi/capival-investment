import React from "react";
import { useDispatch } from "react-redux";
// import { FluentSelect } from "../../atoms";
import { Button } from "../../atoms/Button";

import { RegisterInput } from "../../atoms/RegisterInput";
import { handleNextButton } from "../../slices/multistep";

const PersonalDetails = () => {
  const dispatch = useDispatch();

  const goToNext = () => {
    dispatch(handleNextButton());
  };

  //   const gender = [
  //     { label: "Male", value: "Male" },
  //     { label: "Female", value: "Female" },
  //   ];

  return (
    <>
      <div className="m-auto md:w-[80%] lg:w-[70%] xl:w-[54%] md:mt-16 lg:mt-20 xl:mt-24">
        <p className="text-redOne font-semibold md:text-4xl lg:text-5xl xl:text-[50px] pb-10">
          Personal Details
        </p>
      </div>

      <section className="bg-blueOne">
        <div className="m-auto md:w-[80%] lg:w-[70%] xl:w-[54%]">
          <p className="font-semibold text-lg text-blueTwo py-6">
            What is your name?
          </p>
          <p className="text-blueTwo font-normal text-sm pb-6">
            Please type in your first, middle and last name
          </p>
        </div>
      </section>

      <div className="m-auto mt-8 md:w-[80%] lg:w-[70%] xl:w-[54%]">
        <RegisterInput placeholder="First Name" />

        <div className="mt-8">
          <RegisterInput placeholder="Middle Name" />
        </div>

        <div className="mt-8">
          <RegisterInput placeholder="Last Name" />
        </div>
      </div>

      <section className="bg-blueOne mt-11">
        <div className="m-auto md:w-[80%] lg:w-[70%] xl:w-[54%]">
          <p className="font-semibold text-lg text-blueTwo py-6">
            More details about you
          </p>

          <p className="text-blueTwo font-normal text-sm pb-6">
            Please enter your information
          </p>
        </div>
      </section>

      <div className="m-auto md:w-[80%] lg:w-[70%] xl:w-[54%]">
        <div className="mt-8">
          <RegisterInput
            placeholder="Date of Birth"
            ifIcon
            type="date"
            icon={process.env.PUBLIC_URL + "assets/icons/calendar.svg"}
          />
        </div>

        <div className="mt-8">
          {/* <FluentSelect options={gender} placeholder="Sex" /> */}
        </div>

        <div className="mt-8">
          {/* <FluentSelect options={gender} placeholder="Marital Status" /> */}
        </div>

        <div className="my-16 w-1/2">
          <Button
            buttonText="Continue"
            className="rounded-2xl"
            onClick={goToNext}
          />
        </div>
      </div>
    </>
  );
};

export { PersonalDetails };

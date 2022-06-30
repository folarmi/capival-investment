import React from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "../../atoms/Button";
import { RegisterInput } from "../../atoms/RegisterInput";
import { handleNextButton } from "../../slices/multistep";
import { CustomSelect } from "../../atoms";

const PersonalDetails = () => {
  const dispatch = useDispatch();

  const goToNext = () => {
    dispatch(handleNextButton());
  };

  const gender = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  const maritalStatus = [
    { value: "Single", label: "Single" },
    { value: "Married", label: "Married" },
  ];

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    date_of_birth: Yup.string().required("Date of birth is required"),
    // gender: Yup.string().required("Gender is required"),
    // marital_status: Yup.string().required("Marital Status is required"),
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const submitForm = (values) => {
    dispatch(handleNextButton());
    console.log(values);
  };

  const { errors } = formState;
  console.log("error", errors);

  return (
    <form
      className="w-full h-screen register-bg"
      onSubmit={handleSubmit(submitForm)}
    >
      <div className="m-auto md:w-[80%] lg:w-[70%] xl:w-[54%] mt-16">
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
        <RegisterInput
          placeholder="First Name"
          register={register("first_name")}
          error={errors?.first_name?.message}
        />

        <div className="mt-8">
          <RegisterInput
            placeholder="Middle Name"
            register={register("middle_name")}
            error={errors?.middle_name?.message}
          />
        </div>

        <div className="mt-8">
          <RegisterInput
            placeholder="Last Name"
            register={register("last_name")}
            error={errors?.last_name?.message}
          />
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
            register={register("date_of_birth")}
            error={errors?.date_of_birth?.message}
            icon="/assets/icons/calendar.svg"
          />
        </div>

        <div className="mt-8 w-3/4">
          <CustomSelect
            // placeholder="Sex"
            options={gender}
            defaultValue="test"
            // value="gender"
            // register={register("gender")}
            // error={errors?.gender?.message}
          />
        </div>

        <div className="mt-8 w-3/4">
          <CustomSelect
            placeholder="Marital Status"
            options={maritalStatus}
            register={register("marital_status")}
            error={errors?.marital_status?.message}
          />
        </div>

        <div className="my-16 w-1/2">
          <Button buttonText="Continue" className="rounded-2xl" />
        </div>
      </div>
    </form>
  );
};

export { PersonalDetails };

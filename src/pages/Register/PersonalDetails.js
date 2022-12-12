import React, { useEffect } from "react";
import * as Yup from "yup";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { components } from "react-select";

import { Button } from "../../atoms/Button";
import { RegisterInput } from "../../atoms/RegisterInput";
import {
  handleNextButton,
  // handleBackButton,
  handleGender,
} from "../../slices/multistep";
import { getGenderAsync, getMaritalStatusAsync } from "../../slices/utils";

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

const PersonalDetails = () => {
  const dispatch = useDispatch();

  const { bvnData } = useSelector((state) => state.auth);
  const { gender, maritalStatus } = useSelector((state) => state.utils);

  const value = useSelector((state) => state.multiStep.value);

  const genderData = gender.map((single) => {
    return {
      value: single.Gender,
      label: single.Gender,
    };
  });

  const maritalStatusData = maritalStatus.map((single) => {
    return {
      value: single.ID,
      label: single.Status,
    };
  });

  const validationSchema = Yup.object().shape({});

  const { register, handleSubmit, formState, reset, control } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      firstname: bvnData?.firstname,
      lastname: bvnData?.lastname,
      middlename: bvnData?.middlename,
      phone: bvnData?.phone,
      dob: bvnData?.dob,
    },
  });

  useEffect(() => {
    const defaultValues = {
      firstname: bvnData?.firstname,
      lastname: bvnData?.lastname,
      middlename: bvnData?.middlename,
      phone: bvnData?.phone,
      dob: bvnData?.dob,
    };
    reset(defaultValues);
  }, [bvnData, reset]);

  useEffect(() => {
    dispatch(getGenderAsync());
    dispatch(getMaritalStatusAsync());
  }, []);

  const submitForm = (values) => {
    dispatch(handleGender(values?.gender?.value));
    dispatch(handleNextButton());
  };

  const { errors } = formState;

  const handleBackButton = () => {
    dispatch(handleBackButton());
  };

  return (
    <form className="w-full h-screen register-bg">
      <div className="m-auto md:w-[80%] lg:w-[70%] xl:w-[54%] mt-16">
        <p className="text-redOne font-semibold md:text-4xl lg:text-5xl xl:text-[50px] pb-10 pl-6 md:pl-0">
          Personal Details
        </p>
      </div>

      <section className="bg-blueOne">
        <div className="m-auto md:w-[80%] lg:w-[70%] xl:w-[54%] pl-6 md:pl-0">
          <p className="font-semibold text-lg text-blueTwo py-6">
            What is your name?
          </p>
          <p className="text-blueTwo font-normal text-sm pb-6">
            Please type in your first, middle and last name
          </p>
        </div>
      </section>

      <div className="m-auto mt-8 md:w-[80%] lg:w-[70%] xl:w-[54%] pl-6 md:pl-0">
        <RegisterInput
          placeholder="First Name"
          register={register("firstname")}
          error={errors?.firstname?.message}
          readOnly
        />

        <div className="mt-8">
          <RegisterInput
            placeholder="Middle Name"
            register={register("middlename")}
            error={errors?.middlename?.message}
            readOnly
          />
        </div>

        <div className="mt-8">
          <RegisterInput
            placeholder="Last Name"
            register={register("lastname")}
            error={errors?.lastname?.message}
            readOnly
          />
        </div>
      </div>

      <section className="bg-blueOne mt-11">
        <div className="m-auto md:w-[80%] lg:w-[70%] xl:w-[54%] pl-6 md:pl-0">
          <p className="font-semibold text-lg text-blueTwo py-6">
            More details about you
          </p>

          <p className="text-blueTwo font-normal text-sm pb-6">
            Please enter your information
          </p>
        </div>
      </section>

      <div className="m-auto md:w-[80%] lg:w-[70%] xl:w-[54%] pl-6 md:pl-0">
        <div className="mt-8">
          <RegisterInput
            placeholder="Date of Birth"
            ifIcon
            readOnly
            register={register("dob")}
            error={errors?.dob?.message}
            icon="/assets/icons/calendar.svg"
          />
        </div>

        <div className="mt-8 w-3/4">
          <Controller
            control={control}
            name="gender"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Select
                onBlur={onBlur} // notify when input is touched
                onChange={onChange} // send value to hook form
                checked={value}
                inputRef={ref}
                options={genderData}
                placeholder="Gender"
                styles={colourStyles}
              />
            )}
          />
        </div>

        <div className="mt-8 w-3/4">
          <Controller
            control={control}
            name="maritalStatus"
            render={({ field: { onChange, onBlur, value, name, ref } }) => (
              <Select
                onBlur={onBlur}
                onChange={onChange}
                checked={value}
                inputRef={ref}
                options={maritalStatusData}
                placeholder="Marital Status"
                styles={colourStyles}
              />
            )}
          />
        </div>

        <div className="flex justify-between my-10 lg:my-16">
          {/* <div className="w-1/2 mr-6">
            <Button
              size="md"
              buttonText="Back"
              className="rounded-2xl"
              type="secondary"
              onClick={handleBackButton}
            />
          </div> */}

          <div className="w-full lg:w-1/2">
            <Button
              size="md"
              buttonText="Continue"
              className="rounded-2xl mb-10 lg:mb-0"
              onClick={handleSubmit(submitForm)}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export { PersonalDetails };

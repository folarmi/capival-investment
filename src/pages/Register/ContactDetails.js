import React, { useEffect } from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "../../atoms/Button";
import { RegisterInput } from "../../atoms/RegisterInput";
import {
  handleAddress,
  handleNextButton,
  handleBackButton,
} from "../../slices/multistep";
import { getAllStates, getStateLGA } from "../../slices/utils";

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

const ContactDetails = () => {
  const dispatch = useDispatch();
  const { states, getStateLGALoading, lgas, getAllStatesLoading } = useSelector(
    (state) => state.utils
  );

  const validationSchema = Yup.object().shape({
    address: Yup.string().required("Address is required"),
  });

  const { register, handleSubmit, formState, control } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const allStatesData = states.map((state) => {
    return {
      value: state.Code,
      label: state.State,
    };
  });

  const stateLga = lgas.map((lga) => {
    return {
      value: lga,
      label: lga,
    };
  });

  useEffect(() => {
    dispatch(getAllStates());
  }, []);

  const getStateValue = (value) => {
    dispatch(getStateLGA(value?.label));
  };

  const submitForm = (values) => {
    console.log(values);
    dispatch(handleAddress(values?.address));
    dispatch(handleNextButton());
  };

  const { errors } = formState;

  const handleBackButton = () => {
    dispatch(handleBackButton());
  };

  return (
    <div className="w-full h-screen register-bg">
      <div className="m-auto md:w-[80%] lg:w-[70%] xl:w-[54%] mt-16">
        <p className="text-redOne font-semibold md:text-4xl lg:text-5xl xl:text-[50px] pb-10 pl-6 md:pl-0">
          Contact Details
        </p>
      </div>

      <section className="bg-blueOne">
        <div className="m-auto md:w-[80%] lg:w-[70%] xl:w-[54%]">
          <p className="text-blueTwo font-normal text-sm py-6 pl-6 md:pl-0">
            Please provide your address information
          </p>
        </div>
      </section>

      <form
        // onSubmit={handleSubmit(submitForm)}
        className="m-auto mt-8 md:w-[80%] lg:w-[70%] xl:w-[54%] pl-6 md:pl-0"
      >
        <RegisterInput
          placeholder="Home Address"
          ifIcon
          icon={process.env.PUBLIC_URL + "assets/icons/home.svg"}
          register={register("address")}
          error={errors?.address?.message}
        />

        <div className="mt-8 w-3/4">
          <Controller
            control={control}
            name="state"
            render={({ field: { onChange, onBlur, value, name, ref } }) => (
              <Select
                onBlur={onBlur}
                onChange={getStateValue}
                checked={value}
                inputRef={ref}
                isLoading={getAllStatesLoading}
                options={allStatesData}
                placeholder="State"
                styles={colourStyles}
              />
            )}
          />
        </div>

        <div className="mt-8 w-3/4">
          <Controller
            control={control}
            name="lga"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Select
                onBlur={onBlur}
                onChange={onChange}
                checked={value}
                inputRef={ref}
                options={stateLga}
                isLoading={getStateLGALoading}
                placeholder="Local Govt Area"
                styles={colourStyles}
              />
            )}
          />
        </div>

        <div className="flex justify-between mt-10 lg:mt-16 w-full lg:w-1/2">
          {/* <Button buttonText="Continue" className="rounded-2xl" />
           */}

          {/* <div className="w-1/2 mr-6">
            <Button
              size="md"
              buttonText="Back"
              className="rounded-2xl"
              type="secondary"
              onClick={handleBackButton}
            />
          </div> */}

          <div className="w-full lg:w-3/4">
            <Button
              size="md"
              buttonText="Continue"
              className="rounded-2xl"
              onClick={handleSubmit(submitForm)}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export { ContactDetails };

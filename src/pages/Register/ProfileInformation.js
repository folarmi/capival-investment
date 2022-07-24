import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { Button } from "../../atoms/Button";
import { RegisterInput } from "../../atoms/RegisterInput";
import {
  handleEmailAndPassword,
  handleNextButton,
} from "../../slices/multistep";

const ProfileInformation = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is Required"),
    password: Yup.string()
      .required("Please enter a password")
      .min(8, "Password too short")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { errors } = formState;

  const submitForm = (values) => {
    const variables = {
      email: values?.email,
      password: values?.password,
    };
    dispatch(handleEmailAndPassword(variables));
    dispatch(handleNextButton());
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="w-full h-screen register-bg"
    >
      <div className="m-auto md:w-[80%] lg:w-[70%] xl:w-[54%] mt-16">
        <p className="text-redOne font-semibold md:text-4xl lg:text-5xl xl:text-[50px] pb-10">
          Create your Profile
        </p>
      </div>

      <section className="bg-blueOne">
        <div className="m-auto md:w-[80%] lg:w-[70%] xl:w-[54%]">
          <p className="text-blueTwo font-normal text-sm py-6">
            Please enter your profile information
          </p>
        </div>
      </section>

      <div className="m-auto my-12 md:w-[80%] lg:w-[70%] xl:w-[54%]">
        <RegisterInput
          placeholder="Email"
          register={register("email")}
          error={errors?.email?.message}
        />
      </div>

      <section className="bg-blueOne">
        <div className="m-auto md:w-[80%] lg:w-[70%] xl:w-[54%]">
          <p className="font-semibold text-lg text-blueTwo py-6">
            Set up password
          </p>
          <p className="text-blueTwo font-normal text-sm pb-6">
            Password should contain: An uppercase (A) A lowercase (a) Special
            character (@#$) At least 8 characters
          </p>
        </div>
      </section>

      <div className="m-auto mt-12 md:w-[80%] lg:w-[70%] xl:w-[54%]">
        <div className="mb-12">
          <RegisterInput
            placeholder="Password"
            register={register("password")}
            error={errors?.password?.message}
          />
        </div>

        <div className="mt-16 w-1/2">
          <Button buttonText="Continue" className="rounded-2xl" />
        </div>
      </div>
    </form>
  );
};

export { ProfileInformation };

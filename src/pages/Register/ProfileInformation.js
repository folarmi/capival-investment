import React, { useState } from "react";
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

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordShown = () => {
    setPasswordShown(!passwordShown);
  };

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
        <p className="text-redOne font-semibold md:text-4xl lg:text-5xl xl:text-[50px] pb-10 pl-6 md:pl-0">
          Create your Profile
        </p>
      </div>

      <section className="bg-blueOne">
        <div className="m-auto md:w-[80%] lg:w-[70%] xl:w-[54%] pl-6 md:pl-0">
          <p className="text-blueTwo font-normal text-sm py-6">
            Please enter your profile information
          </p>
        </div>
      </section>

      <div className="m-auto my-12 md:w-[80%] lg:w-[70%] xl:w-[54%] pl-6 md:pl-0">
        <RegisterInput
          placeholder="Email"
          register={register("email")}
          error={errors?.email?.message}
        />
      </div>

      <section className="bg-blueOne">
        <div className="m-auto md:w-[80%] lg:w-[70%] xl:w-[54%] pl-6 md:pl-0">
          <p className="font-semibold text-lg text-blueTwo py-6">
            Set up password
          </p>
          <p className="text-blueTwo font-normal text-sm pb-6">
            Password should contain: An uppercase (A) A lowercase (a) Special
            character (@#$) At least 8 characters
          </p>
        </div>
      </section>

      <div className="m-auto mt-12 md:w-[80%] lg:w-[70%] xl:w-[54%] pl-6 md:pl-0">
        <div className="mb-12 w-full relative">
          <i onClick={togglePasswordShown} className="">
            <img
              src={
                passwordShown
                  ? "/assets/icons/hide.svg"
                  : "/assets/icons/hide.svg"
              }
              onClick={togglePasswordShown}
              alt="visible"
              className="w-5 absolute z-30 cursor-pointer mt-4 md:mt-[5%] ml-[65%] lg:ml-[89%]"
            />
          </i>
          <RegisterInput
            placeholder="Password"
            register={register("password")}
            error={errors?.password?.message}
            type={passwordShown ? "text" : "password"}
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

import React from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { Button } from "../../atoms/Button";
import { RegisterInput } from "../../atoms/RegisterInput";
import { handleNextButton, handlePhoneNumber } from "../../slices/multistep";
import { verifyBVNAsync } from "../../slices/auth";

const CreateProfile = () => {
  const dispatch = useDispatch();

  const { isVerifyBvnLoading } = useSelector((state) => state.auth);

  const validationSchema = Yup.object().shape({
    bvn: Yup.string()
      .required("BVN is required")
      .min(11, "The minimum digits of bvn is 11.")
      .max(11, "The maximum digits of bvn is 11."),
  });

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const submitForm = (values) => {
    dispatch(verifyBVNAsync(values?.bvn))
      .unwrap()
      .then((res) => {
        if (res?.status) {
          toast("BVN Validated");
          dispatch(handlePhoneNumber(res.phone));
          dispatch(handleNextButton(values?.bvn));
        }
      })
      .catch((err) => {
        toast.error(err);
        reset();
      });
  };

  const { errors } = formState;

  return (
    <div className="w-full h-screen register-bg">
      <div className="pl-4 lg:pl-0 m-auto md:w-[80%] lg:w-[70%] xl:w-[54%] mt-16">
        <p className="text-redOne font-semibold md:text-4xl lg:text-5xl xl:text-[50px] pb-10">
          Create your Profile
        </p>
      </div>

      <section className="px-4 lg:px-0 bg-blueOne">
        <div className="m-auto md:w-[80%] lg:w-[70%] xl:w-[54%]">
          <p className="font-semibold text-lg text-blueTwo py-6">
            Why we need your BVN
          </p>
          <p className="text-blueTwo font-normal text-sm">
            When you ‘give’ us your BVN, we run a check on the general BVN
            registry to make sure the number you typed in is correct and yours.
          </p>
          <p className="text-blueTwo font-normal text-sm py-6">
            We will not use your BVN to move money from any of your other bank
            accounts and we won’t share it with anyone.
          </p>
        </div>
      </section>

      <form
        onSubmit={handleSubmit(submitForm)}
        className="px-4 lg:px-0 m-auto mt-8 md:w-[80%] lg:w-[70%] xl:w-[54%]"
      >
        <RegisterInput
          placeholder="Enter your BVN"
          register={register("bvn")}
          error={errors?.bvn?.message}
        />

        <p className="text-blueTwo font-normal text-sm pt-2">
          You can also dial *565*0# from your mobile phone to get your BVN
        </p>

        <div className="mt-16 w-1/2">
          <Button
            buttonText="Continue"
            className="rounded-2xl"
            isLoading={isVerifyBvnLoading}
          />
        </div>
      </form>
    </div>
  );
};

export { CreateProfile };

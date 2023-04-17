import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { Button, SavingsInput } from "../../atoms";
import { useDispatch, useSelector } from "react-redux";
import { createNextofKinAsync } from "../../slices/auth";
import { toast } from "react-toastify";

const NextofKin = ({ setActiveTab, nextOfKinStatus }) => {
  const dispatch = useDispatch();
  const { createNextofKinLoading } = useSelector((state) => state?.auth?.login);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    relationship: Yup.string().required("Relationship is Required"),
    name: Yup.string().required("Name is Required"),
    address: Yup.string().required("Address is Required"),
    phone: Yup.string()
      .required("Phone Number is Required")
      .matches(
        /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm,
        "Phone number is not valid"
      ),
  });

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const { errors } = formState;

  const submitForm = (values) => {
    dispatch(createNextofKinAsync(values))
      .unwrap()
      .then((res) => {
        if (res?.status === true) {
          toast(res?.message);
          // setActiveTab("Employer");
          reset();
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.message);
      });
    // console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <p className="text-blueTwo uppercase font-medium text-2xl text-center">
        Next of Kin Details
      </p>

      <div className="mt-4">
        <SavingsInput
          placeholder="Ayode Olabajo Adeniyi"
          label="Full Name"
          register={register("name")}
          error={errors?.name?.message}
          readOnly={nextOfKinStatus ? true : false}
        />
      </div>

      <div className="mt-4">
        <SavingsInput
          placeholder="08115507351"
          label="Phone Number"
          register={register("phone")}
          error={errors?.phone?.message}
          readOnly={nextOfKinStatus ? true : false}
        />
      </div>

      <div className="mt-4">
        <SavingsInput
          placeholder="info@capival.com"
          label="Email"
          register={register("email")}
          error={errors?.email?.message}
          readOnly={nextOfKinStatus ? true : false}
        />
      </div>

      <div className="mt-4">
        <SavingsInput
          placeholder="16 Chief Albert Iyorah street,
          off Admiralty Way,
          Lekki Phase 1,
          Lagos state."
          label="Address"
          register={register("address")}
          error={errors?.address?.message}
          readOnly={nextOfKinStatus ? true : false}
        />
      </div>

      <div className="mt-4">
        <SavingsInput
          placeholder="Brother"
          label="Relationship"
          register={register("relationship")}
          error={errors?.relationship?.message}
          readOnly={nextOfKinStatus ? true : false}
        />
      </div>

      <div className="w-full mt-10 md:w-[70%] m-auto">
        <Button
          buttonText="Next"
          className="rounded-xl mb-10"
          size="lg"
          isLoading={createNextofKinLoading}
        />
      </div>
    </form>
  );
};

export { NextofKin };

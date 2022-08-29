import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Select from "react-select";

import { Button, SavingsInput } from "../../atoms";
import { useDispatch, useSelector } from "react-redux";
import { createNextofKinAsync } from "../../slices/accounts";
import { toast } from "react-toastify";
import { getAllBanksAsync } from "../../slices/utils";
import { colourStyles } from "../../utils/HelperFunctions";
import { validateAccountAsync } from "../../slices/transactionHistory";

const BankDetails = ({ setActiveTab }) => {
  const dispatch = useDispatch();
  const { createNextofKinLoading } = useSelector((state) => state?.accounts);
  const { validateAccountLoading } = useSelector(
    (state) => state.transactionHistory
  );
  const { allBanks, getAllBanksLoading } = useSelector((state) => state?.utils);

  const [error, setError] = useState("");
  const [validatedAccountDetails, setValidatedAccountDetails] = useState("");

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

  const { register, handleSubmit, formState, reset, control, watch } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const { errors } = formState;

  const watchFields = watch(["account_no"]);

  //   console.log(validatedAccountDetails);

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted && watchFields[0]?.length === 10) {
        // Run Function
        dispatch(validateAccountAsync(watchFields[0]))
          .unwrap()
          .then((res) => {
            if (res?.status === true) {
              console.log(res);
              setValidatedAccountDetails(res?.data);
              setValidatedAccountDetails("");
            }
          })
          .catch((err) => {
            console.log(err?.message);
            setError(err?.message);
          });
      }
    })();
    return () => {
      mounted = false;
    };
  }, [watchFields[0]]);

  const submitForm = (values) => {
    // dispatch(createNextofKinAsync(values))
    //   .unwrap()
    //   .then((res) => {
    //     if (res?.status === true) {
    //       // console.log(res?.status);
    //       toast(res?.message);
    //       setActiveTab("Employer");
    //       reset();
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     toast.error(err?.message);
    //   });
  };

  useEffect(() => {
    dispatch(getAllBanksAsync());
  }, []);

  useEffect(() => {
    const defaultValues = {
      account_name: validatedAccountDetails?.account_name || "",
    };
    reset(defaultValues);
  }, [validatedAccountDetails, reset]);

  const allBanksData =
    allBanks &&
    allBanks?.map((bank) => {
      return {
        value: bank?.sortcode,
        label: bank?.bank,
      };
    });

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <p className="text-blueTwo uppercase font-medium text-2xl text-center">
        Bank Details
      </p>
      <p className="text-blueTwo pt-3 font-medium text-xl text-center">
        Alternative Bank Account for Disbursement
      </p>

      <div className="">
        <Controller
          control={control}
          name="disbursement_bank_code"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <div>
              <label className="text-sm font-normal text-blueTwo">
                Bank Name
              </label>
              <Select
                onBlur={onBlur}
                //   onChange={geSelectedBank}
                checked={value}
                inputRef={ref}
                options={allBanksData}
                placeholder="Access Bank"
                styles={colourStyles}
                isLoading={getAllBanksLoading}
              />
            </div>
          )}
        />
      </div>

      <div className="mt-4">
        <SavingsInput
          placeholder="0009251795"
          label="Account Number"
          register={register("account_no")}
          error={errors?.account_no?.message}
        />
      </div>

      <div className="mt-4">
        <SavingsInput
          placeholder="Ayobami Olagoke Okeseeyin"
          label="Account Name"
          readOnly
          register={register("account_name")}
          error={errors?.account_name?.message}
        />
        {validateAccountLoading && (
          <div>
            <p className="text-sm text-red-200 font-medium">Validating...</p>
            <p className="text-sm text-red-200 font-medium">{error}</p>
          </div>
        )}
      </div>

      <div className="mt-4">
        <SavingsInput
          placeholder="Savings"
          label="Account Type"
          register={register("bank_account_type")}
          error={errors?.bank_account_type?.message}
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

export { BankDetails };

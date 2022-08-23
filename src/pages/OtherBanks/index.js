import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

import { Button, SavingsInput, UserAvatar } from "../../atoms";
import WalletDetailsHeader from "../Wallet/WalletDetailsHeader";
import { getAllBanksAsync } from "../../slices/utils";
import { otherBankTransferAsync } from "../../slices/transactionHistory";

const OtherBanksTransfer = () => {
  const dispatch = useDispatch();
  const nagivate = useNavigate();

  const [selectedBank, setSelectedBank] = useState("");

  const { allBanks } = useSelector((state) => state?.utils);
  const { otherBankTransferLoading } = useSelector(
    (state) => state?.transactionHistory
  );

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "rgba(59, 88, 168, 0.2)",
      borderRadius: "20px",
      minHeight: 49,
      border: "1px solid rgba(59, 88, 168, 0.5)",
      paddingLeft: "10px",
      color: "#3B58A8",
    }),
    placeholder: (styles) => ({
      ...styles,
      color: "#8EA8DD",
      fontSize: "14px",
    }),
  };
  const validationSchema = Yup.object().shape({
    destination_account_no: Yup.string()
      .required("Destination Account is required")
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Must be exactly 10 digits")
      .max(10, "Must be exactly 10 digits"),
    amount: Yup.string()
      .required()
      .matches(/^[0-9]+$/, "Must be only digits"),
    destination_account_name: Yup.string().required(
      "Beneficiary Name is required"
    ),
    pin: Yup.string()
      .required("Transaction Pin is required")
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(4, "Must be exactly 4 digits")
      .max(4, "Must be exactly 4 digits"),
  });

  const { register, handleSubmit, formState, reset, control } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { errors } = formState;

  console.log(errors);

  const allBanksData =
    allBanks &&
    allBanks?.map((bank) => {
      return {
        value: bank?.sortcode,
        label: bank?.bank,
      };
    });

  const geSelectedBank = (value) => {
    setSelectedBank(value?.value);
  };

  useEffect(() => {
    dispatch(getAllBanksAsync());
  }, []);

  const submitForm = (values) => {
    // console.log(values?.values?.destination_bank);
    const variables = {
      destination_bank: selectedBank,
      destination_account_no: values?.destination_account_no,
      destination_account_name: values?.destination_account_name,
      amount: values?.amount,
      narration: values?.narration,
      pin: values?.pin,
    };

    // console.log("here", variables);

    dispatch(otherBankTransferAsync(variables))
      .unwrap()
      .then((res) => {
        if (res?.status === true) {
          console.log(res);
          toast(res.message);
          reset();
          nagivate("/dashboard/capival-transfers/receipt", {
            state: {
              transferDetails: res?.data,
            },
          });
        }
      })
      .catch((err) => {
        console.log(err);
        // reset();
        toast.error(err?.message);
      });
  };

  return (
    <div className="mt-8">
      <WalletDetailsHeader />

      <main className="mt-10 px-8">
        <p className="font-medium text-blueTwo text-base uppercase">
          Recent Beneficaries
        </p>

        <div className="pt-4 flex items-center px-20">
          <UserAvatar initials="ao" userName="Akinwale Olawale" />
          <UserAvatar initials="ao" userName="Akinwale Olawale" />
          <UserAvatar initials="ao" userName="Akinwale Olawale" />
          <UserAvatar initials="ao" userName="Akinwale Olawale" />
          <UserAvatar initials="ao" userName="Akinwale Olawale" />
          <UserAvatar initials="ao" userName="Akinwale Olawale" />
        </div>

        <p className="font-medium text-blueTwo text-base uppercase py-5">
          Other Bank Transfer
        </p>

        <form
          onSubmit={handleSubmit(submitForm)}
          className="grid grid-cols-2 gap-10 px-20"
        >
          <div className="">
            <Controller
              control={control}
              name="values?.destination_bank"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <div>
                  <label className="text-sm font-normal text-blueTwo">
                    Select Bank
                  </label>
                  <Select
                    onBlur={onBlur}
                    onChange={geSelectedBank}
                    checked={value}
                    inputRef={ref}
                    options={allBanksData}
                    placeholder="Access Bank"
                    styles={colourStyles}
                  />
                </div>
              )}
            />
          </div>

          <div>
            <SavingsInput
              placeholder="Beneficiary Account Number"
              register={register("destination_account_no")}
              error={errors?.destination_account_no?.message}
              label="Beneficiary Account Number"
            />
          </div>
          <div>
            <SavingsInput
              placeholder="Beneficiary Account Name"
              register={register("destination_account_name")}
              error={errors?.destination_account_name?.message}
              label="Beneficiary Account Name"
            />
          </div>
          <div>
            <SavingsInput
              placeholder="Amount"
              register={register("amount")}
              error={errors?.amount?.message}
              label="Amount"
            />
          </div>
          <div>
            <SavingsInput
              placeholder="Narration"
              register={register("narration")}
              error={errors?.narration?.message}
              label="Narration"
            />
          </div>
          <div>
            <SavingsInput
              placeholder="PIN"
              register={register("pin")}
              error={errors?.pin?.message}
              label="pin"
            />
          </div>

          <div className="w-[30%] mt-6 justify-self-center col-span-2">
            <Button
              buttonText="Continue"
              className="rounded-xl"
              size="lg"
              isLoading={otherBankTransferLoading}
            />
          </div>
        </form>
      </main>
    </div>
  );
};

export { OtherBanksTransfer };

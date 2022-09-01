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
import {
  otherBankTransferAsync,
  getExternalBeneficiariesAsync,
  validateInterAccountAsync,
} from "../../slices/transactionHistory";
import { colourStyles } from "../../utils/HelperFunctions";
import ModalPopup from "../../components/ModalPopup";
import { PinModal } from "./PinModal";

const OtherBanksTransfer = () => {
  const dispatch = useDispatch();
  const nagivate = useNavigate();

  const [selectedBank, setSelectedBank] = useState();
  const [selectedBeneficiary, setSelectedBeneficiary] = useState();
  const [showTransactionPinModal, setShowTransactionPinModal] = useState(false);

  const toggleTransactionPinModal = () => {
    setShowTransactionPinModal(!showTransactionPinModal);
  };

  const { allBanks } = useSelector((state) => state?.utils);
  const {
    otherBankTransferLoading,
    validateInterAccountLoading,
    isInterAccountValidated,
    // getExternalBeneficiaries,
  } = useSelector((state) => state?.transactionHistory);

  const getExternalBeneficiaries = [
    {
      id: 1,
      user_id: 2,
      beneficiary_account: "1234567890",
      account_name: "Ajani Chukwudi Musa",
      bank_name: "GT Bank",
      bank_code: "000013",
      deleted_at: null,
      created_at: "2022-08-26T14:58:58.000000Z",
      updated_at: "2022-08-26T14:58:58.000000Z",
    },
    {
      id: 1,
      user_id: 2,
      beneficiary_account: "1234567890",
      account_name: "Ajani Chukwudi",
      bank_name: "GT Bank",
      bank_code: "000013",
      deleted_at: null,
      created_at: "2022-08-26T14:58:58.000000Z",
      updated_at: "2022-08-26T14:58:58.000000Z",
    },
  ];

  const validationSchema = Yup.object().shape({
    destination_account_no: Yup.string()
      .required("Destination Account is required")
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Must be exactly 10 digits")
      .max(10, "Must be exactly 10 digits"),
    amount: Yup.string()
      .required()
      .matches(/^[0-9]+$/, "Must be only digits"),
    // pin: Yup.string()
    //   .required("Transaction Pin is required")
    //   .matches(/^[0-9]+$/, "Must be only digits")
    //   .min(4, "Must be exactly 4 digits")
    //   .max(4, "Must be exactly 4 digits"),
  });

  const { register, handleSubmit, formState, reset, control } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      destination_account_name:
        isInterAccountValidated?.AccountName ??
        selectedBeneficiary?.account_name,
      destination_account_no: selectedBeneficiary?.beneficiary_account,
      destination_bank: selectedBeneficiary?.bank_code,
    },
  });
  const { errors } = formState;

  const getSelectedBeneficiary = (item) => {
    setSelectedBeneficiary(item);
  };

  const allBanksData =
    allBanks &&
    allBanks?.map((bank) => {
      return {
        value: bank?.sortcode,
        label: bank?.bank,
      };
    });

  const geSelectedBank = (value) => {
    setSelectedBank(value);
  };

  useEffect(() => {
    dispatch(getAllBanksAsync());
  }, []);

  const handleValidateAccount = async (e) => {
    if (e.target.value.length === 10) {
      const variables = {
        account_no: e.target.value,
        bank_code: selectedBank?.value,
      };

      console.log("e reach 10", variables);
      await dispatch(validateInterAccountAsync(variables))
        .unwrap()
        .then((res) => {
          if (res?.status) {
            toast(res?.message);
            // reset();
          }
        })
        .catch((err) => {
          toast.error(err?.message);
          // reset();
        });
    }
  };

  const submitForm = (values) => {
    const variables = {
      destination_bank: selectedBank,
      destination_account_no: values?.destination_account_no,
      destination_account_name: values?.destination_account_name,
      amount: values?.amount,
      narration: values?.narration,
    };

    console.log(values);
    setShowTransactionPinModal(true);

    // dispatch(otherBankTransferAsync(variables))
    //   .unwrap()
    //   .then((res) => {
    //     if (res?.status === true) {
    //       console.log(res);
    //       toast(res.message);
    //       reset();
    //       nagivate("/dashboard/capival-transfers/receipt", {
    //         state: {
    //           transferDetails: res?.data,
    //         },
    //       });
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     // reset();
    //     toast.error(err?.message);
    //   });
  };

  useEffect(() => {
    const defaultValues = {
      destination_account_name:
        isInterAccountValidated?.AccountName ??
        selectedBeneficiary?.account_name,
      destination_account_no: selectedBeneficiary?.beneficiary_account,
      destination_bank: selectedBeneficiary?.bank_code,
    };
    reset(defaultValues);
  }, [isInterAccountValidated, selectedBeneficiary, reset]);

  useEffect(() => {
    dispatch(getExternalBeneficiariesAsync());
  }, []);

  return (
    <div className="mt-8">
      <WalletDetailsHeader />

      <main className="mt-10 px-8">
        <div className="flex items-center justify-between">
          <p className="pl-4 md:pl-0 pt-4 md:pt-0 font-medium text-blueTwo text-base uppercase">
            Recent Beneficaries
          </p>
          {getExternalBeneficiaries?.length > 0 && (
            <p className="pl-4 md:pl-0 pt-4 md:pt-0 font-medium text-blueTwo text-base uppercase cursor-pointer">
              See All
            </p>
          )}
        </div>

        {/* getExternalBeneficiaries */}

        {getExternalBeneficiaries?.length === 0 ? (
          <p className="text-center my-10 text-blueTwo text-xl">
            No Recent Beneficiaries
          </p>
        ) : (
          <div className="pt-4 grid grid-cols-2 place-items-center md:place-items-start md:grid-cols-4 lg:grid-cols-6 px-2 md:px-20">
            {getExternalBeneficiaries?.map((item) => {
              return (
                <UserAvatar
                  initials="FL"
                  userName={item?.account_name}
                  onClick={() => getSelectedBeneficiary(item)}
                />
              );
            })}
          </div>
        )}

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
              name="destination_bank"
              defaultValue=""
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
              register={register("destination_account_no", {
                onChange: (e) => handleValidateAccount(e),
              })}
              error={errors?.destination_account_no?.message}
              label="Beneficiary Account Number"
              onInput={handleSubmit((data) => null)}
            />
          </div>

          <div>
            <SavingsInput
              placeholder="Beneficiary Account Name"
              register={register("destination_account_name")}
              error={errors?.destination_account_name?.message}
              label="Beneficiary Account Name"
              readOnly
            />
            {validateInterAccountLoading && (
              <span className="text-sm text-red-500 font-medium">
                Validating...
              </span>
            )}
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

          <div className="w-[30%] mt-6 justify-self-center col-span-2">
            <Button
              buttonText="Continue"
              className="rounded-xl"
              size="lg"
              isLoading={otherBankTransferLoading}
            />
          </div>
        </form>

        <ModalPopup
          modalHeight="250px"
          modalWidth="300px"
          children={
            <PinModal
              toggleTransactionPinModal={toggleTransactionPinModal}
              // formValues={formValues}
            />
          }
          isOpen={showTransactionPinModal}
        />
      </main>
    </div>
  );
};

export { OtherBanksTransfer };

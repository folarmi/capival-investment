import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import CurrencyFormat from "react-currency-format";

import { Button, SavingsInput, UserAvatar } from "../../atoms";
import WalletDetailsHeader from "../Wallet/WalletDetailsHeader";
import { getAllBanksAsync } from "../../slices/utils";
import {
  getExternalBeneficiariesAsync,
  validateInterAccountAsync,
} from "../../slices/transactionHistory";
import { colourStyles } from "../../utils/HelperFunctions";
import ModalPopup from "../../components/ModalPopup";
import { PinModal } from "./PinModal";

const OtherBanksTransfer = () => {
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState("");
  const [bankName, setBankName] = useState("");
  const [saveAsBeneficiary, setSaveAsBeneficiary] = useState(false);
  const [selectedBeneficiary, setSelectedBeneficiary] = useState();
  const [showTransactionPinModal, setShowTransactionPinModal] = useState(false);

  const toggleTransactionPinModal = () => {
    setShowTransactionPinModal(!showTransactionPinModal);
  };

  const toggleSwitch = () => {
    setSaveAsBeneficiary(() => !saveAsBeneficiary);
  };

  const { allBanks, getAllBanksLoading } = useSelector((state) => state?.utils);
  const {
    validateInterAccountLoading,
    isInterAccountValidated,
    getExternalBeneficiaries,
  } = useSelector((state) => state?.transactionHistory);

  const validationSchema = Yup.object().shape({
    destination_account_no: Yup.string()
      .required("Destination Account is required")
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Must be exactly 10 digits")
      .max(10, "Must be exactly 10 digits"),
    amount: Yup.string().required(),
    narration: Yup.string().matches(
      /^[aA-zZ\s]+$/,
      "Only alphabets are allowed for this field "
    ),
  });

  const {
    register,
    handleSubmit,
    formState,
    reset,
    control,
    setValue,
    getValues,
  } = useForm({
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
    setValue("destination_bank", item?.bank_code);
    // setValue("destination_account_no", item?.beneficiary_account);
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

  useEffect(() => {
    dispatch(getAllBanksAsync());
  }, []);

  const handleValidateAccount = async (e) => {
    if (e.target.value.length === 10) {
      const variables = {
        account_no: e.target.value,
        bank_code: getValues("destination_bank"),
      };
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
          reset();
        });
    }
  };

  const submitForm = (values) => {
    let formattedAmount = values?.amount.slice(1);

    const variables = {
      destination_bank: values?.destination_bank.value,
      destination_account_no: values?.destination_account_no,
      destination_account_name: values?.destination_account_name,
      amount: formattedAmount,
      narration: values?.narration,
      saveBeneficiary: saveAsBeneficiary,
    };

    setFormValues(variables);
    setBankName(values?.destination_bank.label);
    setShowTransactionPinModal(true);
  };

  useEffect(() => {
    setValue(
      "destination_account_name",
      isInterAccountValidated?.AccountName ?? selectedBeneficiary?.account_name
    );
    // beneficiary_account
    setValue(
      "destination_account_no",
      isInterAccountValidated?.AccountNo ??
        selectedBeneficiary?.beneficiary_account
    );
  }, [isInterAccountValidated, selectedBeneficiary]);

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
          className="md:grid md:grid-cols-2 gap-10 md:px-20"
        >
          <div className="">
            <Controller
              control={control}
              name="destination_bank"
              // defaultValue=""
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <div>
                  <label className="text-sm font-normal text-blueTwo">
                    Select Bank
                  </label>
                  <Select
                    onBlur={onBlur}
                    value={allBanksData.find((c) => c.value === value)}
                    onChange={(val) => {
                      onChange(val);
                    }}
                    checked={value}
                    isLoading={getAllBanksLoading}
                    inputRef={ref}
                    options={allBanksData}
                    placeholder="Access Bank"
                    styles={colourStyles}
                  />
                </div>
              )}
            />
          </div>

          <div className="mt-5 md:mt-0">
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

          <div className="mt-5 md:mt-0">
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

          <div className="mt-5 md:mt-0 mb-8 md:mb-0">
            <>
              {" "}
              <label
                htmlFor="amount"
                className={`text-sm font-normal text-blueTwo`}
              >
                Amount
              </label>
              <div className="border border-blueTwo/50 rounded-[20px] w-full py-3.5 placeholder-blueThree text-sm pl-[10px] text-blueTwo bg-blueTwo/20">
                <Controller
                  control={control}
                  name="amount"
                  defaultValue=""
                  placeholder="Amount"
                  render={({ field: { onChange, ref, name, value } }) => (
                    <div className="placeholder:text-blueTwo">
                      <CurrencyFormat
                        style={{
                          backgroundColor: "3B58A8",
                        }}
                        displayType={"input"}
                        thousandSeparator={true}
                        placeholder="₦0.0"
                        name={name}
                        value={value}
                        prefix={"₦"}
                        onChange={onChange}
                      />
                    </div>
                  )}
                />
              </div>
            </>
            {errors.amount && (
              <span className="text-red-500 text-xs">
                {errors?.amount?.message}
              </span>
            )}
          </div>

          <div>
            <SavingsInput
              placeholder="Narration"
              register={register("narration")}
              error={errors?.narration?.message}
              label="Narration"
            />
          </div>

          <div className="mt-4 md:mt-0 flex items-center justify-center col-span-2">
            <label
              for="default-toggle"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input
                type="checkbox"
                value={saveAsBeneficiary}
                id="default-toggle"
                className="sr-only peer"
                onChange={toggleSwitch}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-black/60 dark:text-gray-300">
                Save as beneficiary
              </span>
            </label>
          </div>

          <div className="lg:w-[30%] mt-6 justify-self-center col-span-2">
            <Button
              buttonText="Continue"
              className="rounded-xl mb-8"
              size="lg"
            />
          </div>
        </form>

        <ModalPopup
          modalHeight="250px"
          modalWidth="300px"
          children={
            <PinModal
              toggleTransactionPinModal={toggleTransactionPinModal}
              formValues={formValues}
              bankName={bankName}
            />
          }
          isOpen={showTransactionPinModal}
        />
      </main>
    </div>
  );
};

export { OtherBanksTransfer };

import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CurrencyFormat from "react-currency-format";

import { Button, SavingsInput, UserAvatar } from "../../atoms";
import WalletDetailsHeader from "../Wallet/WalletDetailsHeader";
import ModalPopup from "../../components/ModalPopup";
import { PinModal } from "./PinModal";
import { useDispatch, useSelector } from "react-redux";
import {
  getInternalBeneficiariesAsync,
  validateAccountAsync,
} from "../../slices/transactionHistory";
import { toast } from "react-toastify";

const CapivalTransfer = () => {
  const dispatch = useDispatch();
  const {
    validateAccountLoading,
    isAccountValidated,
    getInternalBeneficiaries,
  } = useSelector((state) => state.transactionHistory);

  const [showTransactionPinModal, setShowTransactionPinModal] = useState(false);
  const [formValues, setFormValues] = useState("");
  const [selectedBeneficiary, setSelectedBeneficiary] = useState();
  const [saveAsBeneficiary, setSaveAsBeneficiary] = useState(false);

  const toggleTransactionPinModal = () => {
    setShowTransactionPinModal(!showTransactionPinModal);
  };

  const toggleSwitch = () => {
    setSaveAsBeneficiary(() => !saveAsBeneficiary);
  };

  const validationSchema = Yup.object().shape({
    destination_account: Yup.string()
      .required("Destination Account is required")
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Must be exactly 10 digits")
      .max(10, "Must be exactly 10 digits"),
    amount: Yup.string().required("Amount is required"),
    narration: Yup.string().matches(
      /^[0-9a-zA-Z]*$/,
      "Only alphabets are allowed for this field "
    ),
  });

  const { register, handleSubmit, formState, reset, control } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      account_name: isAccountValidated?.account_name,
      destination_account: selectedBeneficiary?.beneficiary_account,
    },
  });
  const { errors } = formState;

  const getSelectedBeneficiary = (item) => {
    setSelectedBeneficiary(item);
  };

  const handleValidateAccount = async (e) => {
    if (e.target.value.length === 10) {
      await dispatch(validateAccountAsync(e.target.value))
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

  // useEffect(() => {
  //   let mounted = false;
  //   (async () => {
  //     mounted = true;
  //     if (mounted && watchFields[0]?.length === 10) {
  //       // Run Function
  //       // dispatch(validateAccountAsync(watchFields[0]));
  //       dispatch(validateAccountAsync(watchFields[0]))
  //         .unwrap()
  //         .then((res) => {
  //           if (res?.status) {
  //             toast(res?.message);
  //             // reset();
  //           }
  //         })
  //         .catch((err) => {
  //           toast.error(err?.message);
  //           // reset();
  //         });
  //     }
  //   })();
  //   return () => {
  //     mounted = false;
  //   };
  // }, [watchFields[0]]);

  const submitForm = (values) => {
    let formattedAmount = values?.amount.slice(1);

    const variables = {
      account_name: values?.account_name,
      destination_account: values?.destination_account,
      narration: values?.narration,
      amount: formattedAmount,
      saveBeneficiary: saveAsBeneficiary,
    };
    setFormValues(variables);
    setShowTransactionPinModal(true);
    // reset();
  };

  useEffect(() => {
    const defaultValues = {
      account_name:
        isAccountValidated?.account_name ?? selectedBeneficiary?.account_name,
      destination_account: selectedBeneficiary?.beneficiary_account,
    };
    reset(defaultValues);
  }, [isAccountValidated, reset, selectedBeneficiary]);

  useEffect(() => {
    dispatch(getInternalBeneficiariesAsync());
  }, []);

  return (
    <div className="md:mt-8">
      <WalletDetailsHeader />

      <main className="md:mt-10 px-0 md:px-8">
        <div className="flex items-center justify-between">
          <p className="pl-4 md:pl-0 pt-4 md:pt-0 font-medium text-blueTwo text-base uppercase">
            Recent Beneficaries
          </p>
          {getInternalBeneficiaries?.length > 0 && (
            <p className="pl-4 md:pl-0 pt-4 md:pt-0 font-medium text-blueTwo text-base uppercase cursor-pointer">
              See All
            </p>
          )}
        </div>

        {getInternalBeneficiaries?.length === 0 ? (
          <p className="text-center my-10 text-blueTwo text-xl">
            No Recent Beneficiaries
          </p>
        ) : (
          <div className="pt-4 grid grid-cols-2 place-items-center md:place-items-start md:grid-cols-4 lg:grid-cols-6 px-2 md:px-20">
            {getInternalBeneficiaries?.map((item) => {
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

        <p className="font-medium text-blueTwo text-base uppercase pl-4 md:pl-0 py-5">
          Capival Transfer
        </p>

        <form
          onSubmit={handleSubmit(submitForm)}
          className="md:grid md:grid-cols-2 gap-10 px-4 md:px-20"
        >
          <div className="mb-8 md:mb-0">
            <SavingsInput
              placeholder="Beneficiary Account Number"
              register={register("destination_account", {
                onChange: (e) => handleValidateAccount(e),
              })}
              label="Account Number"
              onInput={handleSubmit((data) => null)}
              error={errors?.destination_account?.message}
              // onChange={(e) => validateAccountNumber(e.target.value)}
            />
          </div>
          <div className="mb-8 md:mb-0">
            <SavingsInput
              placeholder="Beneficiary Account Name"
              label="Account Name"
              readOnly
              register={register("account_name")}
              error={errors?.account_name?.message}
            />
            {validateAccountLoading && (
              <span className="text-sm text-red-500 font-medium">
                Validating...
              </span>
            )}
          </div>

          <div className="mb-8 md:mb-0">
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
              label="Narration"
              register={register("narration")}
              error={errors?.narration?.message}
            />
          </div>

          <div className="mt-4 lg:mt-0 flex items-center justify-center col-span-2">
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

          <div className="w-[100%] md:w-[30%] mt-6 md:mb-0 justify-self-center col-span-2">
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
            />
          }
          isOpen={showTransactionPinModal}
        />
      </main>
    </div>
  );
};

export default CapivalTransfer;

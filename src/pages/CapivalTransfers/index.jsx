import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, SavingsInput, UserAvatar } from "../../atoms";
import WalletDetailsHeader from "../Wallet/WalletDetailsHeader";

import ModalPopup from "../../components/ModalPopup";
import { PinModal } from "./PinModal";
import { useDispatch, useSelector } from "react-redux";
import { validateAccountAsync } from "../../slices/transactionHistory";

const CapivalTransfer = () => {
  const dispatch = useDispatch();
  const { validateAccountLoading, isAccountValidated } = useSelector(
    (state) => state.transactionHistory
  );

  const [showTransactionPinModal, setShowTransactionPinModal] = useState(false);
  const [formValues, setFormValues] = useState("");

  const toggleTransactionPinModal = () => {
    setShowTransactionPinModal(!showTransactionPinModal);
  };

  const validationSchema = Yup.object().shape({
    destination_account: Yup.string()
      .required("Destination Account is required")
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Must be exactly 10 digits")
      .max(10, "Must be exactly 10 digits"),
    amount: Yup.string()
      .required()
      .matches(/^[0-9]+$/, "Must be only digits"),
  });

  const { register, handleSubmit, formState, reset, watch } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      account_name: isAccountValidated?.account_name,
    },
  });
  const { errors } = formState;

  const watchFields = watch(["destination_account"]);

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted && watchFields[0]?.length === 10) {
        // Run Function
        dispatch(validateAccountAsync(watchFields[0]));
      }
    })();
    return () => {
      mounted = false;
    };
  }, [watchFields[0]]);

  const submitForm = (values) => {
    dispatch(validateAccountAsync(values?.destination_account));
    // toggleTransactionPinModal();
    setFormValues(values);
  };

  useEffect(() => {
    const defaultValues = {
      account_name: isAccountValidated?.account_name,
    };
    reset(defaultValues);
  }, [isAccountValidated, reset]);

  return (
    <div className="md:mt-8">
      <WalletDetailsHeader />

      <main className="md:mt-10 px-0 md:px-8">
        <p className="pl-4 md:pl-0 pt-4 md:pt-0 font-medium text-blueTwo text-base uppercase">
          Recent Beneficaries
        </p>

        <div className="pt-4 grid grid-cols-2 place-items-center md:place-items-start md:grid-cols-4 lg:grid-cols-6 px-2 md:px-20">
          <UserAvatar initials="ao" userName="Akinwale Olawale" />
          <UserAvatar initials="ao" userName="Akinwale Olawale" />
          <UserAvatar initials="ao" userName="Akinwale Olawale" />
          <UserAvatar initials="ao" userName="Akinwale Olawale" />
          <UserAvatar initials="ao" userName="Akinwale Olawale" />
          <UserAvatar initials="ao" userName="Akinwale Olawale" />
        </div>

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
              register={register("destination_account")}
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
              <p className="text-sm text-red-200 font-medium">Validating...</p>
            )}
          </div>
          <div className="mb-8 md:mb-0">
            <SavingsInput
              placeholder="Amount"
              label="Amount"
              register={register("amount")}
              error={errors?.amount?.message}
            />
          </div>
          <div>
            <SavingsInput
              placeholder="Narration"
              label="Narration"
              register={register("narration")}
              error={errors?.narration?.message}
            />
          </div>

          <div className="w-[100%] md:w-[30%] mt-6 md:mb-0 justify-self-center col-span-2">
            <Button buttonText="Continue" className="rounded-xl" size="lg" />
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

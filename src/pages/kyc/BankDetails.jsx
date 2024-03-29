import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import Select from "react-select";

import { Button, SavingsInput } from "../../atoms";
import { useDispatch, useSelector } from "react-redux";
import { addBankAccountAsync } from "../../slices/auth";
import { toast } from "react-toastify";
import { getAllBanksAsync } from "../../slices/utils";
import { colourStyles } from "../../utils/HelperFunctions";
import { validateInterAccountAsync } from "../../slices/transactionHistory";

const BankDetails = ({ setActiveTab, bankDetailsStatus }) => {
  const dispatch = useDispatch();
  const { validateInterAccountLoading, isInterAccountValidated } = useSelector(
    (state) => state.transactionHistory
  );
  const { allBanks } = useSelector((state) => state?.utils);
  const { addBankAccountLoading } = useSelector((state) => state?.auth?.login);

  const [selectedbank, setSelectedbank] = useState("");
  const [error, setError] = useState("");

  const getSelectedBank = (item) => {
    setSelectedbank(item?.value);
  };

  const validationSchema = Yup.object().shape({
    account_no: Yup.string().required("Account Number is Required"),
    bank_account_type: Yup.string().required("Account Type is Required"),
    // bank_code: Yup.string().required("You must select a bank"),
  });

  const { register, handleSubmit, formState, reset, control, getValues } =
    useForm({
      // resolver: yupResolver(validationSchema),
      defaultValues: {
        account_name: isInterAccountValidated?.AccountName,
      },
    });

  const { errors } = formState;

  const submitForm = (values) => {
    console.log(values);
    if (selectedbank === undefined) {
      setError("Bank Name is Required");
    } else {
      setError("");
    }

    const variables = {
      bank_code: selectedbank,
      bank_account_type: values?.bank_account_type,
      account_name: values?.account_name,
      account_no: values?.account_no,
    };
    dispatch(addBankAccountAsync(variables))
      .unwrap()
      .then((res) => {
        if (res?.status === true) {
          // console.log(res?.status);
          toast(res?.message);
          setActiveTab("Documents");
          reset();
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.message);
      });
  };

  const handleValidateAccount = async (e) => {
    if (e.target.value.length === 10) {
      const variables = {
        account_no: e.target.value,
        bank_code: selectedbank,
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

  useEffect(() => {
    dispatch(getAllBanksAsync());
  }, []);

  useEffect(() => {
    const defaultValues = {
      account_name: isInterAccountValidated?.AccountName,
    };
    reset(defaultValues);
  }, [isInterAccountValidated, reset]);

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
        {/* <Controller
          control={control}
          name="bank_code"
          // defaultValue=""
          render={({ field: { onChange, value } }) => (
            <div>
              <label className="text-sm font-normal text-blueTwo">
                Select Bank
              </label>
              <Select
                value={allBanksData.find((c) => c.value === value)}
                onChange={(val) => onChange(val.value)}
                options={allBanksData}
                placeholder="Access Bank"
                styles={colourStyles}
              />
            </div>
          )}
        /> */}
        <Controller
          name="bank_code"
          control={control}
          render={({ field }) => (
            <Select
              isClearable
              placeholder="Access Bank"
              styles={colourStyles}
              value={selectedbank}
              {...field}
              options={allBanksData}
              onChange={getSelectedBank}
              isDisabled={bankDetailsStatus ? true : false}
            />
          )}
        />
        {error && <span className="text-red-500 text-xs">{error}</span>}
      </div>

      <div className="mt-4">
        <SavingsInput
          placeholder="0009251795"
          label="Account Number"
          register={register("account_no", {
            onChange: (e) => handleValidateAccount(e),
          })}
          error={errors?.account_no?.message}
          readOnly={bankDetailsStatus ? true : false}
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
        {validateInterAccountLoading && (
          <span className="text-sm text-red-500 font-medium">
            Validating...
          </span>
        )}
      </div>

      <div className="mt-4">
        <SavingsInput
          placeholder="Savings"
          label="Account Type"
          register={register("bank_account_type")}
          error={errors?.bank_account_type?.message}
          readOnly={bankDetailsStatus ? true : false}
        />
      </div>

      <div className="w-full mt-10 md:w-[70%] m-auto">
        <Button
          buttonText="Next"
          className="rounded-xl mb-10"
          size="lg"
          isLoading={addBankAccountLoading}
        />
      </div>
    </form>
  );
};

export { BankDetails };

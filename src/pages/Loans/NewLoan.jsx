import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
// import * as Yup from "yup";
import Select from "react-select";
// import { yupResolver } from "@hookform/resolvers/yup";

import { Button, SavingsInput } from "../../atoms";
import {
  getAllBanksAsync,
  getBankStatementAsync,
  getLoanTenureAsync,
  getLoanTypesAsync,
  getRepaymentChannelsAsync,
} from "../../slices/utils";
import { createLoanAsync } from "../../slices/loan";
import { toast } from "react-toastify";
import { colourStyles } from "../../utils/HelperFunctions";

const NewLoan = () => {
  const dispatch = useDispatch();
  const {
    loanTypes,
    loanTenure,
    repaymentChannels,
    bankStatementType,
    allBanks,
  } = useSelector((state) => state?.utils);

  const { createLoanIsLoading } = useSelector((state) => state?.loans);

  const [selectedLoanType, setSelectedLoanType] = useState("");
  const [tenure, setTenure] = useState("");
  const [selectedRepayMethod, setSelectedRepayMethod] = useState("");
  const [selectedStatementType, setSelectedStatementType] = useState("");
  const [selectedBank, setSelectedBank] = useState("");

  // const validationSchema = Yup.object().shape({
  //   loan_type_id: Yup.string().required("Loan enter a password"),
  // });

  const { register, handleSubmit, formState, reset } = useForm({
    // resolver: yupResolver(validationSchema),
  });
  const { errors } = formState;

  const submitForm = (values) => {
    const variables = {
      loan_type_id: selectedLoanType.toString(),
      loan_amount: values?.loan_amount,
      tenor: tenure,
      repayment_channel: selectedRepayMethod,
      statement_type: selectedStatementType,
      mbs_ticket_no: values?.mbs_ticket_no,
      mbs_ticket_password: values?.mbs_ticket_password,
      disbursement_account_no: values?.disbursement_account_no || "",
      disbursement_account_name: values?.disbursement_account_name || "",
      disbursement_bank_code: selectedBank,
    };

    dispatch(createLoanAsync(variables))
      .unwrap()
      .then((res) => {
        if (res?.status === true) {
          console.log(res?.status);
          toast(res?.message);
          reset();
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.message);
        reset();
      });
  };

  const [showDisbursement, setShowDisbursement] = useState(false);
  const [showMbs, setShowMbs] = useState(false);

  const { control } = useForm({
    // resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    dispatch(getLoanTypesAsync());
    dispatch(getLoanTenureAsync());
    dispatch(getRepaymentChannelsAsync());
    dispatch(getBankStatementAsync());
    dispatch(getAllBanksAsync());
  }, []);

  const loanTypesData =
    loanTypes &&
    loanTypes?.map((loanType) => {
      return {
        value: loanType?.id,
        label: loanType?.name,
        disburse: loanType?.flex_disbursement,
      };
    });

  const loanTenureData =
    loanTenure &&
    loanTenure?.map((month) => {
      return {
        value: month,
        label: month,
      };
    });

  const repaymentChannelData =
    repaymentChannels &&
    repaymentChannels?.map((channel) => {
      return {
        value: channel,
        label: channel,
      };
    });

  const bankStatementData =
    bankStatementType &&
    bankStatementType?.map((item) => {
      return {
        value: item?.code,
        label: item?.name,
      };
    });

  const allBanksData =
    allBanks &&
    allBanks?.map((bank) => {
      return {
        value: bank?.sortcode,
        label: bank?.bank,
      };
    });

  const getLoanType = (item) => {
    setSelectedLoanType(item?.value);
    if (item.disburse === 0) {
      setShowDisbursement(true);
    } else {
      setShowDisbursement(false);
    }
  };

  const geSelectedLoanTenure = (value) => {
    setTenure(value?.value);
  };

  const geSelectedRepayMethod = (value) => {
    setSelectedRepayMethod(value?.value);
  };

  const geSelectedBank = (value) => {
    setSelectedBank(value?.value);
  };

  const getStatementType = (item) => {
    setSelectedStatementType(item?.value);
    if (item.value === "mbs") {
      setShowMbs(true);
    } else {
      setShowMbs(false);
    }
  };

  return (
    <div className="mt-4 lg:mt-8">
      <p className="font-normal text-xl text-blueTwo text-center pb-2 uppercase">
        Loan Details
      </p>

      <form
        onSubmit={handleSubmit(submitForm)}
        className="rounded-xl m-auto w-[90%] md:w-[80%] lg:w-[50%]"
      >
        <div>
          <Controller
            control={control}
            name="loan"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <div>
                <label className="text-sm font-normal text-blueTwo">
                  Loan Type
                </label>
                <Select
                  onBlur={onBlur}
                  onChange={getLoanType}
                  checked={value}
                  inputRef={ref}
                  options={loanTypesData}
                  // isLoading={getStateLGALoading}
                  placeholder="Select Loan Type"
                  styles={colourStyles}
                />
              </div>
            )}
          />
        </div>

        <div className="mt-4">
          <SavingsInput
            placeholder="N0.0"
            label="Loan Amount"
            register={register("loan_amount")}
            error={errors?.loan_amount?.message}
          />
        </div>

        <div className="mt-4">
          <Controller
            control={control}
            name="tenor"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <div>
                <label className="text-sm font-normal text-blueTwo">
                  Tenure
                </label>
                <Select
                  onBlur={onBlur}
                  onChange={geSelectedLoanTenure}
                  checked={value}
                  inputRef={ref}
                  options={loanTenureData}
                  placeholder="O month(s)"
                  styles={colourStyles}
                />
              </div>
            )}
          />
        </div>

        <div className="mt-4">
          <Controller
            control={control}
            name="repayment_channel"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <div>
                <label className="text-sm font-normal text-blueTwo">
                  Select repayment method
                </label>
                <Select
                  onBlur={onBlur}
                  onChange={geSelectedRepayMethod}
                  checked={value}
                  inputRef={ref}
                  options={repaymentChannelData}
                  placeholder="Standard repayment"
                  styles={colourStyles}
                />
              </div>
            )}
          />
        </div>

        <div className="mt-4">
          <Controller
            control={control}
            name="statement_type"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <div>
                <label className="text-sm font-normal text-blueTwo">
                  Bank Statement type
                </label>
                <Select
                  onBlur={onBlur}
                  onChange={getStatementType}
                  checked={value}
                  inputRef={ref}
                  options={bankStatementData}
                  placeholder="My bank statement"
                  styles={colourStyles}
                />
              </div>
            )}
          />
        </div>

        {showMbs && (
          <>
            <div className="mt-4">
              <SavingsInput
                placeholder="01234-56"
                label="Ticket Id"
                register={register("mbs_ticket_no")}
                error={errors?.mbs_ticket_no?.message}
              />
            </div>

            <div className="mt-4">
              <SavingsInput
                placeholder="111111"
                label="Ticket Password"
                register={register("mbs_ticket_password")}
                error={errors?.mbs_ticket_password?.message}
              />
            </div>
          </>
        )}

        {showDisbursement && (
          <div className="mt-10">
            <p className="font-normal text-xl text-blueTwo text-center pb-6 uppercase">
              Disbursement Details
            </p>

            <div className="">
              <Controller
                control={control}
                name="disbursement_bank_code"
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

            <div className="mt-4">
              <SavingsInput
                placeholder="0123456789"
                label="Account Number"
                register={register("disbursement_account_no")}
                error={errors?.disbursement_account_no?.message}
              />
            </div>

            <div className="mt-4">
              <SavingsInput
                placeholder="Ayobami olagoke"
                label="Account Name"
                register={register("disbursement_account_name")}
                error={errors?.disbursement_account_name?.message}
              />
            </div>
          </div>
        )}

        <div className="w-full mt-10 md:w-[40%] m-auto">
          <Button
            buttonText="Apply Now"
            className="rounded-xl mb-10"
            size="lg"
            isLoading={createLoanIsLoading}
          />
        </div>
      </form>
    </div>
  );
};

export { NewLoan };

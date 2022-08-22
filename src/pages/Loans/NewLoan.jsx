import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import ReactSelect from "react-select";
import Select from "react-select";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, SavingsInput } from "../../atoms";
import {
  getAllBanksAsync,
  getBankStatementAsync,
  getLoanTenureAsync,
  getLoanTypesAsync,
  getRepaymentChannelsAsync,
} from "../../slices/utils";

const NewLoan = () => {
  const validationSchema = Yup.object().shape({
    loan_type_id: Yup.string().required("Loan enter a password"),
  });

  const { register, handleSubmit, formState } = useForm({
    // resolver: yupResolver(validationSchema),
  });
  const { errors } = formState;

  // const submitForm = (values) => {
  //   console.log(values);
  // };

  const dispatch = useDispatch();
  const {
    loanTypes,
    loanTenure,
    repaymentChannels,
    bankStatementType,
    allBanks,
  } = useSelector((state) => state?.utils);

  const [showDisbursement, setShowDisbursement] = useState(false);
  const [loanType, setType] = useState("");

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
    // console.log(item);
    if (item.disburse === 0) {
      setShowDisbursement(true);
    } else {
      setShowDisbursement(false);
    }
  };

  const onSubmit = (data) => {
    console.log("e reach here", data);
  };
  const audienceOptions = [
    { value: "Lésbicas", label: "Lésbicas" },
    { value: "Gays", label: "Gays" },
    { value: "Bissexuais", label: "Bissexuais" },
    { value: "Transexuais", label: "Transexuais" },
    { value: "Queer", label: "Queer" },
    { value: "Intersexo", label: "Intersexo" },
    { value: "Assexual", label: "Assexual" },
    { value: "Héteros", label: "Héteros" },
    { value: "Todxs", label: "Todxs" },
  ];

  // return (
  //   <div className="cad-form">
  //     <form onSubmit={handleSubmit(onSubmit)}>
  //       <div className="cad-tit-container">
  //         <span className="cad-titulo"> Edit Here</span>
  //       </div>

  //       <div className="cad-container">
  //         <label htmlFor="targetAudience">Audience</label>
  //         <Controller
  //           name="targetAudience"
  //           control={control}
  //           // defaultValue={[audienceOptions[0], audienceOptions[1]]}
  //           // rules={{ required: "Campo obrigatório", validate: isOnly3Values }}
  //           render={({ field: { onChange, value } }) => (
  //             <Select
  //               value={value}
  //               onChange={onChange}
  //               // isMulti
  //               placeholder="Select Itens"
  //               options={audienceOptions}
  //               className="basic-multi-select selectCustom"
  //               classNamePrefix="select"
  //             />
  //           )}
  //         />
  //         {errors?.targetAudience && <p>{errors.targetAudience.message}</p>}
  //       </div>

  //       <div className="btn-container">
  //         <div className="cad-btn">
  //           <button type="submit" className="btn waves-effect yellow darken-2">
  //             submit
  //           </button>
  //         </div>
  //       </div>
  //     </form>
  //   </div>
  // );
  return (
    <div className="mt-4 lg:mt-8">
      <p className="font-normal text-xl text-blueTwo text-center pb-2 uppercase">
        Loan Details
      </p>
      <form
        onSubmit={handleSubmit((data) =>
          console.log("form was submitted", data)
        )}
      >
        {/* <Controller
          control={control}
          name="itemType"
          register={register("loan_amount")}
          error={errors?.loan_amount?.message}
          render={({ field: { onChange, value, ref, name } }) => (
            <Select
              placeholder={"Item type"}
              options={loanTypesData}
              onChange={(val) => {
                onChange(val.value);
                getLoanType(val);
              }}
            />
          )}
        />
        {errors.item?.message && (
          <div class="validationText">{errors.item?.message}</div>
        )} */}

        <Controller
          name="targetAudience"
          control={control}
          // defaultValue={[audienceOptions[0], audienceOptions[1]]}
          // rules={{ required: "Campo obrigatório", validate: isOnly3Values }}
          render={({ field: { onChange, value } }) => (
            <Select
              value={value}
              onChange={onChange}
              // isMulti
              placeholder="Select Itens"
              options={loanTypesData}
              // className="basic-multi-select selectCustom"
              // classNamePrefix="select"
            />
          )}
        />

        <input type="submit" />
      </form>
      {/* <form
        onSubmit={handleSubmit(submitForm)}
        className="rounded-xl m-auto w-[90%] md:w-[80%] lg:w-[50%]"
      >
        <div>

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
                  onChange={onChange}
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
                  onChange={onChange}
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
                  onChange={onChange}
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
                      Select repayment method
                    </label>
                    <Select
                      onBlur={onBlur}
                      onChange={onChange}
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
          />
        </div>
      </form> */}
    </div>
  );
};

export { NewLoan };

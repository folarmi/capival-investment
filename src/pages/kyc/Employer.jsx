import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { toast } from "react-toastify";

import { Button, SavingsInput } from "../../atoms";
import { useDispatch, useSelector } from "react-redux";
import { employerInfoAsync } from "../../slices/accounts";
import { colourStyles } from "../../utils/HelperFunctions";
import { getAllEmployers } from "../../slices/utils";

const Employer = ({ setActiveTab }) => {
  const dispatch = useDispatch();
  const { createEmployerInfoLoading } = useSelector((state) => state?.accounts);
  const { employers, getAllEmployersLoading } = useSelector(
    (state) => state?.utils
  );

  const [employmentDate, setEmploymentDate] = useState(new Date());
  const [selectedCompany, setSelectedCompany] = useState("");

  const validationSchema = Yup.object().shape({
    official_email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Official Email is required"),
    employment_status: Yup.string().required("Employment Status is Required"),
    // employer_name: Yup.string().required("Employer Name is Required"),
    employer_address: Yup.string().required("Employment Address is Required"),
    staff_id_no: Yup.string().required("Staff ID is Required"),
    industry: Yup.string().required("Industry is Required"),
    monthly_income: Yup.string().required("Monthly Income is Required"),
  });

  const { register, handleSubmit, formState, control, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const { errors } = formState;

  const submitForm = (values) => {
    var newDateOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };

    const variables = {
      company_id: selectedCompany?.value,
      employment_status: values?.employment_status,
      staff_id_no: values?.staff_id_no,
      monthly_income: values?.monthly_income,
      monthly_income: values?.monthly_income,
      date_of_employment: employmentDate?.toLocaleString(
        "en-US",
        newDateOptions
      ),
      other_loan_repayment: values?.other_loan_repayment,
      official_email: values?.official_email,
    };

    dispatch(employerInfoAsync(variables))
      .unwrap()
      .then((res) => {
        if (res?.status === true) {
          toast(res?.message);
          setActiveTab("Bank Details");
          reset();
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.message);
      });
  };

  const employersData =
    employers &&
    employers?.map((company) => {
      return {
        value: company?.company_id,
        label: company?.comapny_name,
        company_address: company?.company_address,
        industry: company?.industry,
      };
    });

  useEffect(() => {
    dispatch(getAllEmployers());
  }, []);

  const getSelectedCompany = (item) => {
    setSelectedCompany(item);
  };

  useEffect(() => {
    const defaultValues = {
      employer_address: selectedCompany?.company_address,
      industry: selectedCompany?.industry,
    };
    reset(defaultValues);
  }, [selectedCompany, reset]);

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <p className="text-blueTwo uppercase font-medium text-2xl text-center">
        Employer Details
      </p>

      <div className="mt-4">
        <SavingsInput
          placeholder="Employed"
          label="Employment Status"
          register={register("employment_status")}
          error={errors?.employment_status?.message}
        />
      </div>

      <div className="mt-4">
        <SavingsInput
          placeholder="official@email.com"
          label="Official Email"
          register={register("official_email")}
          error={errors?.official_email?.message}
        />
      </div>

      <div className="mt-4">
        <Controller
          control={control}
          name="employer_name"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <div>
              <label className="text-sm font-normal text-blueTwo">
                Employer’s Name
              </label>
              <Select
                onBlur={onBlur}
                onChange={getSelectedCompany}
                checked={value}
                isLoading={getAllEmployersLoading}
                inputRef={ref}
                options={employersData}
                placeholder="Capival Investment Limited"
                styles={colourStyles}
              />
            </div>
          )}
        />
      </div>

      <div className="mt-4">
        <SavingsInput
          placeholder="16 Chief Albert Iyorah street,
          off Admiralty Way,
          Lekki Phase 1,
          Lagos state."
          label="Employer’s Address"
          readOnly
          register={register("employer_address")}
          error={errors?.employer_address?.message}
        />
      </div>

      <div className="mt-4">
        <SavingsInput
          placeholder="0928"
          label="Staff ID"
          register={register("staff_id_no")}
          error={errors?.staff_id_no?.message}
        />
      </div>

      <div className="mt-4">
        <SavingsInput
          placeholder="Fintech"
          label="Industry"
          readOnly
          register={register("industry")}
          error={errors?.industry?.message}
        />
      </div>

      <div className="mt-4">
        <SavingsInput
          placeholder="100,000"
          label="Monthly Income"
          register={register("monthly_income")}
          error={errors?.monthly_income?.message}
        />
      </div>

      <div className="mt-4">
        <label
          htmlFor="Employment Date"
          className={`text-sm font-normal text-blueTwo`}
        >
          Employment Date
        </label>
        <div className="cursor-pointer px-4 mr-4 border border-blueTwo/50 py-3 rounded-[20px] flex items-center text-blueTwo bg-blueTwo/20">
          <DatePicker
            selected={employmentDate}
            onChange={(date) => setEmploymentDate(date)}
          />
          <img src="/assets/icons/calendar.svg" alt="" />
        </div>
      </div>

      <div className="mt-4">
        <SavingsInput
          placeholder="500,000"
          label="Existing Loan Repayment"
          register={register("other_loan_repayment")}
          error={errors?.other_loan_repayment?.message}
        />
      </div>

      <div className="w-full mt-10 md:w-[70%] m-auto">
        <Button
          buttonText="Next"
          className="rounded-xl mb-10"
          size="lg"
          isLoading={createEmployerInfoLoading}
        />
      </div>
    </form>
  );
};

export { Employer };

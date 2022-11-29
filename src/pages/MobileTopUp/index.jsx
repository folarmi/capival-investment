import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Button, FluentSelectTwo, SavingsInput } from "../../atoms";
import WalletDetailsHeader from "../Wallet/WalletDetailsHeader";
import {
  getAirtimeBillersAsync,
  getAllDataBillersAsync,
  getDataProductsAsync,
} from "../../slices/mobileTopup";
import { useForm } from "react-hook-form";
import { useRef } from "react";

const MobileTopUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectRef = useRef(null);

  const mobileMoneyType = [
    { label: "Airtime", value: "Airtime" },
    { label: "Data", value: "Data" },
  ];

  const [airtimeOrData, setAirtimeOrData] = useState("");
  const [selectedDataType, setSelectedDataType] = useState();

  const getSelectedMobileMoney = (item) => {
    setAirtimeOrData(item?.value);
  };

  const getDataProductsIfData = (item) => {
    const variables = {
      billerId: item?.value,
    };
    dispatch(getDataProductsAsync(variables));
  };

  const { airtimeBillers, dataProducts, getDataProductsLoading, dataBillers } =
    useSelector((state) => state.mobileTopUp);

  const { control, handleSubmit, register, formState, setValue, clearErrors } =
    useForm({});

  const { errors } = formState;

  const airtimeBillersData =
    airtimeBillers &&
    airtimeBillers?.map((item) => {
      return {
        label: item?.billerName,
        value: item?.billerId,
      };
    });

  const dataBillersData =
    dataBillers &&
    dataBillers?.map((item) => {
      return {
        label: item?.billerName,
        value: item?.billerId,
      };
    });

  const dataProductsData =
    Array.isArray(dataProducts) &&
    dataProducts &&
    dataProducts?.map((item) => {
      return {
        label: item?.display_name,
        value: item?.variable_name,
        amount: item?.amount,
      };
    });

  const getSelectedDataType = (item) => {
    setSelectedDataType(item);

    if (item) clearErrors("bundle");
    // setValue("bundle", item.value);
    setValue("amount", item?.amount);
    return item;
  };

  useEffect(() => {
    dispatch(getAirtimeBillersAsync());
    dispatch(getAllDataBillersAsync());
  }, []);

  const submitForm = (values) => {
    navigate("/dashboard/Airtime__Data/preview", {
      state: values,
    });
  };

  return (
    <div className="mt-8">
      <WalletDetailsHeader ifTransaction={false} />

      <div className="m-auto w-[92%] md:w-[50%] lg:w-[40%] xl:w-[34%] mt-16">
        <FluentSelectTwo
          control={control}
          name="topup"
          options={mobileMoneyType}
          customOnChange={getSelectedMobileMoney}
          label="Select Type"
          placeholder="Airtime"
        />

        <form onSubmit={handleSubmit(submitForm)}>
          <FluentSelectTwo
            control={control}
            name="billerId"
            options={
              airtimeOrData === "Airtime" ? airtimeBillersData : dataBillersData
            }
            customOnChange={(item) => {
              getDataProductsIfData(item);
              setValue("amount", "");
              setValue("bundle", null);
            }}
            label="Select Network Provider"
            placeholder="Airtel"
            error={errors?.billerId?.message}
            rules={{ required: "Network is required" }}
          />

          {airtimeOrData === "Data" && (
            <FluentSelectTwo
              control={control}
              name="bundle"
              ref={selectRef}
              options={dataProductsData}
              label="Select a bundle"
              placeholder="100MB Daily"
              error={errors?.bundle?.message}
              customOnChange={getSelectedDataType}
              isLoading={getDataProductsLoading}
              rules={{ required: "Bundle Type is required" }}
            />
          )}

          <SavingsInput
            placeholder="N 10,000.00"
            label="Amount"
            register={register("amount", {
              required: "Amount is required",
            })}
            className="mt-4"
            error={errors?.amount?.message}
            readOnly={airtimeOrData === "Data" ? true : false}
          />

          <SavingsInput
            placeholder="08132455678"
            label="Mobile Number"
            error={errors?.phone?.message}
            register={register("phone", {
              required: "Phone Number is required",
            })}
            className="mt-4"
          />

          <div className="w-full mt-10 md:w-[70%] m-auto">
            <Button
              buttonText="Continue"
              className="rounded-xl mb-10"
              size="lg"
              // isLoading={createEmployerInfoLoading}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export { MobileTopUp };

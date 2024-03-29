import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";

import { Button, SavingsInput } from "../../atoms";
import { TextArea } from "../../atoms/TextArea";
import { reportIssueAsync } from "../../slices/accounts";
import { getHelpTopics } from "../../slices/utils";
import { colourStyles } from "../../utils/HelperFunctions";

const Issue = () => {
  const dispatch = useDispatch();
  const { gethelpTopicsLoading, helpTopics } = useSelector(
    (state) => state.utils
  );
  const { reportIssueLoading } = useSelector((state) => state.accounts);

  const [selectedTopic, setSelectedTopic] = useState();
  const [startDate, setStartDate] = useState(new Date());

  const getSelectedTopic = (item) => {
    setSelectedTopic(item);
  };

  const { register, handleSubmit, formState, reset, control } = useForm({
    // resolver: yupResolver(validationSchema),
  });

  const { errors } = formState;

  const allTopicData =
    helpTopics &&
    helpTopics?.map((topic) => {
      return {
        value: topic?.id,
        label: topic?.name,
      };
    });

  useEffect(() => {
    dispatch(getHelpTopics());
  }, []);

  const submitForm = (values) => {
    var newDateOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };

    const dateVariables = {
      start_date: startDate.toLocaleString("en-US", newDateOptions),
    };

    const variables = {
      topicId: selectedTopic?.value,
      topicName: selectedTopic?.label,
      amount: values?.amount,
      date: dateVariables?.start_date,
      refNo: values?.refNo,
      message: values?.message,
    };

    dispatch(reportIssueAsync(variables))
      .unwrap()
      .then((res) => {
        if (res?.status === true) {
          // console.log(res?.status);
          toast(res?.message);
          reset();
        }
      })
      .catch((err) => {
        toast.error(err?.message);
      });
    console.log(dateVariables?.start_date);
  };

  return (
    <div className="mt-4 lg:mt-8">
      <p className="font-normal text-xl text-blueTwo text-center pb-2 uppercase">
        Report an Abuse
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
                  Help Topics
                </label>
                <Select
                  onBlur={onBlur}
                  onChange={getSelectedTopic}
                  checked={value}
                  isLoading={gethelpTopicsLoading}
                  inputRef={ref}
                  options={allTopicData}
                  placeholder="Select Help Topic"
                  styles={colourStyles}
                />
              </div>
            )}
          />
        </div>

        <TextArea
          label="Description"
          placeholder="Description"
          className="mt-4"
          register={register("message")}
          error={errors?.message?.message}
        />

        <div className="mt-4">
          <SavingsInput
            placeholder="Amount in Dispute"
            label="Amount in Dispute"
            register={register("amount")}
            error={errors?.amount?.message}
          />
        </div>

        <div className="mt-4">
          <SavingsInput
            placeholder="Transaction Reference"
            label="Transaction Reference"
            register={register("refNo")}
            error={errors?.refNo?.message}
          />
        </div>

        {/* <div >
          <SavingsInput
            placeholder="Transaction Date"
            label="Transaction Date"
            register={register("date")}
            error={errors?.date?.message}
          />
        </div> */}

        <div className="mt-4">
          <label
            htmlFor="start Date"
            className={`text-sm font-normal text-blueTwo`}
          >
            Transaction Date
          </label>
          <div className="cursor-pointer px-4 mr-4 border border-blueTwo/50 py-4 rounded-[20px] flex items-center text-blueTwo bg-blueTwo/20">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            <img src="/assets/icons/calendar.svg" alt="" />
          </div>
        </div>

        <div className="w-full mt-10 md:w-[70%] m-auto">
          <Button
            buttonText="Submit"
            className="rounded-xl mb-10"
            size="lg"
            isLoading={reportIssueLoading}
          />
        </div>
      </form>
    </div>
  );
};

export { Issue };

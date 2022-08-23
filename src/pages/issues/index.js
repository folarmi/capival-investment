import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { getHelpTopics } from "../../slices/utils";
import { colourStyles } from "../../utils/HelperFunctions";

const Issue = () => {
  const dispatch = useDispatch();
  const { gethelpTopicsLoading, helpTopics } = useSelector(
    (state) => state.utils
  );

  const { register, handleSubmit, formState, reset, control } = useForm({
    // resolver: yupResolver(validationSchema),
  });
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

  return (
    <div className="mt-4 lg:mt-8">
      <p className="font-normal text-xl text-blueTwo text-center pb-2 uppercase">
        Report an Abuse
      </p>

      <form
        // onSubmit={handleSubmit(submitForm)}
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
                  //   onChange={getLoanType}
                  checked={value}
                  isLoading={gethelpTopicsLoading}
                  inputRef={ref}
                  options={allTopicData}
                  placeholder="Select Loan Type"
                  styles={colourStyles}
                />
              </div>
            )}
          />
        </div>
      </form>
    </div>
  );
};

export { Issue };

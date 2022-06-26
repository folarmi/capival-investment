import React from "react";
import { useDispatch } from "react-redux";

import { Button } from "../../atoms/Button";
import { RegisterInput } from "../../atoms/RegisterInput";
import { handleNextButton } from "../../slices/multistep";

const CreateProfile = () => {
  const dispatch = useDispatch();

  const goToNext = () => {
    dispatch(handleNextButton());
  };

  return (
    <>
      <div className="m-auto md:w-[80%] lg:w-[70%] xl:w-[54%] md:mt-16 lg:mt-20 xl:mt-24">
        <p className="text-redOne font-semibold md:text-4xl lg:text-5xl xl:text-[50px] pb-10">
          Create your Profile
        </p>
      </div>

      <section className="bg-blueOne">
        <div className="m-auto md:w-[80%] lg:w-[70%] xl:w-[54%]">
          <p className="font-semibold text-lg text-blueTwo py-6">
            Why we need your BVN
          </p>
          <p className="text-blueTwo font-normal text-sm">
            When you ‘give’ us your BVN, we run a check on the general BVN
            registry to make sure the number you typed in is correct and yours.
          </p>
          <p className="text-blueTwo font-normal text-sm py-6">
            We will not use your BVN to move money from any of your other bank
            accounts and we won’t share it with anyone.
          </p>
        </div>
      </section>

      <div className="m-auto mt-8 md:w-[80%] lg:w-[70%] xl:w-[54%]">
        <RegisterInput placeholder="Enter your BVN" />

        <p className="text-blueTwo font-normal text-sm pt-2">
          You can also dial *565*0# from your mobile phone to get your BVN
        </p>

        <div className="mt-16 w-1/2">
          <Button
            buttonText="Continue"
            className="rounded-2xl"
            onClick={goToNext}
          />
        </div>
      </div>
    </>
  );
};

export { CreateProfile };

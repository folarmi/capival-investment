import React from "react";
import { useDispatch } from "react-redux";

import { Button } from "../../atoms/Button";
import { RegisterInput } from "../../atoms/RegisterInput";
import { handleNextButton } from "../../slices/multistep";

const ProfileInformation = () => {
  const dispatch = useDispatch();

  const goToNext = () => {
    dispatch(handleNextButton());
  };

  return (
    <div className="w-full h-screen register-bg">
      <div className="m-auto md:w-[80%] lg:w-[70%] xl:w-[54%] mt-16">
        <p className="text-redOne font-semibold md:text-4xl lg:text-5xl xl:text-[50px] pb-10">
          Create your Profile
        </p>
      </div>

      <section className="bg-blueOne">
        <div className="m-auto md:w-[80%] lg:w-[70%] xl:w-[54%]">
          <p className="text-blueTwo font-normal text-sm py-6">
            Please enter your profile information
          </p>
        </div>
      </section>

      <div className="m-auto my-12 md:w-[80%] lg:w-[70%] xl:w-[54%]">
        <RegisterInput placeholder="Email" />
      </div>

      <section className="bg-blueOne">
        <div className="m-auto md:w-[80%] lg:w-[70%] xl:w-[54%]">
          <p className="font-semibold text-lg text-blueTwo py-6">
            Set up password
          </p>
          <p className="text-blueTwo font-normal text-sm pb-6">
            Password should contain: An uppercase (A) A lowercase (a) Special
            character (@#$) At least 8 characters
          </p>

          {/* <div className="mt-16 w-1/2">
            <Button
              buttonText="Continue"
              className="rounded-2xl"
              onClick={goToNext}
            />
          </div> */}
        </div>
      </section>

      <div className="m-auto mt-12 md:w-[80%] lg:w-[70%] xl:w-[54%]">
        <div className="mb-12">
          <RegisterInput placeholder="Password" />
        </div>

        <div className="mt-16 w-1/2">
          <Button
            buttonText="Continue"
            className="rounded-2xl"
            onClick={goToNext}
          />
        </div>
      </div>
    </div>
  );
};

export { ProfileInformation };

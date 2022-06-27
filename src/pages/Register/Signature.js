import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../atoms";

import { handleNextButton } from "../../slices/multistep";

const Signature = () => {
  const dispatch = useDispatch();

  const goToNext = () => {
    dispatch(handleNextButton());
  };

  return (
    <>
      <div className="m-auto md:w-[80%] lg:w-[70%] xl:w-[54%] md:mt-16 lg:mt-20 xl:mt-24">
        <p className="text-redOne font-semibold md:text-4xl lg:text-5xl xl:text-[50px] pb-10">
          Upload Signature
        </p>
      </div>

      <section className="bg-blueOne">
        <div className="m-auto md:w-[80%] lg:w-[70%] xl:w-[54%]">
          <p className="text-blueTwo font-normal text-sm py-6">
            Take a picture of your signature on a piece of paper and proceed to
            upload
          </p>
        </div>
      </section>

      <div className="flex items-center justify-center m-auto mt-9 md:w-[80%] lg:w-[70%] xl:w-[54%]">
        <img
          src={process.env.PUBLIC_URL + "assets/images/signature.svg"}
          alt="upload-avatar"
          className="w-1/2 cursor-pointer"
        />

        <div className="ml-16 w-1/2">
          <Button
            buttonText="Upload Nowss"
            className="rounded-2xl"
            onClick={goToNext}
          />

          <Button
            buttonText="Upload Later"
            className="rounded-2xl mt-6"
            onClick={goToNext}
          />
        </div>
      </div>
    </>
  );
};

export { Signature };

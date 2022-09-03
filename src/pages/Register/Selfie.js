import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../atoms";
import { WebcamCapture } from "../../components/Webcam";

import { handleNextButton } from "../../slices/multistep";

const Selfie = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-full h-screen register-bg">
      <div className="m-auto md:w-[80%] lg:w-[70%] xl:w-[54%] mt-16">
        <p className="text-redOne font-semibold md:text-4xl lg:text-5xl xl:text-[50px] pb-10">
          Upload Selfie
        </p>
      </div>

      <section className="bg-blueOne">
        <div className="m-auto md:w-[80%] lg:w-[70%] xl:w-[54%]">
          <p className="text-blueTwo font-normal text-sm py-6">
            Avoid shadows on face or anything blocking face view, no hats, no
            dark lenses, or anything that obscures the face.
          </p>
        </div>
      </section>

      <div className="m-auto mt-9 md:w-[80%] lg:w-[70%] xl:w-[54%]">
        <WebcamCapture />

        {/* <div className="mt-8 w-1/2">
          <Button
            buttonText="Continue"
            className="rounded-2xl"
            onClick={goToNext}
          />
        </div> */}
      </div>
    </div>
  );
};

export { Selfie };

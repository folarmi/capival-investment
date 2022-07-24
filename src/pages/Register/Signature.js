import React from "react";
import { WebcamSignature } from "../../components/WebcamSignature";

const Signature = () => {
  return (
    <div className="w-full h-screen register-bg">
      <div className="m-auto md:w-[80%] lg:w-[70%] xl:w-[54%] mt-16">
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

      <div className="">
        <WebcamSignature />

        {/* <div className="ml-16 w-1/2">
          <Button
            buttonText="Upload Now"
            className="rounded-2xl"
            // onClick={goToNext}
          />

          <Button
            buttonText="Upload Later"
            className="rounded-2xl mt-6"
            onClick={goToNext}
          />
        </div> */}
      </div>
    </div>
  );
};

export { Signature };

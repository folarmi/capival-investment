import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

// import Webcam from "react-webcam";
import { Button } from "../atoms";
import { handleNextButton, handlePassport } from "../slices/multistep";
import { SimpleDropZone } from "./SimpleDropZoneUploader";

// const videoConstraints = {
//   width: 250,
//   height: 250,
//   facingMode: "user",
// };

export const WebcamCapture = () => {
  const dispatch = useDispatch();

  const [statusUpload, setStatusUpload] = useState(null);
  const [passport, setPassport] = useState();

  const handleChangeStatus = (meta, status) => {
    setPassport(meta?.file);
    setStatusUpload(status);
  };

  const goToNext = () => {
    if (passport === undefined) {
      toast.error("You must upload a passport");
    }
    dispatch(handlePassport(passport));
    dispatch(handleNextButton());
  };

  // const [image, setImage] = useState("");
  // const webcamRef = React.useRef(null);

  // const capture = React.useCallback(() => {
  //   const imageSrc = webcamRef.current.getScreenshot();
  //   setImage(imageSrc);

  //   fetch(imageSrc)
  //     .then((res) => res.blob())
  //     .then((blob) => {
  //       const file = new File([blob], "passport.jpeg");
  //       dispatch(handlePassport(file));

  //       // for (var value of fd.values()) {
  //       //   console.log("multipart value", value);
  //       // }
  //     });
  // });

  return (
    <>
      <div className="mt-9 md:w-[80%] lg:w-[70%]">
        <SimpleDropZone
          handleChangeStatus={handleChangeStatus}
          statusUpload={statusUpload}
          imgAvatar="/assets/icons/frontView.svg"
          viewType="Passport"
        />

        {/* <div className="px-6 pt-6 flex justify-center">
        {image === "" ? (
          <Webcam
            audio={false}
            height={200}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={220}
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={image} loading="lazy" />
        )}
      </div>

      <div className="py-8 w-full">
        {image != "" ? (
          <div className="flex justify-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                setImage("");
              }}
              className=" bg-blueTwo font-medium text-base text-white rounded-md p-3"
            >
              Retake Image
            </button>
          </div>
        ) : (
          <div className="flex justify-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                capture();
              }}
              className=" bg-blueTwo font-medium text-base text-white rounded-md p-3"
            >
              Capture
            </button>
          </div>
        )}
      </div> */}
      </div>
      <div className="mt-8 w-1/2">
        <Button
          buttonText="Continue"
          className="rounded-2xl"
          onClick={goToNext}
        />
      </div>
    </>
  );
};

import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Webcam from "react-webcam";
import { handlePassport } from "../slices/multistep";

const videoConstraints = {
  width: 250,
  height: 250,
  facingMode: "user",
};

export const WebcamCapture = () => {
  const dispatch = useDispatch();

  const [image, setImage] = useState("");
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);

    fetch(imageSrc)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], "passport.jpeg");
        dispatch(handlePassport(file));

        // for (var value of fd.values()) {
        //   console.log("multipart value", value);
        // }
      });
  });

  return (
    <div className="bg-blueThree rounded-[30px] w-1/2">
      <div className="px-6 pt-6 flex justify-center">
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
          <img src={image} />
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
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// import Webcam from "react-webcam";
import { Button } from "../atoms";
// import { handleSignature } from "../slices/multistep";
import { registerUserAsync } from "../slices/auth";
import { SimpleDropZone } from "./SimpleDropZoneUploader";

// const videoConstraints = {
//   width: 250,
//   height: 250,
//   facingMode: "user",
// };

export const WebcamSignature = () => {
  let imageSrc;
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.multiStep.userInfo);
  const { bvnData, registerUserIsLoading } = useSelector((state) => state.auth);

  // console.log("userIfo:", userInfo, "bvn", bvnData);

  const [statusUpload, setStatusUpload] = useState(null);
  const [signature, setSignature] = useState();

  const handleChangeStatus = (meta, status) => {
    setSignature(meta?.file);
    setStatusUpload(status);
  };

  // const [image, setImage] = useState("");
  // const webcamRef = React.useRef(null);

  // const capture = React.useCallback(() => {
  //   imageSrc = webcamRef.current.getScreenshot();
  //   setImage(imageSrc);
  // });

  const registerWithSignature = () => {
    const formData = new FormData();
    formData.append("first_name", bvnData?.firstname);
    formData.append("last_name", bvnData?.lastname);
    formData.append("middle_name", bvnData?.middlename);
    formData.append("bvn", bvnData?.bvn);
    formData.append("gender", userInfo?.gender);
    formData.append("dob", bvnData?.dob);
    formData.append("phone", bvnData?.phone);
    formData.append("address", userInfo?.address);
    formData.append("email", userInfo?.email);
    formData.append("password", userInfo?.password);
    formData.append("passport", userInfo?.passport);
    formData.append("signature", signature || " ");

    // fetch(imageSrc)
    //   .then((res) => res.blob())
    //   .then((blob) => {
    //     const file = new File([blob], "signature.jpeg");

    // if (ifUpload === true) {
    // dispatch(handleSignature(file));
    dispatch(registerUserAsync(formData))
      .unwrap()
      .then((res) => {
        if (res?.status === true) {
          toast(res?.message);
          navigate("/");
        }
      })
      .catch((err) => {
        toast.error(err?.message);
      });

    for (var value of formData.values()) {
      console.log("", value);
      // }
      // for (var value of variables?.signature?.values()) {
      //   console.log("signature", value);
      // }
      // } else {
      //   console.log("didn't choose");
      // }
    }
  };

  return (
    <div className="lg:flex items-center justify-center m-auto mt-9 md:w-[80%] lg:w-[70%] xl:w-[54%]">
      <SimpleDropZone
        handleChangeStatus={handleChangeStatus}
        statusUpload={statusUpload}
        imgAvatar="/assets/icons/frontView.svg"
        viewType="Signature"
      />

      {/* <div className="bg-blueThree rounded-[30px] w-1/2">
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
        </div>
      </div> */}

      <div className="mt-10 lg:mt-0 ml-0 lg:ml-16 flex lg:flex-col w-full lg:w-1/2 pr-6">
        <div className="w-1/2 pr-3">
          <Button
            buttonText="Upload Now"
            className="rounded-2xl"
            // isLoading={registerUserIsLoading}
            isLoading={signature ? registerUserIsLoading : false}
            // onClick={() => {
            //   setIfUpload(true);
            //   registerWithSignature();
            // }}
            onClick={registerWithSignature}
          />
        </div>

        <div className="w-1/2">
          <Button
            buttonText="Upload Later"
            className="rounded-2xl lg:mt-6"
            isLoading={signature ? false : registerUserIsLoading}
            onClick={registerWithSignature}
          />
        </div>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { toast } from "react-toastify";

const CopyFunction = ({ valueToCopy, accountNumber }) => {
  const [copySuccess, setCopySuccess] = useState();

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess("Copied!");
      toast.info("Copied");
      setTimeout(() => {
        setCopySuccess(null);
      }, 2000);
      //   window.location.reload();
    } catch (err) {
      setCopySuccess("Failed to copy!");
      //   window.location.reload();
    }
  };

  return (
    <div
      className="cursor-pointer flex items-center justify-center bg-blueTwo py-2 rounded-3xl m-auto w-1/2"
      onClick={() => copyToClipBoard(valueToCopy)}
    >
      <img
        src="/assets/icons/copyIcon.svg"
        alt="closeButton"
        className="mr-3"
      />
      <p className="font-medium text-lg text-white">{accountNumber}</p>
    </div>
  );
};

export { CopyFunction };

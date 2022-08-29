import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Button } from "../../atoms";
import { SimpleDropZone } from "../../components/SimpleDropZoneUploader";
import { uploadKYCDocumentsAsync } from "../../slices/accounts";

const Documents = () => {
  const dispatch = useDispatch();
  const { uploadKycDocumentsLoading } = useSelector((state) => state?.accounts);

  const [statusUpload, setStatusUpload] = useState(null);
  const [driverBackStatusUpload, setDriverBackStatusUpload] = useState(null);
  const [govtIdStatus, setGovtIdStatus] = useState(null);
  const [govtIdBackStatus, setGovtIdBackStatus] = useState();
  const [driverFront, setDriverFront] = useState();
  const [driverBack, setDriverBack] = useState();
  const [govtIdFront, setGovtIdFront] = useState();
  const [govtIDBack, setGovtIDBack] = useState();

  const handleChangeStatus = (meta, status) => {
    console.log("file", meta.file);
    setDriverFront(meta?.file);
    setStatusUpload(status);
  };

  const handledriverBackStatus = (meta, status) => {
    setDriverBack(meta?.file);
    setDriverBackStatusUpload(status);
  };

  const handlegovtIDBackStatus = (meta, status) => {
    setGovtIDBack(meta?.file);
    setGovtIdBackStatus(status);
  };

  const handlegovtIDFrontStatus = (meta, status) => {
    setGovtIdFront(meta?.file);
    setGovtIdStatus(status);
  };

  const submitForm = () => {
    if (driverFront === undefined) {
      toast.error("Front page of driver Id cannot be empty");
    }

    if (govtIdFront === undefined) {
      toast.error("Front page of government Id cannot be empty");
    }

    let formdata = new FormData();
    formdata.append("work_id_front", driverFront);
    formdata.append("work_id_back", driverBack);
    formdata.append("govt_id_front", govtIdFront);
    formdata.append("govt_id_back", govtIDBack);

    dispatch(uploadKYCDocumentsAsync(formdata))
      .unwrap()
      .then((res) => {
        if (res?.status === true) {
          // console.log(res?.status);
          toast(res?.message);
          //   setActiveTab("Employer");
          //   reset();
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.message);
      });
  };

  return (
    <div>
      <p className="text-blueTwo uppercase font-medium text-2xl text-center">
        Documents
      </p>
      <p className="text-blueTwo pt-3 pb-8 font-medium text-xl text-center">
        Valid means of Identification
      </p>

      <p className="text-sm text-blueTwo pb-4 text-center">
        Upload Front & Back Snapshot of Driver’s License
      </p>

      <div className="flex items-center justify-between">
        <SimpleDropZone
          handleChangeStatus={handleChangeStatus}
          statusUpload={statusUpload}
          imgAvatar="/assets/icons/frontView.svg"
          viewType="*Front Page"
        />
        <SimpleDropZone
          handleChangeStatus={handledriverBackStatus}
          statusUpload={driverBackStatusUpload}
          imgAvatar="/assets/icons/backView.svg"
          viewType="*Back Page"
        />
      </div>

      <p className="text-sm text-blueTwo py-4 font-medium text-center">
        Work ID
      </p>
      <p className="text-sm text-blueTwo pb-4 text-center">
        Upload Front & Back Snapshot of Work ID
      </p>
      <div className="flex items-center justify-between">
        <SimpleDropZone
          handleChangeStatus={handlegovtIDFrontStatus}
          statusUpload={govtIdStatus}
          imgAvatar="/assets/icons/frontView.svg"
          viewType="*Front Page"
        />
        <SimpleDropZone
          handleChangeStatus={handlegovtIDBackStatus}
          statusUpload={govtIdBackStatus}
          imgAvatar="/assets/icons/backView.svg"
          viewType="*Back Page"
        />
      </div>

      <div className="w-full mt-10 md:w-[70%] m-auto">
        <Button
          buttonText="Submit"
          className="rounded-xl mb-10"
          size="lg"
          onClick={submitForm}
          isLoading={uploadKycDocumentsLoading}
        />
      </div>
    </div>
  );
};

export { Documents };

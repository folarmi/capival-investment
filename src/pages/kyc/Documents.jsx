import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Button } from "../../atoms";
import { SimpleDropZone } from "../../components/SimpleDropZoneUploader";
import { uploadKYCDocumentsAsync } from "../../slices/accounts";
import Select from "react-select";
import { colourStyles } from "../../utils/HelperFunctions";

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
  const [selectedIdType, setSelectedIdType] = useState("Driver's License");

  const handleChangeStatus = (meta, status) => {
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

  const { control } = useForm({});

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

  const idOptions = [
    {
      label: "Driver's License",
      value: "Driver's License",
    },
    {
      label: "National ID Card",
      value: "National ID Card",
    },
    {
      label: "International Passport",
      value: "International Passport",
    },
  ];

  const getSelectedIDType = (item) => {
    setSelectedIdType(item?.label);
  };

  // useEffect(() => {
  //   getSelectedIDType();
  // }, [selectedIdType]);

  return (
    <div>
      <p className="text-blueTwo uppercase font-medium text-2xl text-center">
        Documents
      </p>
      <p className="text-blueTwo pt-3 pb-4 font-medium text-sm text-center">
        Valid means of Identification
      </p>

      <div className="mb-4">
        <Controller
          control={control}
          name=""
          render={({ field: { onBlur, value, ref } }) => (
            <div>
              <label className="text-sm font-normal text-blueTwo">
                ID Type
              </label>
              <Select
                onBlur={onBlur}
                onChange={getSelectedIDType}
                checked={value}
                inputRef={ref}
                options={idOptions}
                placeholder="Driver's License"
                styles={colourStyles}
              />
            </div>
          )}
        />
      </div>

      <p className="text-sm text-blueTwo pb-4 text-center">
        Upload Front & Back Snapshot of {selectedIdType}
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

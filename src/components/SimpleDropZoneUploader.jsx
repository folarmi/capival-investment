import React from "react";
import S from "react-dropzone-uploader";

import "react-dropzone-uploader/dist/styles.css";

// import cloudWhite from "../assets/icons/cloudWhite.svg";

const Switch = S.default ? S.default : S;

const SimpleDropZone = ({
  handleChangeStatus,
  statusUpload,
  imgAvatar,
  viewType,
}) => {
  let bgColor;

  if (statusUpload === "done") {
    bgColor = "white";
  } else if (statusUpload === "error_file_size") {
    bgColor = "rgba(202, 8, 20, 0.1)";
  } else {
    bgColor = "#d8deed";
  }

  return (
    <Switch
      onChangeStatus={handleChangeStatus}
      accept="image/*"
      inputContent={(files, extra) =>
        extra.reject ? (
          "Maximium file size is 2mb"
        ) : (
          <div className="flex flex-col justify center items-center">
            <img src={imgAvatar} alt="imgAvatar" className="w-3/4" />
            <p className="text-blueThree font-medium pt-2">{viewType}</p>
          </div>
        )
      }
      //   dropzone={(files) => backgroundColor: files}
      autoUpload={false}
      classNames={{
        inputLabel: "text-xs text-white font-semibold cursor-pointer",
        dropzone:
          "overflow-x-hidden overflow-y-hidden min-h-0 w-[80%] max-w-full px-4 md:px-0 lg:w-[30%]  py-2 rounded-xl",
      }}
      styles={{
        dropzoneReject: { borderColor: "#F19373", backgroundColor: "#F1BDAB" },
        // dropzoneActive: { backgroundColor: "green" error_file_size},

        dropzone: {
          backgroundColor: bgColor,
        },
        preview: {
          //   minHeight: "unset",
          width: "unset",
          padding: "unset",
          color: "#CA0814",
          backgroundColor: "#d8deed",
          display: "flex",
          justifyContent: "center",
        },
      }}
      PreviewComponent={false}
      multiple={false}
      maxSizeBytes={2097152}
      maxFiles={1}
    />
  );
};

export { SimpleDropZone };

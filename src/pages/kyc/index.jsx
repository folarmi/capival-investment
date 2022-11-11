import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BankDetails } from "./BankDetails";
import { Documents } from "./Documents";
import { Employer } from "./Employer";
import { NextofKin } from "./NextofKin";
// #3B58A8 - inactive
// #8EA8DD - active
const UpdateKYC = () => {
  const kycStatus = useSelector(
    (state) => state.auth?.login?.user?.authorisation
  );

  const [activeTab, setActiveTab] = useState("");

  const kycObject = {
    next_of_kin: kycStatus?.next_of_kin,
    employer_details: kycStatus?.employer_details,
    bank_account: kycStatus?.bank_account,
    kyc_document: kycStatus?.kyc_document,
  };

  const changeActive = (item) => {
    setActiveTab(item?.title);
  };

  const kycOptions = [
    {
      id: "1",
      title: "Next of kin",
    },
    {
      id: "2",
      title: "Employer",
    },
    {
      id: "3",
      title: "Bank Details",
    },
    {
      id: "4",
      title: "Documents",
    },
  ];

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        // Run Function
        if (!!!kycObject?.next_of_kin) {
          setActiveTab("Next of kin");
        } else if (!!!kycObject?.employer_details) {
          setActiveTab("Employer");
        } else if (!!!kycObject?.bank_account) {
          setActiveTab("Bank Details");
        } else if (!!!kycObject?.kyc_document) {
          setActiveTab("Documents");
        } else return null;
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="mt-10">
      <p className="text-blueTwo text-xl font-medium text-center uppercase">
        Update kyc
      </p>

      <div className="overflow-auto flex whitespace-nowrap items-center justify-center mt-10">
        {kycOptions?.map((item) => {
          return (
            <div
              key={item?.id}
              className={`mr-10 cursor-pointer rounded-b-lg rounded-t-lg ${
                activeTab === item?.title
                  ? "border-b-red-900"
                  : "border-b-green-400"
              }`}
              onClick={() => changeActive(item)}
            >
              <p
                className={`pb-4 text-sm md:text-xl`}
                style={{
                  color: activeTab === item?.title ? "#8EA8DD" : "#3B58A8",
                }}
              >
                {item?.title}
              </p>
              <div
                className="h-2 rounded-xl"
                style={{
                  backgroundColor:
                    activeTab === item?.title ? "#8EA8DD" : "#3B58A8",
                }}
              ></div>
            </div>
          );
        })}
      </div>

      <div className="m-auto w-[90%] md:w-[80%] lg:w-[50%] mt-8">
        {activeTab === "Next of kin" && (
          <NextofKin setActiveTab={setActiveTab} />
        )}
        {activeTab === "Employer" && <Employer setActiveTab={setActiveTab} />}
        {activeTab === "Bank Details" && (
          <BankDetails setActiveTab={setActiveTab} />
        )}
        {activeTab === "Documents" && <Documents setActiveTab={setActiveTab} />}
      </div>
    </div>
  );
};

export { UpdateKYC };

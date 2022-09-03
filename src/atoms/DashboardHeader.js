import React, { useState } from "react";
import { useSelector } from "react-redux";
import ModalPopup from "../components/ModalPopup";
import { BvnModal } from "./BvnModal";

import { SearchBar } from "./SearchBar";

const DashboardHeader = () => {
  const userObject = useSelector((state) => state.auth.login?.user?.user);
  const userAvatar = useSelector(
    (state) => state.auth?.login?.user?.authorisation?.user_data?.passport
  );

  const [showBVN, setShowBVN] = useState(false);

  const toggleBVNModal = () => {
    setShowBVN(!showBVN);
  };
  // console.log(userAvatar);

  return (
    <>
      <header
        className="w-full fixed flex items-start lg:items-center bg-white py-4 shadow-md"
        style={{
          zIndex: 20,
        }}
      >
        <section className="flex flex-row-reverse md:flex-row items-center">
          <div className="lg:ml-6 w-[10%] lg:mr-[10%]">
            <img
              src="/assets/icons/logo.svg"
              alt="capival-logo"
              // className="block"
              loading="lazy"
            />
          </div>

          <div className="flex whitespace-nowrap items-center mr-[3%]">
            {userAvatar ? (
              <img
                src={userAvatar}
                alt="avatar"
                className="w-12 md:h-12 rounded-full"
                loading="lazy"
              />
            ) : (
              <div class="inline-flex overflow-hidden relative justify-center items-center w-12 h-12 bg-gray-100 rounded-full dark:bg-gray-600">
                <span class="font-medium text-gray-600 dark:text-gray-300">
                  {userObject?.customer_data?.Firstname.charAt(0)}
                </span>
              </div>
            )}
            <p className="text-base text-blueTwo font-normal pl-4">
              Hi,{" "}
              <span className="font-semibold">
                {userObject?.customer_data?.Firstname}
              </span>{" "}
            </p>
          </div>
        </section>

        <div
          className="hidden md:flex items-center lg:mr-[42%] cursor-pointer"
          onClick={toggleBVNModal}
        >
          <p className="text-[15px] text-blueTwo font-normal w-fit">Show BVN</p>
          <img src="/assets/icons/rightArrow.svg" alt="avatar" loading="lazy" />
        </div>

        <div className="hidden md:flex items-center  justify-self-end">
          {/* <SearchBar /> */}

          <div className="flex items-center ml-[5%] cursor-pointer">
            <a
              href="https://instagram.com/capivalinvestment?igshid=YmMyMTA2M2Y="
              target="_blank"
            >
              <img
                src="/assets/icons/instagram.svg"
                alt="avatar"
                className="mr-4"
                loading="lazy"
              />
            </a>
            <a href="https://twitter.com/capivalinvest" target="_blank">
              <img
                src="/assets/icons/twitter.svg"
                alt="avatar"
                className="mr-4"
                loading="lazy"
              />
            </a>
            <a href="https://facebook.com/CapivalInvestment/" target="_blank">
              <img
                src="/assets/icons/facebook.svg"
                alt="avatar"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </header>

      <ModalPopup
        modalHeight="150px"
        modalWidth="200px"
        children={<BvnModal toggleBVNModal={toggleBVNModal} />}
        isOpen={showBVN}
      />
    </>
  );
};

export { DashboardHeader };

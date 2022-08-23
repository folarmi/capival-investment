import React from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button, SavingsInput, UserAvatar } from "../../atoms";
import WalletDetailsHeader from "../Wallet/WalletDetailsHeader";

const OtherBanksTransfer = () => {
  const dispatch = useDispatch();
  const nagivate = useNavigate();

  const validationSchema = Yup.object().shape({
    destination_account: Yup.string()
      .required("Destination Account is required")
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Must be exactly 10 digits")
      .max(10, "Must be exactly 10 digits"),
    amount: Yup.string()
      .required()
      .matches(/^[0-9]+$/, "Must be only digits"),
  });

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { errors } = formState;

  return (
    <div className="mt-8">
      <WalletDetailsHeader />

      <main className="mt-10 px-8">
        <p className="font-medium text-blueTwo text-base uppercase">
          Recent Beneficaries
        </p>

        <div className="pt-4 flex items-center px-20">
          <UserAvatar initials="ao" userName="Akinwale Olawale" />
          <UserAvatar initials="ao" userName="Akinwale Olawale" />
          <UserAvatar initials="ao" userName="Akinwale Olawale" />
          <UserAvatar initials="ao" userName="Akinwale Olawale" />
          <UserAvatar initials="ao" userName="Akinwale Olawale" />
          <UserAvatar initials="ao" userName="Akinwale Olawale" />
        </div>

        <p className="font-medium text-blueTwo text-base uppercase py-5">
          Other Bank Transfer
        </p>

        <form className="grid grid-cols-2 gap-10 px-20">
          <div>
            <SavingsInput placeholder="Beneficiary Account Number" />
          </div>
          <div>
            <SavingsInput placeholder="Amount" />
          </div>
          <div>
            <SavingsInput placeholder="Narration" />
          </div>

          <div className="w-[30%] mt-6 justify-self-center col-span-2">
            <Button buttonText="Continue" className="rounded-xl" size="lg" />
          </div>
        </form>
      </main>
    </div>
  );
};

export { OtherBanksTransfer };

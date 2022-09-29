import React, { useState } from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { Input, Button, Header } from "../atoms";
import { loginUserAsync, resetInitialState } from "../slices/auth";
import tokenService from "../services/token.service";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { isLoading } = useSelector((state) => state?.auth?.login);
  const { isLoading } = useSelector((state) => state?.auth?.login);

  console.log(isLoading);

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordShown = () => {
    setPasswordShown(!passwordShown);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    password: Yup.string()
      .required("Please enter a password")
      .min(8, "Password too short")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,

        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { errors } = formState;

  const submitForm = (values) => {
    dispatch(loginUserAsync(values))
      .unwrap()
      .then((res) => {
        if (res?.status === true) {
          // console.log(res?.status);
          toast("Login successful");
          tokenService.setUser(res?.authorisation?.token);
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.message);
      });
  };

  const gotToForgotPasswordPage = () => {
    navigate("/forgot-password");
  };

  React.useEffect(() => {
    dispatch(resetInitialState());
  }, []);

  return (
    <div className="w-full h-screen login-bg">
      <Header />
      <div className="bg-blueOne m-auto w-[92%] md:w-[50%] lg:w-[40%] xl:w-[34%] mt-16 rounded-3xl">
        <p className="text-2xl text-redOne py-8 text-center">
          Login to your Account
        </p>
        <form onSubmit={handleSubmit(submitForm)} className="px-10">
          <Input
            placeholder="Username"
            icon="/assets/icons/profile.svg"
            register={register("email")}
            error={errors?.email?.message}
          />

          <div className="w-full relative">
            <i onClick={togglePasswordShown} className="">
              <img
                src={
                  passwordShown
                    ? "/assets/icons/hide.svg"
                    : "/assets/icons/hide.svg"
                }
                onClick={togglePasswordShown}
                alt="visible"
                className="w-5 absolute md:mt-[5%] ml-[89%]"
              />
            </i>
            <Input
              placeholder="Password"
              icon="/assets/icons/lock.svg"
              register={register("password")}
              error={errors?.password?.message}
              type={passwordShown ? "text" : "password"}
              ifIcon
            />
          </div>
          <Button
            buttonText="Login"
            className="mt-6 rounded-[30px]"
            isLoading={isLoading}
          />
          <p
            onClick={gotToForgotPasswordPage}
            className="text-sm font-medium text-blueThree py-6 text-center cursor-pointer"
          >
            Forgot Password?
          </p>
        </form>
      </div>
    </div>
  );
};

export { Login };

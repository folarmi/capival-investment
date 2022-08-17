import React from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { Input, Button, Header } from "../atoms";
import { loginUserAsync } from "../slices/auth";
import tokenService from "../services/token.service";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { isLoading } = useSelector((state) => state?.auth?.login);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is Required"),
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
    console.log("login page", values);
    dispatch(loginUserAsync(values))
      .unwrap()
      .then((res) => {
        if (res?.status === true) {
          toast("Login successful");
          tokenService.setUser(res?.authorisation[0]?.original?.token);
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

  // React.useEffect(() => {
  //   dispatch(resetInitialState());
  // }, []);

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
          <Input
            placeholder="Password"
            icon="/assets/icons/lock.svg"
            register={register("password")}
            error={errors?.password?.message}
          />
          <Button
            buttonText="Login"
            className="mt-6 rounded-[30px]"
            // isLoading={isLoading}
          />
          <p
            onClick={gotToForgotPasswordPage}
            className="text-sm font-medium text-blueThree py-6 text-center cursor-pointer"
          >
            Forget Password?
          </p>
        </form>
      </div>
    </div>
  );
};

export { Login };

// {
//   "status": true,
//   "user": {
//       "customer_data": {
//           "Date_Created": "2022-07-23 11:51:28",
//           "ID": "2012",
//           "CustomerID": "20220700038",
//           "Surname": "HARRY",
//           "Middlename": " ",
//           "Firstname": "CHARLES",
//           "MaritalStatus": "",
//           "DOB": "1979-10-09",
//           "Gender": "Male",
//           "Education": "",
//           "Mobile": "08055593627",
//           "Email": "fola@test.com",
//           "Home": "44815 Georgianna IslandThielfurt, DE 77929-7185",
//           "Home_Landmark": "",
//           "Home_State": "025",
//           "Home_LGA": "",
//           "Home_duration": "",
//           "Home_Previous": "",
//           "Period_Employed": null,
//           "No_of_Children": null,
//           "No_of_household": null,
//           "Accommodation": null,
//           "Other_Loans": null,
//           "Other_Monthly_Repayments": null,
//           "Notes": "",
//           "Referrer": "Branch",
//           "AccountType": "Personal",
//           "BVN": null
//       },
//       "employment_data": {
//           "Employment_Status": null,
//           "Employer": null,
//           "Employer_Email": null,
//           "Employer_Address": null,
//           "Employer_Bus-Stop": null,
//           "Employer_Landmark": null,
//           "Employer_City": null,
//           "Employer_State": null,
//           "Employer_LGA": null,
//           "Employer_Phone": null,
//           "Employer_Staff_ID": null,
//           "Employer_Sector": null,
//           "Employer_Duration": null,
//           "Pension_No": null,
//           "Tax_ID": null,
//           "Net_Monthly_Income": null,
//           "Other_Monthly_Income": null,
//           "Total_Disposable_Income": null
//       },
//       "next_of_kin": {
//           "NOK_Name": null,
//           "NOK_Relationship": null,
//           "NOK_Employer": null,
//           "NOK_Address": null,
//           "NOK_Phone": null,
//           "NOK_Email": null
//       },
//       "bank_account": {
//           "Account_Name": null,
//           "Account_Number": null,
//           "Bank_Name": null,
//           "Branch_SortCode": null,
//           "AccountType": null
//       },
//       "accounts": {
//           "AccountNo": "1010020056",
//           "cod_prod_desc": "Capival Flex",
//           "AccountBalance": "0.00",
//           "AccountTitle": "HARRY   CHARLES",
//           "OverdraftLimit": "0.00"
//       }
//   },
//   "authorisation": [
//       {
//           "headers": {},
//           "original": {
//               "user_data": null,
//               "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2liYW5rLmNhcGl2YWwuY29tL2FwaS92MS9hdXRoL2xvZ2luIiwiaWF0IjoxNjU4NTgyOTMzLCJleHAiOjE2NTg1ODY1MzMsIm5iZiI6MTY1ODU4MjkzMywianRpIjoiRTJQcVJBWHMzaUo0eVNqMSIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.bhgHDh4vi5iH4P2gMRzx4I2nTxZohcjNJviJmJE0bbw",
//               "token_type": "bearer",
//               "expires_in": 3600
//           },
//           "exception": null
//       }
//   ]
// }

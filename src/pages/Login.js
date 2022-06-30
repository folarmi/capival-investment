import React from "react";

import { Input, Button, Header } from "../atoms";

const Login = () => {
  return (
    <div className="w-full h-screen login-bg">
      <Header />
      <div className="bg-blueOne m-auto md:w-[50%] lg:w-[40%] xl:w-[34%] mt-16 rounded-3xl">
        <p className="text-2xl text-redOne py-8 text-center">
          Login to your Account
        </p>
        <form className="px-10">
          <Input placeholder="Username" icon="/assets/icons/profile.svg" />
          <Input placeholder="Password" icon="/assets/icons/lock.svg" />
          <Button buttonText="Login" className="mt-6 rounded-[30px]" />
          <p className="text-sm font-medium text-blueThree py-6 text-center">
            Forget Password?
          </p>
        </form>
      </div>
    </div>
  );
};

export { Login };

{
  /* <div
className="w-full overflow-x-scroll md:overflow-x-hidden bg-contain bg-no-repeat pl-6 lg:pr-0 2xl:px-6 py-8 md:py-10 flex items-center mb-12 md:mb-16"
style={{
  backgroundImage: `url(${dashboardBgImage})`,
  backgroundSize: "cover",
}}
> */
}

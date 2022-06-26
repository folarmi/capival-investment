import React from "react";

import { Input, Button, Header } from "../atoms";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="bg-blueOne m-auto md:w-[50%] lg:w-[40%] xl:w-[34%] mt-16 rounded-3xl">
        <p className="text-2xl text-redOne py-8 text-center">
          Login to your Account
        </p>
        <form className="px-10">
          <Input
            placeholder="Username"
            icon={process.env.PUBLIC_URL + "assets/icons/profile.svg"}
          />
          <Input
            placeholder="Password"
            icon={process.env.PUBLIC_URL + "assets/icons/lock.svg"}
          />
          <Button buttonText="Login" className="mt-6" borderRadius="30" />
          <p className="text-sm font-medium text-blueThree py-6 text-center">
            Forget Password?
          </p>
        </form>
      </div>
    </div>
  );
};

export { Login };

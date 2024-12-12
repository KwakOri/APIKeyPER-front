"use client";

import Button from "@/components/Buttons/Button";
import Input from "@/components/Input";
import PageTitle from "@/components/PageTitle";
import SVGIcon from "@/components/SVGIcon";
import Mobile from "@/layouts/Mobile";
import { useState } from "react";

const SignUpPage = () => {
  const [isEmailValid, setIsEmailValid] = useState(false);

  return (
    <Mobile>
      <div className="w-full h-full px-14 flex flex-col justify-center">
        <div className="flex justify-center items-center h-[120px] w-full mb-[60px]">
          <PageTitle>SIGN UP</PageTitle>
        </div>
        <div className="flex flex-col gap-3">
          <Input label={"username"} id={"username"} placeholder={"apikeyper"} />
          <div className={"w-full flex items-end gap-3"}>
            <Input
              label={"email"}
              id={"email"}
              placeholder={"apikeyper@keeper.com"}
            />
            <Button className={"w-11"}>
              <SVGIcon icon={"IC_Success"} className="fill-white" />
            </Button>
          </div>
          <Input label={"password"} id={"password"} placeholder={"********"} />
          <Input
            label={"confirm password"}
            id={"confirmPassword"}
            placeholder={"********"}
          />
          <Button className="mt-2">
            <p className={"text-sm"}>DONE</p>
          </Button>
        </div>
      </div>
    </Mobile>
  );
};

export default SignUpPage;

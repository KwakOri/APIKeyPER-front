"use client";

import Button from "@/components/Buttons/Button";
import Input from "@/components/Input";
import PageTitle from "@/components/PageTitle";
import SVGIcon from "@/components/SVGIcon";
import { useForm } from "@/hooks/inputs/useForm";
import Mobile from "@/layouts/Mobile";
import { signUp, validateEmail } from "@/service/service.auth";
import { getPagePath } from "@/utils/urls/getPathname";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export interface SignUpFormTypes {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialValue: SignUpFormTypes = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpPage = () => {
  const router = useRouter();
  const [isEmailValid, setIsEmailValid] = useState(false);

  const [values, onChange] = useForm<SignUpFormTypes>({ initialValue });
  const { mutate: mutateValidateEmail } = useMutation({
    mutationFn: () => validateEmail(values.email),
    onSuccess: () => {
      setIsEmailValid(true);
      return alert("사용 가능한 이메일입니다.");
    },
    onError: (error: AxiosError) => {
      setIsEmailValid(false);
      if (error.status === 409) return alert("이미 가입된 이메일입니다.");
      return alert("잘못된 입력입니다.");
    },
  });

  const { mutate: mutateSignUp } = useMutation({
    mutationFn: () => signUp(values),
    onSuccess: () => {
      alert("회원가입이 완료되었습니다. 이메일을 확인해주세요.");
      router.replace(getPagePath.logInPage());
    },
  });

  const handleValidateEmail = () => {
    mutateValidateEmail();
  };

  const handleSignUp = () => {
    if (!isEmailValid) return alert("이메일 중복 확인을 먼저 해주세요.");
    mutateSignUp();
  };

  return (
    <Mobile>
      <div className="w-full h-full px-14 flex flex-col justify-center">
        <div className="flex justify-center items-center h-[120px] w-full mb-[60px]">
          <PageTitle>SIGN UP</PageTitle>
        </div>
        <div className="flex flex-col gap-3">
          <Input
            label={"username"}
            id={"username"}
            placeholder={"apikeyper"}
            value={values.username}
            onChange={onChange}
          />
          <div className={"w-full flex items-end gap-3"}>
            <Input
              label={"email"}
              id={"email"}
              placeholder={"apikeyper@keeper.com"}
              value={values.email}
              onChange={(e) => {
                onChange(e);
                setIsEmailValid(false);
              }}
            />
            {isEmailValid ? (
              <Button
                className={
                  "w-11 border border-primary-45 bg-white sm:hover:brightness-110"
                }
                onClick={handleValidateEmail}
              >
                <SVGIcon icon={"IC_Success"} className="fill-primary-45" />
              </Button>
            ) : (
              <Button className={"w-11"} onClick={handleValidateEmail}>
                <SVGIcon icon={"IC_Success"} className="fill-white" />
              </Button>
            )}
          </div>
          <Input
            label={"password"}
            id={"password"}
            placeholder={"********"}
            value={values.password}
            onChange={onChange}
          />
          <Input
            label={"confirm password"}
            id={"confirmPassword"}
            placeholder={"********"}
            value={values.confirmPassword}
            onChange={onChange}
          />
          <Button className="mt-2" onClick={handleSignUp}>
            <p className={"text-sm"}>DONE</p>
          </Button>
        </div>
      </div>
    </Mobile>
  );
};

export default SignUpPage;

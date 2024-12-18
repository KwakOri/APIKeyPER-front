"use client";

import Button from "@/components/Buttons/Button";
import Input from "@/components/Input";
import Loading from "@/components/Loading";
import PageTitle from "@/components/PageTitle";
import { useForm } from "@/hooks/inputs/useForm";
import Mobile from "@/layouts/Mobile";
import { logIn } from "@/service/service.auth";
import { getPagePath } from "@/utils/urls/getPathname";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";

export interface LogInFormTypes {
  email: string;
  password: string;
}

const initialValue: LogInFormTypes = {
  email: "",
  password: "",
};

const LogInPage = () => {
  const [values, onChange] = useForm<LogInFormTypes>({ initialValue });
  const router = useRouter();
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (formData: LogInFormTypes) => logIn(formData),
    onSuccess: () => {
      alert("로그인되었습니다.");
      router.replace(getPagePath.homePage());
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const handleClickLogInButton = () => {
    mutate(values);
  };

  if (isPending || isSuccess) return <Loading />;

  return (
    <Mobile>
      <div className="w-full h-full px-14 flex flex-col justify-center">
        <div className="flex justify-center items-center h-[120px] w-full mb-[60px]">
          <PageTitle>APIKeyPER</PageTitle>
        </div>
        <div className={"flex flex-col gap-3"}>
          <Input
            label={"email"}
            id={"email"}
            placeholder={"apikeyper@keeper.com"}
            value={values.email}
            onChange={onChange}
          />
          <Input
            label={"password"}
            id={"password"}
            placeholder={"********"}
            value={values.password}
            onChange={onChange}
          />
          <div className="flex flex-col gap-4 py-2">
            <Button onClick={handleClickLogInButton}>
              <span className={"text-sm"}>LOG IN</span>
            </Button>
            <Button>
              <Link href={getPagePath.signUpPage()}>
                <span className={"text-sm"}>SIGN UP</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Mobile>
  );
};

export default LogInPage;

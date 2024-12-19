import { LogInFormTypes } from "@/app/(provider)/(root)/(public)/auth/log-in/page";
import { SignUpFormTypes } from "@/app/(provider)/(root)/(public)/auth/sign-up/page";
import { privateInstance, publicInstance } from "./instances";

export const validateEmail = async (email: string) => {
  const body = { email };
  const res = await publicInstance.post("/auth/sign-up/validation/email", body);
  console.log(res);
  return res;
};

export const signUp = async (formData: SignUpFormTypes) => {
  const body = {
    username: formData.username,
    email: formData.email,
    password: formData.password,
  };
  const res = await publicInstance.post("/auth/sign-up", body);
  return res;
};

export const verifyPassword = async (password: string) => {
  const body = {
    password,
  };
  const res = await privateInstance.post("/auth/password", body);
  return res;
};

export const logIn = async (formData: LogInFormTypes) => {
  const res = await publicInstance.post("/auth/log-in", formData);
  const resHeader = res.headers["authorization"] as string;
  const accessToken = resHeader?.split(" ")[1];
  localStorage.setItem("ACCESS_TOKEN", accessToken);

  return accessToken;
};

export const logOut = async () => {
  localStorage.removeItem("ACCESS_TOKEN");
  const res = await privateInstance.delete("/auth/log-out");
  return res;
};

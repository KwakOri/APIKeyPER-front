import { privateInstance, publicInstance } from "./service";

export const logIn = async () => {
  const res = await publicInstance.post("/auth/log-in", {
    email: "test01@test.com",
    password: "test1234",
  });
  console.log(res);
  const resHeader = res.headers["authorization"] as string;
  const accessToken = resHeader?.split(" ")[1];
  localStorage.setItem("ACCESS_TOKEN", accessToken);

  return accessToken;
};

export const logOut = async () => {
  const res = await privateInstance.delete("/auth/log-out");
  localStorage.removeItem("ACCESS_TOKEN");
};

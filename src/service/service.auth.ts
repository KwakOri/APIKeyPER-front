import { privateInstance, publicInstance } from "./instances";

export const logIn = async () => {
  const res = await publicInstance.post("/auth/log-in", {
    email: "test01@test.com",
    password: "test1234",
  });
  const resHeader = res.headers["authorization"] as string;
  const accessToken = resHeader?.split(" ")[1];
  localStorage.setItem("ACCESS_TOKEN", accessToken);

  return accessToken;
};

export const logOut = async () => {
  const res = await privateInstance.delete("/auth/log-out");
  localStorage.removeItem("ACCESS_TOKEN");
};

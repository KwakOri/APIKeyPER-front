import { instance } from "./service";

export const logIn = async () => {
  const res = await instance.post("/auth/log-in", {
    email: "test01@test.com",
    password: "test1234",
  });

  console.log(res);
  const accessToken = res.data.accessToken;
  localStorage.setItem("ACCESS_TOKEN", accessToken);
};

export const logOut = async () => {
  const res = await instance.delete("/auth/log-out");
  console.log(res);
  localStorage.removeItem("ACCESS_TOKEN");
};

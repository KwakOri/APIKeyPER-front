import { instance } from "./service";

export const logIn = async () => {
  const res = await instance.post("/auth/log-in", {
    email: "test01@test.com",
    password: "test1234",
  });
  console.log("res => ", res);
  // console.log("res.data => ", res.data);
  // console.log("res.headers => ", res.headers);
  // console.log("res.config => ", res.config);

  const resHeader = res.headers["authorization"] as string;

  console.log("resHeader => ", resHeader);

  const accessToken = resHeader?.split(" ")[1];

  console.log("accessToken => ", accessToken);

  console.log(res);

  localStorage.setItem("ACCESS_TOKEN", accessToken);

  return accessToken;
};

export const logOut = async () => {
  const res = await instance.delete("/auth/log-out");
  console.log(res);
  localStorage.removeItem("ACCESS_TOKEN");
};

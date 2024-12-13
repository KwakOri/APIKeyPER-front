import { AxiosInstance } from "axios";

export const getAccessToken = () => {
  if (!localStorage) return undefined;
  return localStorage.getItem("ACCESS_TOKEN");
};

export const tokenRefresh = async (instance: AxiosInstance) => {
  const res = await instance.get("/auth/refresh");

  const resHeader = res.headers["authorization"] as string;

  const accessToken = resHeader?.split(" ")[1];

  console.log("token is refreshed successfully");

  console.log(accessToken);

  localStorage.setItem("ACCESS_TOKEN", accessToken); // 세션 스토리지에 액세스 토큰 저장

  return accessToken;
}; // tokenRefresh() - 토큰을 갱신해주는 함수

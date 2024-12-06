import { AxiosInstance } from "axios";

export const getAccessToken = () => {
  return localStorage.getItem("ACCESS_TOKEN");
};

export const tokenRefresh = async (instance: AxiosInstance) => {
  const {
    data: { accessToken },
  } = await instance.get("/refresh");

  console.log("token is refreshed successfully");

  localStorage.setItem("ACCESS_TOKEN", accessToken); // 세션 스토리지에 액세스 토큰 저장
}; // tokenRefresh() - 토큰을 갱신해주는 함수

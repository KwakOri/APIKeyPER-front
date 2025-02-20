import { logOut } from "@/service/service.auth";
import { getAccessToken, tokenRefresh } from "@/utils/auth";
import axios, { AxiosError } from "axios";

export const privateInstance = axios.create();
// instance.defaults.headers["Access-Control-Allow-Credentials"] = true;
privateInstance.defaults.withCredentials = true;
privateInstance.defaults.baseURL = `${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/api`;
privateInstance.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    if (!accessToken) {
      window.location.href = "/auth/log-in";
      return config;
    }
    config.headers["Content-Type"] = "application/json";
    config.headers["Authorization"] = `Bearer ${accessToken}`;
    return config;
  },
  (error: AxiosError) => {
    console.log(error);
    return Promise.reject(error);
  }
);

privateInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log(error);
    if (error.response?.status === 403) {
      try {
        const accessToken = await tokenRefresh(privateInstance);
        error.config.headers.Authorization = `Bearer ${accessToken}`;
        console.log("accessToken refreshed");
        // 중단된 요청을(에러난 요청)을 토큰 갱신 후 재요청
        return privateInstance(error.config);
      } catch (err) {
        console.log(err);
      }
    } else if (error.response?.status === 401) {
      alert("인증정보가 만료되었습니다.");
      logOut();
    }
  }
);

export const publicInstance = axios.create();
publicInstance.defaults.withCredentials = true;
publicInstance.defaults.baseURL = `${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/api`;
publicInstance.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
    config.headers["Authorization"] = `Bearer null`;
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

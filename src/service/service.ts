import { logOut } from "@/service/auth";
import { getAccessToken, tokenRefresh } from "@/utils/auth";
import axios, { AxiosError } from "axios";

export const instance = axios.create();
// instance.defaults.headers["Access-Control-Allow-Credentials"] = true;
instance.defaults.withCredentials = true;
instance.defaults.baseURL = "http://localhost:3000/api";

instance.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();

    if (!accessToken) {
      window.location.href = "/log-in";
      return config;
    }

    config.headers["Content-Type"] = "application/json";
    config.headers["Authorization"] = `Bearer ${accessToken}`;
    // console.log(config);

    return config;
  },
  (error: AxiosError) => {
    // console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log(error);
    if (error.response?.status === 403) {
      const accessToken = await tokenRefresh(instance);

      error.config.headers.Authorization = `Bearer ${accessToken}`;
      // 중단된 요청을(에러난 요청)을 토큰 갱신 후 재요청
      return instance(error.config);
    } else if (error.response?.status === 401) {
      logOut();
    }
  }
);

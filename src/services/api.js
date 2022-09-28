import axios from "axios";
import TokenService from "./token.service";

const baseURL = process.env.REACT_APP_BASE_URL_LIVE;

const apiResource = () => {
  // console.log(store);

  const api = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Origin": URL,
      "Access-Control-Allow-Credentials": true,
    },
  });

  api.interceptors.request.use(
    (config) => {
      const token = window.sessionStorage.getItem("accessToken");

      if (!token) return config;
      config.headers["Authorization"] = `Bearer ${token}`;
      return config;
    },
    (error) => Promise.reject(error)
  );

  api.interceptors.response.use(
    (response) =>
      new Promise((resolve, reject) => {
        resolve(response);
      }),
    async (error) => {
      console.log("error from api", error);
      if (error?.response?.status === 403) {
        TokenService.removeUser();
        window.location = "/";
      } else if (error?.response?.status === 401) {
        // call refresh token
        // window.location = "/";
        const originalConfig = error.config;
        if (originalConfig.url !== "/v1/admin/login" && error?.response) {
          // Access Token was expired
          // if (error.response.status === 400 && !originalConfig._retry) {
          //   originalConfig._retry = true;
          //   try {
          //     const rs = await api.post("/api/v1/authenticate/refreshtoken", {
          //       refreshToken: TokenService.getLocalRefreshToken(),
          //     });
          //     const { accessToken } = rs.data;
          //     TokenService.updateLocalAccessToken(accessToken);
          //     return api(originalConfig);
          //   } catch (_error) {
          //     return Promise.reject(_error);
          //   }
          // }
        }
      } else {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
      return Promise.reject(error);
    }
  );

  return api;
};

export const api = apiResource();

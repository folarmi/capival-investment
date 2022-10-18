import axios from "axios";
import TokenService from "./token.service";

const baseURL = process.env.REACT_APP_BASE_URL_LIVE;

const apiResource = () => {
  // console.log(store);

  const api = axios.create({
    baseURL,
  });

  api.interceptors.request.use(
    (config) => {
      const token = window.sessionStorage.getItem("accessToken");

      if (!token) return config;

      config.headers["Authorization"] = `Bearer ${token}`;
      config.headers["Access-Control-Allow-Origin"] = `*`;
      config.headers["Access-Control-Allow-Methods"] =
        "GET, POST, PATCH, PUT, DELETE, OPTIONS";
      config.headers["Access-Control-Allow-Headers"] =
        "Content-Type, Accept, Authorization, X-Requested-With, X-Auth-Token, Origin, Application";
      return config;
    },
    (error) => Promise.reject(error)
  );

  // axios.interceptors.request.use(
  //   config => {
  //     config.headers['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
  //         return config;
  //     },
  //     error => {
  //         return Promise.reject(error);
  //     }
  // );

  api.interceptors.response.use(
    (response) =>
      new Promise((resolve, reject) => {
        // console.log(response);
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

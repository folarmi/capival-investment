import UrlRoute from "../helpers/UrlRouter.js";
import { api } from "./api";

const verifyBVN = async (bvn) => {
  const response = await api.get(`${UrlRoute.verifyBVN}/${bvn}`);
  return response.data;
};

const bvnOtpValidation = async (values) => {
  const response = await api.get(
    `${UrlRoute.bvnOtpValidation}/${values.bvn}/${values.otp}`
  );
  return response.data;
};

const registerUser = async (values) => {
  const response = await api.post(UrlRoute.registerUser, values);
  return response.data;
};

const loginUser = async (values) => {
  console.log("service file");
  const response = await api.post(UrlRoute.login, values);
  return response.data;
};

const forgotPassword = async (values) => {
  const response = await api.post(UrlRoute.forgotPassword, values);
  return response.data;
};

const forgotPasswordOTP = async (values) => {
  const response = await api.post(UrlRoute.forgotPasswordOTP, values);
  return response.data;
};

const changePassword = async (values) => {
  const response = await api.post(UrlRoute.changePassword, values);
  return response.data;
};

const logout = () => {
  sessionStorage.clear();
};

// const deleteCustomer = async (values) => {
//   const response = await api.delete(`${UrlRoute.getSingleCustomer}/${values}`);
//   return response.data;
// };

const authService = {
  verifyBVN,
  bvnOtpValidation,
  registerUser,
  loginUser,
  forgotPassword,
  forgotPasswordOTP,
  changePassword,
  logout,
};

export default authService;

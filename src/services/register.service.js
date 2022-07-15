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

// const toggleLiveConsumers = async (values) => {
//   const response = await api.post(
//     `${UrlRoute.toggleLiveCustomer}/${values}/toggle-live`
//   );
//   return response.data;
// };

// const deleteCustomer = async (values) => {
//   const response = await api.delete(`${UrlRoute.getSingleCustomer}/${values}`);
//   return response.data;
// };

const registerService = {
  verifyBVN,
  bvnOtpValidation,
};

export default registerService;

import UrlRoute from "../helpers/UrlRouter.js";
import { api } from "./api";

const billPaymentCategories = async () => {
  const response = await api.get(`${UrlRoute.getBillPaymentCategories}`);
  return response.data;
};

// const deleteCustomer = async (values) => {
//   const response = await api.delete(`${UrlRoute.getSingleCustomer}/${values}`);
//   return response.data;
// };

const billPaymentService = {
  billPaymentCategories,
};

export default billPaymentService;

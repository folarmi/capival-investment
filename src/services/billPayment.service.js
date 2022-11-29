import UrlRoute from "../helpers/UrlRouter.js";
import { api } from "./api";

const billPaymentCategories = async () => {
  const response = await api.get(`${UrlRoute.getBillPaymentCategories}`);
  return response.data;
};

const billPaymentCategory = async (id) => {
  const response = await api.get(`${UrlRoute.billPaymentCategory}/${id}`);
  return response.data;
};

const getBillerProducts = async (id) => {
  const response = await api.get(`${UrlRoute.getBillerProducts}/${id}`);
  return response.data;
};

const validateBillerProduct = async (values) => {
  const response = await api.post(UrlRoute.validateBillerProduct, values);
  return response.data;
};

const initiateTransaction = async (values) => {
  const response = await api.post(UrlRoute.initiateTransaction, values);
  return response.data;
};

const processPayment = async (values) => {
  const response = await api.post(UrlRoute.processPayment, values);
  return response.data;
};

const billPaymentService = {
  billPaymentCategories,
  billPaymentCategory,
  getBillerProducts,
  validateBillerProduct,
  initiateTransaction,
  processPayment,
};

export default billPaymentService;

// "data": {
//   "customerId": "0136201464",
//   "billPaymentProductId": "jos_electric_postpaid",
//   "name": "FLORENCE OKNKWO  ",
//   "email": null,
//   "address": null,
//   "amount": null,
//   "maximumAmount": null,
//   "minimumAmount": null
// }

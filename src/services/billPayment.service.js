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

const billPaymentService = {
  billPaymentCategories,
  billPaymentCategory,
  getBillerProducts,
  validateBillerProduct,
};

export default billPaymentService;

import UrlRoute from "../helpers/UrlRouter.js";
import { api } from "./api";

const getAirtimeBillers = async (values) => {
  const response = await api.get(UrlRoute.getAirtimeBillers);
  return response.data;
};

const getAllDataBillers = async (values) => {
  const response = await api.get(UrlRoute.getAllDataBillers);
  return response.data;
};

const getDataProducts = async (airtimeType) => {
  const response = await api.post(
    `bills-payment/get-airtime-billers-products`,
    airtimeType
  );
  return response.data;
};

const purchaseAirtime = async (values) => {
  const response = await api.post(UrlRoute.purchaseAirtime, values);

  return response.data;
};

const purchaseData = async (values) => {
  const response = await api.post(UrlRoute.purchaseData, values);
  return response.data;
};

const getAllBettingBillers = async (values) => {
  const response = await api.get(UrlRoute.getAllBettingBillers);
  return response.data;
};

const validateBettingAccount = async (values) => {
  const response = await api.post(UrlRoute.validateBettingAccount, values);
  return response.data;
};

const fundBettingWallet = async (values) => {
  const response = await api.post(UrlRoute.fundBettingWallet, values);
  return response.data;
};

const mobileTopUpService = {
  getAirtimeBillers,
  getAllDataBillers,
  getDataProducts,
  purchaseAirtime,
  getAllBettingBillers,
  purchaseData,
  validateBettingAccount,
  fundBettingWallet,
};

export default mobileTopUpService;

import UrlRoute from "../helpers/UrlRouter.js";
import { api } from "./api";

const getRecentTransactionHistory = async () => {
  const response = await api.get(`${UrlRoute.getTransactionHistory}`);
  return response.data;
};

const getDatedTransactionHistory = async () => {
  const response = await api.post(`${UrlRoute.datedTransactionHistory}`);
  return response.data;
};

const capivalTransfer = async (values) => {
  const response = await api.post(UrlRoute.capivalTransfer, values);
  return response.data;
};

const otherBanksTransfer = async (values) => {
  const response = await api.post(UrlRoute.otherBanksTransfer, values);
  return response.data;
};

const getTransactionPinStatus = async () => {
  const response = await api.get(UrlRoute.checkTransactionPinStatus);
  return response.data;
};

const validateAccount = async (acctNo) => {
  const response = await api.get(`${UrlRoute.validateAccount}/${acctNo}`);
  return response.data;
};

const generateAccountStatement = async () => {
  const response = await api.post(`${UrlRoute.generateAccountStatement}`);
  return response.data;
};

const transactionHistoryService = {
  getRecentTransactionHistory,
  capivalTransfer,
  otherBanksTransfer,
  getTransactionPinStatus,
  validateAccount,
  generateAccountStatement,
  getDatedTransactionHistory,
};

export default transactionHistoryService;

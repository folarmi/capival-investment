import UrlRoute from "../helpers/UrlRouter.js";
import { api } from "./api";

const getRecentTransactionHistory = async () => {
  const response = await api.get(`${UrlRoute.getTransactionHistory}`);
  return response.data;
};

const getDatedTransactionHistory = async (values) => {
  const response = await api.post(UrlRoute.datedTransactionHistory, values);
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

const validateInterAccount = async (values) => {
  const response = await api.post(UrlRoute.validateInterAccount, values);
  return response.data;
};

const generateAccountStatement = async (values) => {
  const response = await api.post(UrlRoute.generateAccountStatement, values);
  return response.data;
};

const saveInternalBeneficiary = async (values) => {
  const response = await api.post(UrlRoute.saveInternalBeneficiary, values);
  return response.data;
};

const saveExternalBeneficiary = async (values) => {
  const response = await api.post(UrlRoute.saveExternalBeneficiary, values);
  return response.data;
};

const getInternalBeneficiaries = async () => {
  const response = await api.get(`${UrlRoute.getInternalBeneficiaries}`);
  return response.data;
};

const getExternalBeneficiaries = async () => {
  const response = await api.get(`${UrlRoute.getExternalBeneficiaries}`);
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
  getInternalBeneficiaries,
  validateInterAccount,
  getExternalBeneficiaries,
  saveInternalBeneficiary,
  saveExternalBeneficiary,
};

export default transactionHistoryService;

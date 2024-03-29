import UrlRoute from "../helpers/UrlRouter.js";
import { api } from "./api";

const createNextOfKin = async (values) => {
  const response = await api.post(UrlRoute.createNextOfKin, values);
  return response.data;
};

const employerInfo = async (values) => {
  const response = await api.post(UrlRoute.employerInfo, values);
  return response.data;
};

const uploadKYCDocuments = async (values) => {
  const response = await api.post(UrlRoute.uploadKYCDocuments, values);
  return response.data;
};

const addBankAccount = async (values) => {
  const response = await api.post(UrlRoute.addBankAccounts, values);
  return response.data;
};

const reportIssue = async (values) => {
  const response = await api.post(UrlRoute.reportIssue, values);
  return response.data;
};

const addDebitCard = async (values) => {
  const response = await api.post(UrlRoute.addDebitCard, values);
  return response.data;
};

const accountsService = {
  createNextOfKin,
  employerInfo,
  uploadKYCDocuments,
  reportIssue,
  addBankAccount,
  addDebitCard,
};

export default accountsService;

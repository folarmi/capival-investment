import UrlRoute from "../helpers/UrlRouter.js";
import { api } from "./api";

const getGender = async () => {
  const response = await api.get(`${UrlRoute.getGender}`);
  return response.data;
};

const getMaritalStatus = async () => {
  const response = await api.get(`${UrlRoute.getMaritalStatus}`);
  return response.data;
};

const getAllStates = async () => {
  const response = await api.get(`${UrlRoute.getStates}`);
  return response.data;
};

const getStateLga = async (id) => {
  const response = await api.get(`${UrlRoute.getLGAs}/${id}`);
  return response.data;
};

const getLoanTypes = async () => {
  const response = await api.get(`${UrlRoute.getLoanTypes}`);
  return response.data;
};

const getTenure = async () => {
  const response = await api.get(`${UrlRoute.tenure}`);
  return response.data;
};

const getRepaymentChannels = async () => {
  const response = await api.get(`${UrlRoute.repaymentChannels}`);
  return response.data;
};

const getBankStatementType = async () => {
  const response = await api.get(`${UrlRoute.bankStatementType}`);
  return response.data;
};

const getAllBanks = async () => {
  const response = await api.get(`${UrlRoute.getAllBanks}`);
  return response.data;
};

const getWalletBalance = async () => {
  const response = await api.get(`${UrlRoute.getWalletBalance}`);
  return response.data;
};

const getRelationshipOfficer = async () => {
  const response = await api.get(`${UrlRoute.getRelationshipOfficer}`);
  return response.data;
};

const getHelpTopics = async () => {
  const response = await api.get(`${UrlRoute.helpTopics}`);
  return response.data;
};

const getAllCompanies = async () => {
  const response = await api.get(`${UrlRoute.getAllEmployers}`);
  return response.data;
};

const getDashboardFeatures = async () => {
  const response = await api.get(`${UrlRoute.getDashboardFeatures}`);
  return response.data;
};

const getTargetCategories = async () => {
  const response = await api.get(`${UrlRoute.targetCategories}`);
  return response.data;
};

const getSavingsFrequency = async () => {
  const response = await api.get(`${UrlRoute.savingsFrequency}`);
  return response.data;
};

const getFundingSource = async () => {
  const response = await api.get(`${UrlRoute.sourceOfFunding}`);
  return response.data;
};

const preferredTime = async () => {
  const response = await api.get(`${UrlRoute.preferredTime}`);
  return response.data;
};

const reasonForBreaking = async () => {
  const response = await api.get(`${UrlRoute.reasonForBreaking}`);
  return response.data;
};

const tenureAndRate = async () => {
  const response = await api.get(`${UrlRoute.tenureAndRate}`);
  return response.data;
};

const payBackDate = async (id) => {
  const response = await api.get(`${UrlRoute.payBackDate}/${id}`);
  return response.data;
};

const utilsService = {
  getGender,
  getMaritalStatus,
  getAllStates,
  getStateLga,
  getLoanTypes,
  getTenure,
  getRepaymentChannels,
  getBankStatementType,
  getAllBanks,
  getWalletBalance,
  getRelationshipOfficer,
  getHelpTopics,
  getAllCompanies,
  getDashboardFeatures,
  getTargetCategories,
  getSavingsFrequency,
  getFundingSource,
  preferredTime,
  reasonForBreaking,
  tenureAndRate,
  payBackDate,
};

export default utilsService;

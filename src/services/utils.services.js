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
};

export default utilsService;

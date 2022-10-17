import UrlRoute from "../helpers/UrlRouter.js";
import { api } from "./api";

const createTargetSavings = async (values) => {
  const response = await api.post(UrlRoute.createTargetSavings, values);
  return response.data;
};

const getAllTargetSavings = async () => {
  const response = await api.get(`${UrlRoute.getAllTargetSavings}`);
  return response.data;
};

const getAllTermDepositTenure = async () => {
  const response = await api.get(`${UrlRoute.getAllTermDepositTenure}`);
  return response.data;
};

const getAllSafeLock = async () => {
  const response = await api.get(`${UrlRoute.getAllSafeLock}`);
  return response.data;
};

const getTermDepositTenure = async () => {
  const response = await api.get(`${UrlRoute.getTermDepositTenure}`);
  return response.data;
};

const createSafeLock = async (values) => {
  const response = await api.post(UrlRoute.createSafeLock, values);
  return response.data;
};

const getInterestRate = async (values) => {
  const response = await api.post(UrlRoute.getInterestRate, values);
  return response.data;
};

const createTermDeposit = async (values) => {
  const response = await api.post(UrlRoute.createTermDeposit, values);
  return response.data;
};

const getSingleTargetSaving = async (id) => {
  const response = await api.get(`${UrlRoute.getSingleTargetSaving}/${id}`);
  return response.data;
};

const requestInvestmentLetter = async (id) => {
  const response = await api.get(`${UrlRoute.requestInvestmentLetter}/${id}`);
  return response.data;
};

const liquidateInvestment = async (id) => {
  const response = await api.get(`${UrlRoute.liquidateInvestment}/${id}`);
  return response.data;
};

const quickTopUp = async (id, values) => {
  const response = await api.post(`${UrlRoute.quickTopUp}/${id}`, values);
  return response.data;
};

const extendTargetSavings = async (id, values) => {
  const response = await api.post(
    `${UrlRoute.extendTargetSavings}/${id}`,
    values
  );
  return response.data;
};

const changeFundingSource = async (id, values) => {
  const response = await api.post(
    `${UrlRoute.changeFundingSource}/${id}`,
    values
  );
  return response.data;
};

const breakTargetSavings = async (id, values) => {
  const response = await api.post(
    `${UrlRoute.breakTargetSavings}/${id}`,
    values
  );
  return response.data;
};

const investmentService = {
  createTargetSavings,
  getSingleTargetSaving,
  quickTopUp,
  getAllTargetSavings,
  extendTargetSavings,
  changeFundingSource,
  breakTargetSavings,
  createSafeLock,
  getAllSafeLock,
  getInterestRate,
  createTermDeposit,
  getTermDepositTenure,
  getAllTermDepositTenure,
  requestInvestmentLetter,
  liquidateInvestment,
};

export default investmentService;

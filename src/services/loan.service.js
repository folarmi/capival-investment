import UrlRoute from "../helpers/UrlRouter.js";
import { api } from "./api";

const getActiveLoans = async () => {
  const response = await api.get(`${UrlRoute.activeLoans}`);
  return response.data;
};

const getPendingLoans = async () => {
  const response = await api.get(`${UrlRoute.getPendingLoans}`);
  return response.data;
};

const getLoanDetails = async (loanId) => {
  const response = await api.get(`${UrlRoute.getLoanDetails}/${loanId}`);
  return response.data;
};

const createLoan = async (values) => {
  const response = await api.post(UrlRoute.createLoan, values);
  return response.data;
};

const loanService = {
  getActiveLoans,
  getPendingLoans,
  getLoanDetails,
  createLoan,
};

export default loanService;
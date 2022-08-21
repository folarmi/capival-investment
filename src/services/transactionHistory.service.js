import UrlRoute from "../helpers/UrlRouter.js";
import { api } from "./api";

const getRecentTransactionHistory = async () => {
  const response = await api.get(`${UrlRoute.getTransactionHistory}`);
  return response.data;
};

const capivalTransfer = async (values) => {
  const response = await api.post(UrlRoute.capivalTransfer, values);
  return response.data;
};

const transactionHistoryService = {
  getRecentTransactionHistory,
  capivalTransfer,
};

export default transactionHistoryService;

import UrlRoute from "../helpers/UrlRouter.js";
import { api } from "./api";

const getDebitCards = async (values) => {
  const response = await api.post(UrlRoute.getDebitCards, values);
  return response.data;
};

const debitCardService = {
  getDebitCards,
};

export default debitCardService;

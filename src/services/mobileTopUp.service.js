import UrlRoute from "../helpers/UrlRouter.js";
import { api } from "./api";

const getAirtimeBillers = async (values) => {
  const response = await api.get(UrlRoute.getAirtimeBillers);
  return response.data;
};

const mobileTopUpService = {
  getAirtimeBillers,
};

export default mobileTopUpService;

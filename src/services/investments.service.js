import UrlRoute from "../helpers/UrlRouter.js";
import { api } from "./api";

const createTargetSavings = async (values) => {
  const response = await api.post(UrlRoute.createTargetSavings, values);
  return response.data;
};

const investmentService = {
  createTargetSavings,
};

export default investmentService;

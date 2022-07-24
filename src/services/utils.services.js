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

const utilsService = {
  getGender,
  getMaritalStatus,
  getAllStates,
  getStateLga,
};

export default utilsService;

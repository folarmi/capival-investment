const verifyBVN = "accounts/bvn-verification";
const bvnOtpValidation = "accounts/bvn-verification/validate";
const getGender = "utils/gender";
const getMaritalStatus = "utils/marital-status";
const getStates = "utils/states";
const getLGAs = "utils/lga";
const registerUser = "auth/register";
const login = "auth/login";
const forgotPassword = "auth/forgot-password";
const forgotPasswordOTP = "auth/forgot-password/validate-otp";
const changePassword = "auth/change-password";
const getBillPaymentCategories = "bills-payment/get-categories";
const getTransactionHistory = "transactions/recent-transactions";

const UrlRoute = {
  verifyBVN,
  bvnOtpValidation,
  getGender,
  getMaritalStatus,
  getStates,
  getLGAs,
  registerUser,
  login,
  forgotPassword,
  forgotPasswordOTP,
  changePassword,
  getBillPaymentCategories,
  getTransactionHistory,
};

export default UrlRoute;

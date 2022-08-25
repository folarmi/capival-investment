const verifyBVN = "accounts/bvn-verification";
const setTransactionPin = "accounts/set-transaction-pin";
const resetTransactionPin = "accounts/reset-transaction-pin";
const bvnOtpValidation = "accounts/bvn-verification/validate";
const getWalletBalance = "accounts/wallet-balance";
const checkTransactionPinStatus = "accounts/check-pin-status";
const getRelationshipOfficer = "accounts/relationship-officer";
const getGender = "utils/gender";
const getMaritalStatus = "utils/marital-status";
const getStates = "utils/states";
const getLGAs = "utils/lga";
const getLoanTypes = "utils/loan-types";
const tenure = "utils/tenor";
const repaymentChannels = "utils/repayment-channels";
const bankStatementType = "utils/bank-statement-type";
const getAllBanks = "utils/bank-lists";
const registerUser = "auth/register";
const login = "auth/login";
const forgotPassword = "auth/forgot-password";
const forgotPasswordOTP = "auth/forgot-password/validate-otp";
const changePassword = "auth/change-password";
const getBillPaymentCategories = "bills-payment/get-categories";
const getTransactionHistory = "transactions/recent-transactions";
const getDebitCards = "payments/get_cards";
const getAirtimeBillers = "bills-payment/get-airtime-billers";
const capivalTransfer = "transactions/intra/transfer-fund";
const otherBanksTransfer = "transactions/inter/transfer-fund";
const validateAccount = "transactions/intra/validate-account";
const activeLoans = "loans/active-loans";
const getPendingLoans = "loans/pending-loans";
const getLoanDetails = "loans/loan-details";
const createLoan = "loans/create";
const helpTopics = "support/help-topics";

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
  getDebitCards,
  getAirtimeBillers,
  capivalTransfer,
  getLoanTypes,
  tenure,
  repaymentChannels,
  bankStatementType,
  getAllBanks,
  activeLoans,
  getPendingLoans,
  getLoanDetails,
  setTransactionPin,
  resetTransactionPin,
  createLoan,
  getWalletBalance,
  otherBanksTransfer,
  checkTransactionPinStatus,
  getRelationshipOfficer,
  helpTopics,
  validateAccount,
};

export default UrlRoute;

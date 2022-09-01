const verifyBVN = "accounts/bvn-verification";
const setTransactionPin = "accounts/set-transaction-pin";
const resetTransactionPin = "accounts/reset-transaction-pin";
const bvnOtpValidation = "accounts/bvn-verification/validate";
const getWalletBalance = "accounts/wallet-balance";
const checkTransactionPinStatus = "accounts/check-pin-status";
const getRelationshipOfficer = "accounts/relationship-officer";
const generateAccountStatement = "accounts/generate-statement";
const uploadKYCDocuments = "accounts/kyc_documents";
const employerInfo = "accounts/employer-details";
const getGender = "utils/gender";
const getMaritalStatus = "utils/marital-status";
const getStates = "utils/states";
const getLGAs = "utils/lga";
const getLoanTypes = "utils/loan-types";
const tenure = "utils/tenor";
const repaymentChannels = "utils/repayment-channels";
const bankStatementType = "utils/bank-statement-type";
const getAllBanks = "utils/bank-lists";
const getAllEmployers = "utils/all-companies";
const registerUser = "auth/register";
const login = "auth/login";
const forgotPassword = "auth/forgot-password";
const forgotPasswordOTP = "auth/forgot-password/validate-otp";
const changePassword = "accounts/change-password";
const getBillPaymentCategories = "bills-payment/get-categories";
const getTransactionHistory = "transactions/recent-transactions";
const datedTransactionHistory = "transactions/transaction-history";
const getInternalBeneficiaries =
  "transactions/intra/transfer-fund/fetch-beneficiary";
const getExternalBeneficiaries =
  "transactions/inter/transfer-fund/fetch-beneficiary";
const getDebitCards = "payments/get_cards";
const getAirtimeBillers = "bills-payment/get-airtime-billers";
const capivalTransfer = "transactions/intra/transfer-fund";
const otherBanksTransfer = "transactions/inter/transfer-fund";
const validateAccount = "transactions/intra/validate-account";
const validateInterAccount = "utils/validate-bank-account";
const activeLoans = "loans/active-loans";
const getPendingLoans = "loans/pending-loans";
const getLoanDetails = "loans/loan-details";
const createLoan = "loans/create";
const helpTopics = "support/help-topics";
const createNextOfKin = "accounts/next-of-kin";
const reportIssue = "support/report-issue";

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
  generateAccountStatement,
  datedTransactionHistory,
  createNextOfKin,
  getAllEmployers,
  employerInfo,
  uploadKYCDocuments,
  reportIssue,
  getInternalBeneficiaries,
  getExternalBeneficiaries,
  validateInterAccount,
};

export default UrlRoute;

const verifyBVN = "accounts/bvn-verification";
const setTransactionPin = "accounts/set-transaction-pin";
const resetTransactionPin = "accounts/reset-transaction-pin";
const bvnOtpValidation = "accounts/bvn-verification/validate";
const getWalletBalance = "accounts/wallet-balance";
const checkTransactionPinStatus = "accounts/check-pin-status";
const getRelationshipOfficer = "accounts/relationship-officer";
const generateAccountStatement = "accounts/generate-statement";
const addDebitCard = "accounts/add-debit-card";
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
const getDashboardFeatures = "utils/get-dashboard-feature";
const registerUser = "auth/register";
const login = "auth/login";
const forgotPassword = "auth/forgot-password";
const forgotPasswordOTP = "auth/forgot-password/validate-otp";
const noAuthChangePassword = "accounts/change-password";
const changePassword = "auth/change-password";
const getBillPaymentCategories = "bills-payment/get-categories";
const billPaymentCategory = "bills-payment/get-billers/category";
const getBillerProducts = "bills-payment/biller/get-products";
const getTransactionHistory = "transactions/recent-transactions";
const datedTransactionHistory = "transactions/transaction-history";
const getInternalBeneficiaries =
  "transactions/intra/transfer-fund/fetch-beneficiary";
const getExternalBeneficiaries =
  "transactions/inter/transfer-fund/fetch-beneficiary";
const getDebitCards = "accounts/get-debit-card";
const getAirtimeBillers = "bills-payment/get-airtime-billers";
const capivalTransfer = "transactions/intra/transfer-fund";
const otherBanksTransfer = "transactions/inter/transfer-fund";
const validateAccount = "transactions/intra/validate-account";
const validateInterAccount = "utils/validate-bank-account";
const activeLoans = "loans/active-loans";
const getPendingLoans = "loans/pending-loans";
const getLoanDetails = "loans/loan-details";
const getLoanSchedule = "loans/get-repayment-schedule";
const createLoan = "loans/create";
const helpTopics = "support/help-topics";
const createNextOfKin = "accounts/next-of-kin";
const addBankAccounts = "accounts/add-bank-account";
const reportIssue = "support/report-issue";
const saveInternalBeneficiary =
  "transactions/intra/transfer-fund/store-beneficiary";
const saveExternalBeneficiary =
  "transactions/inter/transfer-fund/store-beneficiary";
const liquidateLoan = "loans/liquidate";
const validateBillerProduct = "bills-payment/biller/validate-customer";
const initiateTransaction = "bills-payment/biller/initiate-transaction";
const processPayment = "bills-payment/biller/process-payment";
const targetCategories = "utils/target-savings/categories";
const savingsFrequency = "utils/target-savings/frequency";
const sourceOfFunding = "utils/target-savings/source";
const preferredTime = "utils/target-savings/timing";
const createTargetSavings = "investments/target-savings/create";
const getAllTargetSavings = "investments/target-savings";
const getSingleTargetSaving = "investments/target-savings/get-savings-details";
const quickTopUp = "investments/target-savings/quick-topup";
const extendTargetSavings = "investments/target-savings/increase-amount";
const changeFundingSource = "investments/target-savings/change-source";
const reasonForBreaking = "utils/target-savings/reason-for-breaking";
const breakTargetSavings = "investments/target-savings/break";
const tenureAndRate = "utils/safe-lock/rate-guide";
const payBackDate = "utils/safe-lock/payback-date";
const createSafeLock = "investments/safe-lock/create";
const getAllSafeLock = "investments/safe-lock";
const getInterestRate = "investments/term-deposit/get-interset-rate";
const createTermDeposit = "investments/term-deposit/create";
const getTermDepositTenure = "utils/term-deposit/tenor";
const getAllTermDepositTenure = "investments/term-deposit";
const requestInvestmentLetter = "investments/term-deposit/investment-letter";
const liquidateInvestment = "investments/term-deposit/liquidate-deposit";
const checkLoanEligibility = "/loans/cash-back/eligibility";
const applyForCashBackLoan = "loans/cash-back/apply";
const getLoanOffer = "loans/cash-back/loan-offer";
const getDataProducts = "bills-payment/get-airtime-billers-products/?billerId=";
const purchaseAirtime = "bills-payment/purchase-airtime";
const getAllBettingBillers = "bills-payment/get-betting-billers";
const purchaseData = "bills-payment/purchase-data-bundle";
const validateBettingAccount = "bills-payment/validate-betting-customer";
const fundBettingWallet = "bills-payment/fund-betting-wallet";
const getAllDataBillers = "bills-payment/get-data-billers";
const getTermDepositTermsAndCondition = "fixed-deposit/terms-and-conditions";

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
  saveInternalBeneficiary,
  saveExternalBeneficiary,
  addBankAccounts,
  getLoanSchedule,
  liquidateLoan,
  billPaymentCategory,
  getBillerProducts,
  validateBillerProduct,
  initiateTransaction,
  processPayment,
  getDashboardFeatures,
  addDebitCard,
  targetCategories,
  savingsFrequency,
  sourceOfFunding,
  preferredTime,
  createTargetSavings,
  noAuthChangePassword,
  getSingleTargetSaving,
  quickTopUp,
  getAllTargetSavings,
  extendTargetSavings,
  changeFundingSource,
  reasonForBreaking,
  breakTargetSavings,
  tenureAndRate,
  payBackDate,
  createSafeLock,
  getAllSafeLock,
  getInterestRate,
  createTermDeposit,
  getTermDepositTenure,
  getAllTermDepositTenure,
  requestInvestmentLetter,
  liquidateInvestment,
  checkLoanEligibility,
  applyForCashBackLoan,
  getLoanOffer,
  getDataProducts,
  purchaseAirtime,
  getAllBettingBillers,
  purchaseData,
  validateBettingAccount,
  fundBettingWallet,
  getAllDataBillers,
  getTermDepositTermsAndCondition,
};

export default UrlRoute;

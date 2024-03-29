import { Route, Routes } from "react-router-dom";

import {
  Dashboard,
  ForgotPassword,
  Loans,
  Login,
  Register,
  Wallet,
  ForgotPasswordOTP,
  CreateNewPassword,
  NewLoan,
  Repayment,
  NextRepayment,
  LoanDetails,
  SettleLoan,
  BillPayment,
  MobileTopUp,
  ConfirmationPage,
  Rewards,
  CapivalHomes,
  CapivalPension,
  TransactionHistory,
  BetsAndLotteries,
  DebitCard,
  OtherBanksTransfer,
  ChangePassword,
  ChangePin,
  TransferReceipt,
  RelationshipOfficer,
  Issue,
  GenerateStatement,
  UpdateKYC,
} from "../pages";
import BettingForm from "../pages/BetsAndLorries/BettingForm";
import { BetTransactionDetail } from "../pages/BetsAndLorries/BetTransactionDetail";
import { BillPaymentForm } from "../pages/BillPayment/BillPaymentForm";
import { SingleCategory } from "../pages/BillPayment/SingleCategory";
import CapivalTransfer from "../pages/CapivalTransfers";
import { MobileTopupPreview } from "../pages/MobileTopUp/MobileTopupPreview";
import { SelectedTransactionHistory } from "../pages/TransactionHistory/SelectedTransactionHistory";
import { FixedDeposits } from "../pages/Wallet/investments/fixedDeposit";
import { Confirmation } from "../pages/Wallet/investments/fixedDeposit/Confirmation";
import { Investments } from "../pages/Wallet/investments/Investments";
import { LockedSavings } from "../pages/Wallet/investments/lockedSavings";
import { CashBackOfferPage } from "../pages/Wallet/investments/lockedSavings/CashBackOfferPage";
import { CashBackPage } from "../pages/Wallet/investments/lockedSavings/CashBackPage";
import { LockedSavingsDetails } from "../pages/Wallet/investments/lockedSavings/LockedSavingsDetails";
import { LockedSavingsForm } from "../pages/Wallet/investments/lockedSavings/LockedSavingsForm";
import { LockedSavingsPreview } from "../pages/Wallet/investments/lockedSavings/LockedSavingsPreview";
import { Savings } from "../pages/Wallet/investments/savings";
import { SavingsConfirmation } from "../pages/Wallet/investments/savings/SavingsConfirmation";
import SavingsType from "../pages/Wallet/investments/SavingsType";
import { TargetSavings } from "../pages/Wallet/investments/targetSavings";
import { TargetSavingsDetails } from "../pages/Wallet/investments/targetSavings/TargetSavingsDetails";
import { TargetSavingsPreview } from "../pages/Wallet/investments/targetSavings/TargetSavingsPreview";
import { TermDeposit } from "../pages/Wallet/investments/termDeposit";
import { TermDepositDetail } from "../pages/Wallet/investments/termDeposit/TermDepositDetail";
import { TermDepositPreview } from "../pages/Wallet/investments/termDeposit/TermDepositPreview";
import { WalletDetails } from "../pages/Wallet/WalletDetails";
import { WalletTransactionDetails } from "../pages/Wallet/WalletTransactionDetails";
import { RequiredAuthDashboard } from "./RequiredAuth";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/create-profile" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/forgot-password-otp" element={<ForgotPasswordOTP />} />
      <Route path="/create-new-password" element={<CreateNewPassword />} />
      <Route element={<RequiredAuthDashboard />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="dashboard/wallet" element={<Wallet />} />
        <Route path="dashboard/wallet/details" element={<WalletDetails />} />
        <Route path="dashboard/wallet/investments" element={<Investments />} />
        <Route
          path="dashboard/wallet/investments/new-saving"
          element={<Savings />}
        />
        <Route
          path="dashboard/wallet/investments/saving-type"
          element={<SavingsType />}
        />
        <Route
          path="dashboard/wallet/investments/saving-type/term-deposit"
          element={<TermDeposit />}
        />
        <Route
          path="dashboard/wallet/investments/saving-type/term-deposit/preview"
          element={<TermDepositPreview />}
        />
        <Route
          path="dashboard/wallet/investments/saving-type/term-deposit/:id"
          element={<TermDepositDetail />}
        />
        <Route
          path="dashboard/wallet/investments/saving-type/target-savings"
          element={<TargetSavings />}
        />
        <Route
          path="dashboard/wallet/investments/saving-type/target-savings-preview"
          element={<TargetSavingsPreview />}
        />
        <Route
          path="dashboard/wallet/investments/saving-type/target-savings/:id"
          element={<TargetSavingsDetails />}
        />
        <Route
          path="dashboard/wallet/investments/saving-type/locked-savings"
          element={<LockedSavings />}
        />
        <Route
          path="dashboard/wallet/investments/saving-type/locked-savings/form"
          element={<LockedSavingsForm />}
        />
        <Route
          path="dashboard/wallet/investments/saving-type/locked-savings/form/preview"
          element={<LockedSavingsPreview />}
        />
        <Route
          path="dashboard/wallet/investments/saving-type/locked-savings/:id"
          element={<LockedSavingsDetails />}
        />
        <Route
          path="dashboard/wallet/investments/saving-type/locked-savings/:id/cashback_loan"
          element={<CashBackPage />}
        />
        <Route
          path="dashboard/wallet/investments/saving-type/locked-savings/:id/cashback_loan/offer"
          element={<CashBackOfferPage />}
        />
        <Route
          path="dashboard/wallet/investments/new-saving/confirm"
          element={<SavingsConfirmation />}
        />
        <Route
          path="dashboard/wallet/investments/new-fixed-deposits"
          element={<FixedDeposits />}
        />
        <Route
          path="dashboard/wallet/investments/new-fixed-deposits/confirm"
          element={<Confirmation />}
        />
        <Route
          path="dashboard/wallet/details/transaction-details"
          element={<WalletTransactionDetails />}
        />
        <Route path="dashboard/loans" element={<Loans />} />
        <Route path="dashboard/loans/new-loan" element={<NewLoan />} />
        <Route path="dashboard/loans/repayment" element={<Repayment />} />
        <Route
          path="dashboard/loans/next-repayment"
          element={<NextRepayment />}
        />
        <Route path="dashboard/loans/details" element={<LoanDetails />} />
        <Route path="dashboard/loans/settle-loan" element={<SettleLoan />} />
        <Route path="dashboard/bill-payment" element={<BillPayment />} />
        <Route
          path="dashboard/bill-payment/category"
          element={<SingleCategory />}
        />
        <Route
          path="dashboard/bill-payment/category/form"
          element={<BillPaymentForm />}
        />
        <Route path="dashboard/Airtime__Data" element={<MobileTopUp />} />
        <Route
          path="dashboard/Airtime__Data/preview"
          element={<MobileTopupPreview />}
        />
        <Route
          path="dashboard/bill-payment/Airtime__Data"
          element={<MobileTopUp />}
        />
        <Route
          path="dashboard/mobile-top-up/confirm"
          element={<ConfirmationPage />}
        />
        <Route path="dashboard/rewards" element={<Rewards />} />
        <Route path="dashboard/capival-homes" element={<CapivalHomes />} />
        <Route
          path="dashboard/capival-transfers"
          element={<CapivalTransfer />}
        />
        <Route
          path="dashboard/capival-transfers/receipt"
          element={<TransferReceipt />}
        />
        <Route path="dashboard/capival-pension" element={<CapivalPension />} />
        <Route
          path="dashboard/transaction-history"
          element={<SelectedTransactionHistory />}
        />
        <Route
          path="dashboard/bets-and-lotteries"
          element={<BetsAndLotteries />}
        />
        <Route
          path="dashboard/bets-and-lotteries/form"
          element={<BettingForm />}
        />
        <Route
          path="dashboard/bets-and-lotteries/confirm"
          element={<BetTransactionDetail />}
        />
        <Route path="dashboard/debit-card" element={<DebitCard />} />
        <Route path="dashboard/other-banks" element={<OtherBanksTransfer />} />
        <Route
          path="dashboard/profile/change-password"
          element={<ChangePassword />}
        />
        <Route path="dashboard/profile/change-pin" element={<ChangePin />} />
        <Route
          path="dashboard/wallet/relationship-officer"
          element={<RelationshipOfficer />}
        />
        <Route path="dashboard/wallet/report-an-issue" element={<Issue />} />
        <Route
          path="dashboard/generate-statement"
          element={<GenerateStatement />}
        />
        <Route path="dashboard/update-kyc" element={<UpdateKYC />} />
      </Route>
    </Routes>
  );
};

export default Index;

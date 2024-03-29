import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import multiStepReducer from "./slices/multistep";
import authReducer from "./slices/auth";
import utilsReducer from "./slices/utils";
import billPaymentReducer from "./slices/billPayment";
import transactionHistoryReducer from "./slices/transactionHistory";
import debitCardReducer from "./slices/debitCard";
import mobileTopUpReducer from "./slices/mobileTopup";
import loanReducer from "./slices/loan";
import accountReducer from "./slices/accounts";
import transactionsReducer from "./slices/transactions";
import dropDownReducer from "./slices/dropdown";
import investmentsReducer from "./slices/investments";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducers = combineReducers({
  multiStep: multiStepReducer,
  auth: authReducer,
  utils: utilsReducer,
  billPayment: billPaymentReducer,
  transactionHistory: transactionHistoryReducer,
  debitCard: debitCardReducer,
  mobileTopUp: mobileTopUpReducer,
  loans: loanReducer,
  accounts: accountReducer,
  transactions: transactionsReducer,
  dropdown: dropDownReducer,
  investments: investmentsReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: true,
});

export default store;

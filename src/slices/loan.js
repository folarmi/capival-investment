import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import LoanService from "../services/loan.service";

export const getActiveLoans = createAsyncThunk(
  "loan/getActiveLoan",
  async (values, { rejectWithValue }) => {
    try {
      const response = await LoanService.getActiveLoans(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getPendingLoansAsync = createAsyncThunk(
  "loan/getPendingLoan",
  async (values, { rejectWithValue }) => {
    try {
      const response = await LoanService.getPendingLoans(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getLoanDetailsAsync = createAsyncThunk(
  "loan/getLoanDetails",
  async (values, { rejectWithValue }) => {
    try {
      const response = await LoanService.getLoanDetails(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  getActiveLoanLoading: false,
  getPendingLoanLoading: false,
  getLoanDetailsLoading: false,
  activeLoans: "",
  pendingLoans: "",
  loanDetails: "",
};

const loanSlice = createSlice({
  name: "loan",
  initialState,
  reducers: {},
  extraReducers: {
    [getActiveLoans.pending]: (state) => {
      state.getActiveLoanLoading = true;
    },
    [getActiveLoans.fulfilled]: (state, action) => {
      state.activeLoans = action.payload.data;
      state.getActiveLoanLoading = false;
    },
    [getActiveLoans.rejected]: (state) => {
      state.getActiveLoanLoading = false;
    },
    [getPendingLoansAsync.pending]: (state) => {
      state.getPendingLoanLoading = true;
    },
    [getPendingLoansAsync.fulfilled]: (state, action) => {
      state.pendingLoans = action.payload.data;
      state.getPendingLoanLoading = false;
    },
    [getPendingLoansAsync.rejected]: (state) => {
      state.getPendingLoanLoading = false;
    },
    [getLoanDetailsAsync.pending]: (state) => {
      state.getLoanDetailsLoading = true;
    },
    [getLoanDetailsAsync.fulfilled]: (state, action) => {
      state.loanDetails = action.payload.data;
      state.getLoanDetailsLoading = false;
    },
    [getLoanDetailsAsync.rejected]: (state) => {
      state.getLoanDetailsLoading = false;
    },
  },
});

const { reducer } = loanSlice;

export default reducer;

// {
//   "CustomerID": "20201000027",
//   "LoanID": "3257",
//   "Loan_Amount": "500000.00",
//   "Loan_Tenure": "6",
//   "Interest": "36.6000",
//   "Loan_Type": "Capival Staff",
//   "Monthly_Repayments": "92452.00",
//   "AmountPaid": "156759.00",
//   "AmountLeft": "343243.00",
//   "Status": "Active",
//   "DateDisbursed": "2022-05-12 10:15:12",
//   "DateLiquidated": ""
// }

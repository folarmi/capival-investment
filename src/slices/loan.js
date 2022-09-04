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

export const createLoanAsync = createAsyncThunk(
  "loan/createLoan",
  async (values, { rejectWithValue }) => {
    try {
      const response = await LoanService.createLoan(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getLoanScheduleAsync = createAsyncThunk(
  "loan/loanSchedule",
  async (values, { rejectWithValue }) => {
    try {
      const response = await LoanService.getLoanSchedule(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const liquidateLoanAsync = createAsyncThunk(
  "loan/liquidateLoan",
  async (values, { rejectWithValue }) => {
    try {
      const response = await LoanService.liquidateLoan(values);
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
  createLoanIsLoading: false,
  getLoanScheduleIsLoading: false,
  liquidateLoanIsLoading: false,
  activeLoans: "",
  pendingLoans: "",
  loanDetails: "",
  loanSchedule: "",
  liquidateLoan: "",
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
    [createLoanAsync.pending]: (state) => {
      state.createLoanIsLoading = true;
    },
    [createLoanAsync.fulfilled]: (state) => {
      // state.loanDetails = action.payload.data;
      state.createLoanIsLoading = false;
    },
    [createLoanAsync.rejected]: (state) => {
      state.createLoanIsLoading = false;
    },
    [getLoanScheduleAsync.pending]: (state) => {
      state.getLoanScheduleIsLoading = true;
    },
    [getLoanScheduleAsync.fulfilled]: (state, action) => {
      state.loanSchedule = action.payload.data;
      state.getLoanScheduleIsLoading = false;
    },
    [getLoanScheduleAsync.rejected]: (state) => {
      state.getLoanScheduleIsLoading = false;
    },
    [liquidateLoanAsync.pending]: (state) => {
      state.liquidateLoanIsLoading = true;
    },
    [liquidateLoanAsync.fulfilled]: (state, action) => {
      state.liquidateLoan = action.payload.data;
      state.liquidateLoanIsLoading = false;
    },
    [liquidateLoanAsync.rejected]: (state) => {
      state.liquidateLoanIsLoading = false;
    },
  },
});

const { reducer } = loanSlice;

export default reducer;

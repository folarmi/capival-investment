import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import InvestmentsService from "../services/investments.service";

export const createTargetSavingsAsync = createAsyncThunk(
  "transactions/createTargetSavings",
  async (values, { rejectWithValue }) => {
    try {
      const response = await InvestmentsService.createTargetSavings(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAllSafeLockAsync = createAsyncThunk(
  "transactions/getAllSafeLock",
  async (values, { rejectWithValue }) => {
    try {
      const response = await InvestmentsService.getAllSafeLock(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getInterestRateAsync = createAsyncThunk(
  "transactions/getInterestRate",
  async (values, { rejectWithValue }) => {
    try {
      const response = await InvestmentsService.getInterestRate(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const createTermDepositAsync = createAsyncThunk(
  "transactions/createTermDeposit",
  async (values, { rejectWithValue }) => {
    try {
      const response = await InvestmentsService.createTermDeposit(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getTermDepositTenureAsync = createAsyncThunk(
  "transactions/getTermDepositTenure",
  async (values, { rejectWithValue }) => {
    try {
      const response = await InvestmentsService.getTermDepositTenure(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAllTermDepositTenureAsync = createAsyncThunk(
  "transactions/getAllTermDepositTenure",
  async (values, { rejectWithValue }) => {
    try {
      const response = await InvestmentsService.getAllTermDepositTenure(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const requestInvestmentLetterAsync = createAsyncThunk(
  "transactions/requestInvestmentLetter",
  async (values, { rejectWithValue }) => {
    try {
      const response = await InvestmentsService.requestInvestmentLetter(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const liquidateInvestmentAsync = createAsyncThunk(
  "transactions/liquidateInvestment",
  async (values, { rejectWithValue }) => {
    try {
      const response = await InvestmentsService.liquidateInvestment(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getSingleTargetSavingAsync = createAsyncThunk(
  "transactions/getSingleTargetSavings",
  async (values, { rejectWithValue }) => {
    try {
      const response = await InvestmentsService.getSingleTargetSaving(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const quickTopUpAsync = createAsyncThunk(
  "transactions/quickTopUp",
  async (values, { rejectWithValue }) => {
    try {
      const response = await InvestmentsService.quickTopUp(
        values?.savingsId,
        values?.values
      );
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const extendTargetSavingsAsync = createAsyncThunk(
  "transactions/extendTargetSavings",
  async (values, { rejectWithValue }) => {
    try {
      const response = await InvestmentsService.extendTargetSavings(
        values?.savingsId,
        values?.values
      );
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAllTargetSavingsAsync = createAsyncThunk(
  "transactions/getAllTargetSavings",
  async (values, { rejectWithValue }) => {
    try {
      const response = await InvestmentsService.getAllTargetSavings(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const changeFundingSourceAsync = createAsyncThunk(
  "transactions/changeFundingSource",
  async (values, { rejectWithValue }) => {
    try {
      const response = await InvestmentsService.changeFundingSource(
        values?.savingsId,
        values?.values
      );
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const breakTargetSavingsAsync = createAsyncThunk(
  "transactions/breakTargetSavings",
  async (values, { rejectWithValue }) => {
    try {
      const response = await InvestmentsService.breakTargetSavings(
        values?.savingsId,
        values?.values
      );
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const createSafeLockAsync = createAsyncThunk(
  "transactions/createSafeLock",
  async (values, { rejectWithValue }) => {
    try {
      const response = await InvestmentsService.createSafeLock(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const checkLoanEligibilityAsync = createAsyncThunk(
  "transactions/checkLoanEligibility",
  async (values, { rejectWithValue }) => {
    try {
      const response = await InvestmentsService.checkLoanEligibility(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getLoanOfferAsync = createAsyncThunk(
  "transactions/getLoanOffer",
  async (values, { rejectWithValue }) => {
    console.log(values);
    try {
      const response = await InvestmentsService.getLoanOffer(
        values?.id,
        values?.variables
      );
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const applyForCashBackLoanAsync = createAsyncThunk(
  "transactions/applyForCashBack",
  async (values, { rejectWithValue }) => {
    console.log(values);
    try {
      const response = await InvestmentsService.applyForCashBackLoan(
        values?.id,
        values?.variables
      );
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
  createTargetSavingsLoading: false,
  getSingleTargetSavingLoading: false,
  quickTopUpLoading: false,
  getAllTargetSavingsLoading: false,
  extendTargetSavingsLoading: false,
  changeFundingSourceLoading: false,
  breakTargetSavingsLoading: false,
  createSafeLockLoading: false,
  getAllSafeLockLoading: false,
  getInterestRateLoading: false,
  createTermDepositLoading: false,
  getTermDepositTenureLoading: false,
  getAllTermDepositTenureLoading: false,
  requestInvestmentLetterLoading: false,
  liquidateInvestmentLoading: false,
  checkLoanEligibilityLoading: false,
  getLoanOfferLoading: false,
  applyForCashBackLoanLoading: false,
  singleTargetDetails: "",
  allTargetSavings: "",
  getAllSafeLock: "",
  interestRates: "",
  termDeposit: "",
  termDepositTenure: "",
  allTermDepositTenure: "",
  checkLoanEligibility: "",
};

export const investmentsSlice = createSlice({
  name: "investments",
  initialState,
  extraReducers: {
    [createTargetSavingsAsync.pending]: (state) => {
      state.createTargetSavingsLoading = true;
    },
    [createTargetSavingsAsync.fulfilled]: (state) => {
      state.createTargetSavingsLoading = false;
    },
    [createTargetSavingsAsync.rejected]: (state, action) => {
      state.createTargetSavingsLoading = false;
      state.error = action.payload;
    },
    [getSingleTargetSavingAsync.pending]: (state) => {
      state.getSingleTargetSavingLoading = true;
    },
    [getSingleTargetSavingAsync.fulfilled]: (state, action) => {
      state.getSingleTargetSavingLoading = false;
      state.singleTargetDetails = action.payload.data;
    },
    [getSingleTargetSavingAsync.rejected]: (state, action) => {
      state.getSingleTargetSavingLoading = false;
      state.error = action.payload;
    },
    [quickTopUpAsync.pending]: (state) => {
      state.quickTopUpLoading = true;
    },
    [quickTopUpAsync.fulfilled]: (state) => {
      state.quickTopUpLoading = false;
    },
    [quickTopUpAsync.rejected]: (state, action) => {
      state.quickTopUpLoading = false;
      state.error = action.payload;
    },
    [getAllTargetSavingsAsync.pending]: (state) => {
      state.getAllTargetSavingsLoading = true;
    },
    [getAllTargetSavingsAsync.fulfilled]: (state, action) => {
      state.getAllTargetSavingsLoading = false;
      state.allTargetSavings = action.payload.data;
    },
    [getAllTargetSavingsAsync.rejected]: (state, action) => {
      state.getAllTargetSavingsLoading = false;
      state.error = action.payload;
    },
    [extendTargetSavingsAsync.pending]: (state) => {
      state.extendTargetSavingsLoading = true;
    },
    [extendTargetSavingsAsync.fulfilled]: (state, action) => {
      state.extendTargetSavingsLoading = false;
      state.allTargetSavings = action.payload.data;
    },
    [extendTargetSavingsAsync.rejected]: (state, action) => {
      state.extendTargetSavingsLoading = false;
      state.error = action.payload;
    },
    [changeFundingSourceAsync.pending]: (state) => {
      state.changeFundingSourceLoading = true;
    },
    [changeFundingSourceAsync.fulfilled]: (state, action) => {
      state.changeFundingSourceLoading = false;
      state.allTargetSavings = action.payload.data;
    },
    [changeFundingSourceAsync.rejected]: (state, action) => {
      state.changeFundingSourceLoading = false;
      state.error = action.payload;
    },
    [breakTargetSavingsAsync.pending]: (state) => {
      state.breakTargetSavingsLoading = true;
    },
    [breakTargetSavingsAsync.fulfilled]: (state, action) => {
      state.breakTargetSavingsLoading = false;
      state.allTargetSavings = action.payload.data;
    },
    [breakTargetSavingsAsync.rejected]: (state, action) => {
      state.breakTargetSavingsLoading = false;
      state.error = action.payload;
    },
    [createSafeLockAsync.pending]: (state) => {
      state.createSafeLockLoading = true;
    },
    [createSafeLockAsync.fulfilled]: (state) => {
      state.createSafeLockLoading = false;
    },
    [createSafeLockAsync.rejected]: (state, action) => {
      state.createSafeLockLoading = false;
      state.error = action.payload;
    },
    [getAllSafeLockAsync.pending]: (state) => {
      state.getAllSafeLockLoading = true;
    },
    [getAllSafeLockAsync.fulfilled]: (state, action) => {
      state.getAllSafeLockLoading = false;
      state.getAllSafeLock = action.payload.data;
    },
    [getAllSafeLockAsync.rejected]: (state, action) => {
      state.getAllSafeLockLoading = false;
      state.error = action.payload;
    },
    [getInterestRateAsync.pending]: (state) => {
      state.getInterestRateLoading = true;
    },
    [getInterestRateAsync.fulfilled]: (state, action) => {
      state.getInterestRateLoading = false;
      state.interestRates = action.payload.data;
    },
    [getInterestRateAsync.rejected]: (state, action) => {
      state.getInterestRateLoading = false;
      state.error = action.payload;
    },
    [createTermDepositAsync.pending]: (state) => {
      state.createTermDepositLoading = true;
    },
    [createTermDepositAsync.fulfilled]: (state, action) => {
      state.createTermDepositLoading = false;
      state.termDeposit = action.payload.data;
    },
    [createTermDepositAsync.rejected]: (state, action) => {
      state.createTermDepositLoading = false;
      state.error = action.payload;
    },
    [getTermDepositTenureAsync.pending]: (state) => {
      state.getTermDepositTenureLoading = true;
    },
    [getTermDepositTenureAsync.fulfilled]: (state, action) => {
      state.getTermDepositTenureLoading = false;
      state.termDepositTenure = action.payload.data;
    },
    [getTermDepositTenureAsync.rejected]: (state, action) => {
      state.getTermDepositTenureLoading = false;
      state.error = action.payload;
    },
    [getAllTermDepositTenureAsync.pending]: (state) => {
      state.getAllTermDepositTenureLoading = true;
    },
    [getAllTermDepositTenureAsync.fulfilled]: (state, action) => {
      state.getAllTermDepositTenureLoading = false;
      state.allTermDepositTenure = action.payload.data;
    },
    [getAllTermDepositTenureAsync.rejected]: (state, action) => {
      state.getAllTermDepositTenureLoading = false;
      state.error = action.payload;
    },
    [requestInvestmentLetterAsync.pending]: (state) => {
      state.requestInvestmentLetterLoading = true;
    },
    [requestInvestmentLetterAsync.fulfilled]: (state) => {
      state.requestInvestmentLetterLoading = false;
    },
    [requestInvestmentLetterAsync.rejected]: (state, action) => {
      state.requestInvestmentLetterLoading = false;
      state.error = action.payload;
    },
    [liquidateInvestmentAsync.pending]: (state) => {
      state.liquidateInvestmentLoading = true;
    },
    [liquidateInvestmentAsync.fulfilled]: (state) => {
      state.liquidateInvestmentLoading = false;
    },
    [liquidateInvestmentAsync.rejected]: (state, action) => {
      state.liquidateInvestmentLoading = false;
      state.error = action.payload;
    },
    [checkLoanEligibilityAsync.pending]: (state) => {
      state.checkLoanEligibilityLoading = true;
    },
    [checkLoanEligibilityAsync.fulfilled]: (state, action) => {
      state.checkLoanEligibilityLoading = false;
      state.checkLoanEligibility = action.payload.data;
    },
    [checkLoanEligibilityAsync.rejected]: (state, action) => {
      state.checkLoanEligibilityLoading = false;
      state.error = action.payload;
    },
    [getLoanOfferAsync.pending]: (state) => {
      state.getLoanOfferLoading = true;
    },
    [getLoanOfferAsync.fulfilled]: (state) => {
      state.getLoanOfferLoading = false;
    },
    [getLoanOfferAsync.rejected]: (state, action) => {
      state.getLoanOfferLoading = false;
      state.error = action.payload;
    },
    [applyForCashBackLoanAsync.pending]: (state) => {
      state.applyForCashBackLoanLoading = true;
    },
    [applyForCashBackLoanAsync.fulfilled]: (state) => {
      state.applyForCashBackLoanLoading = false;
    },
    [applyForCashBackLoanAsync.rejected]: (state, action) => {
      state.applyForCashBackLoanLoading = false;
      state.error = action.payload;
    },
  },
});

const { reducer } = investmentsSlice;
export default reducer;

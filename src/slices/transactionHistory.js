import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import TransactionHistoryService from "../services/transactionHistory.service";

export const getTransactionHistoryAsync = createAsyncThunk(
  "transactionHistory/getHistories",
  async (values, { rejectWithValue }) => {
    try {
      const response =
        await TransactionHistoryService.getRecentTransactionHistory(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const capivalTransferAsync = createAsyncThunk(
  "transactionHistory/capivalTransfer",
  async (values, { rejectWithValue }) => {
    try {
      const response = await TransactionHistoryService.capivalTransfer(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const otherBankTransferAsync = createAsyncThunk(
  "transactionHistory/otherbankTransfer",
  async (values, { rejectWithValue }) => {
    try {
      const response = await TransactionHistoryService.otherBanksTransfer(
        values
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

export const checkTransactionPinStatusAsync = createAsyncThunk(
  "transactionHistory/checkTransactionPinStatus",
  async (values, { rejectWithValue }) => {
    try {
      const response = await TransactionHistoryService.getTransactionPinStatus(
        values
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

export const validateAccountAsync = createAsyncThunk(
  "transactionHistory/validateAccount",
  async (values, { rejectWithValue }) => {
    try {
      const response = await TransactionHistoryService.validateAccount(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getdatedTransactionHistoryAsync = createAsyncThunk(
  "transactionHistory/getdatedTransactionHistory",
  async (values, { rejectWithValue }) => {
    try {
      const response =
        await TransactionHistoryService.getDatedTransactionHistory(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const generateAccountStatementAsync = createAsyncThunk(
  "transactionHistory/generateAccountStatement",
  async (values, { rejectWithValue }) => {
    try {
      const response = await TransactionHistoryService.generateAccountStatement(
        values
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
  isLoading: false,
  getTransactionHistoryLoading: false,
  getDatedTransactionHistoryLoading: false,
  validateAccountLoading: false,
  generateStatementLoading: false,
  transactionHistory: "",
  isAccountValidated: "",
  datedTransactionHistory: "",
  capivalTransferLoading: false,
  otherBankTransferLoading: false,
};

export const transactionHistorySlice = createSlice({
  name: "transactionHistory",
  initialState,
  extraReducers: {
    [getTransactionHistoryAsync.pending]: (state) => {
      state.getTransactionHistoryLoading = true;
    },
    [getTransactionHistoryAsync.fulfilled]: (state, action) => {
      state.transactionHistory = action.payload.data;
      state.getTransactionHistoryLoading = false;
    },
    [getTransactionHistoryAsync.rejected]: (state) => {
      state.getTransactionHistoryLoading = false;
    },
    [capivalTransferAsync.pending]: (state) => {
      state.capivalTransferLoading = true;
    },
    [capivalTransferAsync.fulfilled]: (state) => {
      state.capivalTransferLoading = false;
    },
    [capivalTransferAsync.rejected]: (state) => {
      state.capivalTransferLoading = false;
    },
    [otherBankTransferAsync.pending]: (state) => {
      state.otherBankTransferLoading = true;
    },
    [otherBankTransferAsync.fulfilled]: (state) => {
      // state.transactionHistory = action.payload.data;
      state.otherBankTransferLoading = false;
    },
    [otherBankTransferAsync.rejected]: (state) => {
      state.otherBankTransferLoading = false;
    },
    [checkTransactionPinStatusAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [checkTransactionPinStatusAsync.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [checkTransactionPinStatusAsync.rejected]: (state) => {
      state.isLoading = false;
    },
    [validateAccountAsync.pending]: (state) => {
      state.validateAccountLoading = true;
    },
    [validateAccountAsync.fulfilled]: (state, action) => {
      state.validateAccountLoading = false;
      state.isAccountValidated = action.payload.data;
    },
    [validateAccountAsync.rejected]: (state) => {
      state.validateAccountLoading = false;
    },
    [generateAccountStatementAsync.pending]: (state) => {
      state.generateStatementLoading = true;
    },
    [generateAccountStatementAsync.fulfilled]: (state) => {
      state.generateStatementLoading = false;
    },
    [generateAccountStatementAsync.rejected]: (state) => {
      state.generateStatementLoading = false;
    },
    [getdatedTransactionHistoryAsync.pending]: (state) => {
      state.getDatedTransactionHistoryLoading = true;
    },
    [getdatedTransactionHistoryAsync.fulfilled]: (state, action) => {
      state.getDatedTransactionHistoryLoading = false;
      state.datedTransactionHistory = action.payload.data;
    },
    [getdatedTransactionHistoryAsync.rejected]: (state) => {
      state.getDatedTransactionHistoryLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
const { reducer } = transactionHistorySlice;
export default reducer;

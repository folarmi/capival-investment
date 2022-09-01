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

export const validateInterAccountAsync = createAsyncThunk(
  "transactionHistory/validateInterAccount",
  async (values, { rejectWithValue }) => {
    try {
      const response = await TransactionHistoryService.validateInterAccount(
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

export const getInternalBeneficiariesAsync = createAsyncThunk(
  "transactionHistory/getInternalBeneficiaries",
  async (values, { rejectWithValue }) => {
    try {
      const response = await TransactionHistoryService.getInternalBeneficiaries(
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

export const getExternalBeneficiariesAsync = createAsyncThunk(
  "transactionHistory/getExternalBeneficiaries",
  async (values, { rejectWithValue }) => {
    try {
      const response = await TransactionHistoryService.getExternalBeneficiaries(
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
  validateInterAccountLoading: false,
  generateStatementLoading: false,
  transactionHistory: "",
  isAccountValidated: "",
  isInterAccountValidated: "",
  datedTransactionHistory: "",
  getInternalBeneficiaries: "",
  getExternalBeneficiaries: "",
  capivalTransferLoading: false,
  otherBankTransferLoading: false,
  getInternalBeneficiariesLoading: false,
  getExternalBeneficiariesLoading: false,
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
      state.isAccountValidated = "";
    },
    [validateAccountAsync.fulfilled]: (state, action) => {
      state.validateAccountLoading = false;
      state.isAccountValidated = action.payload.data;
    },
    [validateAccountAsync.rejected]: (state, action) => {
      state.validateAccountLoading = false;
      state.isAccountValidated = "";
    },
    [validateInterAccountAsync.pending]: (state) => {
      state.validateInterAccountLoading = true;
      state.isInterAccountValidated = "";
    },
    [validateInterAccountAsync.fulfilled]: (state, action) => {
      state.validateInterAccountLoading = false;
      state.isInterAccountValidated = action.payload.data;
    },
    [validateInterAccountAsync.rejected]: (state, action) => {
      state.validateInterAccountLoading = false;
      state.isInterAccountValidated = "";
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
    [getInternalBeneficiariesAsync.pending]: (state) => {
      state.getInternalBeneficiariesLoading = true;
    },
    [getInternalBeneficiariesAsync.fulfilled]: (state, action) => {
      state.getInternalBeneficiariesLoading = false;
      state.getInternalBeneficiaries = action.payload.data;
    },
    [getInternalBeneficiariesAsync.rejected]: (state) => {
      state.getInternalBeneficiariesLoading = false;
    },
    [getExternalBeneficiariesAsync.pending]: (state) => {
      state.getExternalBeneficiariesLoading = true;
    },
    [getExternalBeneficiariesAsync.fulfilled]: (state, action) => {
      state.getExternalBeneficiariesLoading = false;
      state.getExternalBeneficiaries = action.payload.data;
    },
    [getExternalBeneficiariesAsync.rejected]: (state) => {
      state.getExternalBeneficiariesLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
const { reducer } = transactionHistorySlice;
export default reducer;

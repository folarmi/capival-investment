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

const initialState = {
  getTransactionHistoryLoading: false,
  transactionHistory: "",
  capivalTransferLoading: false,
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
    [capivalTransferAsync.fulfilled]: (state, action) => {
      state.transactionHistory = action.payload.data;
      state.capivalTransferLoading = false;
    },
    [capivalTransferAsync.rejected]: (state) => {
      state.capivalTransferLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
const { reducer, actions } = transactionHistorySlice;
// export const { handleNextButton } = actions;
export default reducer;

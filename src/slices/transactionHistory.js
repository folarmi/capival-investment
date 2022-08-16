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

const initialState = {
  getTransactionHistoryLoading: false,
};

export const transactionHistorySlice = createSlice({
  name: "transactionHistory",
  initialState,
  extraReducers: {
    [getTransactionHistoryAsync.pending]: (state) => {
      state.getTransactionHistoryLoading = true;
    },
    [getTransactionHistoryAsync.fulfilled]: (state, action) => {
      console.log(action.payload.data);
      state.getTransactionHistoryLoading = true;
    },
    [getTransactionHistoryAsync.rejected]: (state) => {
      state.getTransactionHistoryLoading = true;
    },
  },
});

// Action creators are generated for each case reducer function
const { reducer, actions } = transactionHistorySlice;
// export const { handleNextButton } = actions;
export default reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import TransactionHistoryService from "../services/transactionHistory.service";

export const saveInternalBeneficiaryAsync = createAsyncThunk(
  "transactions/saveInternalBeneficiary",
  async (values, { rejectWithValue }) => {
    try {
      const response = await TransactionHistoryService.saveInternalBeneficiary(
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

export const saveExternalBeneficiaryAsync = createAsyncThunk(
  "transactions/saveExternalBeneficiary",
  async (values, { rejectWithValue }) => {
    try {
      const response = await TransactionHistoryService.saveExternalBeneficiary(
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
  saveInternalBeneficiaryLoading: false,
  saveExternalBeneficiaryLoading: false,
};

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  extraReducers: {
    [saveInternalBeneficiaryAsync.pending]: (state) => {
      state.saveInternalBeneficiaryLoading = true;
    },
    [saveInternalBeneficiaryAsync.fulfilled]: (state, action) => {
      state.saveInternalBeneficiaryLoading = false;
    },
    [saveInternalBeneficiaryAsync.rejected]: (state) => {
      state.saveInternalBeneficiaryLoading = false;
    },
    [saveExternalBeneficiaryAsync.pending]: (state) => {
      state.saveExternalBeneficiaryLoading = true;
    },
    [saveExternalBeneficiaryAsync.fulfilled]: (state, action) => {
      state.saveExternalBeneficiaryLoading = false;
    },
    [saveExternalBeneficiaryAsync.rejected]: (state) => {
      state.saveExternalBeneficiaryLoading = false;
    },
  },
});

const { reducer } = transactionsSlice;
export default reducer;

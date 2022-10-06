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

const initialState = {
  createTargetSavingsLoading: false,
};

export const investmentsSlice = createSlice({
  name: "investments",
  initialState,
  extraReducers: {
    [createTargetSavingsAsync.pending]: (state) => {
      state.createTargetSavingsLoading = true;
    },
    [createTargetSavingsAsync.fulfilled]: (state, action) => {
      state.createTargetSavingsLoading = false;
    },
    [createTargetSavingsAsync.rejected]: (state) => {
      state.createTargetSavingsLoading = false;
    },
  },
});

const { reducer } = investmentsSlice;
export default reducer;

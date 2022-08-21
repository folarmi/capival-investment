import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import DebitCardService from "../services/debitcard.service";

export const getDebitCardsAsync = createAsyncThunk(
  "mobile/get",
  async (values, { rejectWithValue }) => {
    try {
      const response = await DebitCardService.getDebitCards(values);
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
  getDebitCardsLoading: false,
};

export const debitCardSlice = createSlice({
  name: "debitCard",
  initialState,
  extraReducers: {
    [getDebitCardsAsync.pending]: (state) => {
      state.getDebitCardsLoading = true;
    },
    [getDebitCardsAsync.fulfilled]: (state, action) => {
      state.billPaymentCategories = action.payload.data;
      state.getDebitCardsLoading = true;
    },
    [getDebitCardsAsync.rejected]: (state) => {
      state.getDebitCardsLoading = true;
    },
  },
});

// Action creators are generated for each case reducer function
const { reducer, actions } = debitCardSlice;
// export const { handleNextButton } = actions;
export default reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import BillPaymentService from "../services/billPayment.service";

export const getBillPaymentCategories = createAsyncThunk(
  "billPayment/getCategories",
  async (values, { rejectWithValue }) => {
    try {
      const response = await BillPaymentService.billPaymentCategories(values);
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
  billPaymentCategoriesLoading: false,
  billPaymentCategories: "",
};

export const billPaymentSlice = createSlice({
  name: "billPayment",
  initialState,
  extraReducers: {
    [getBillPaymentCategories.pending]: (state) => {
      state.billPaymentCategoriesLoading = true;
    },
    [getBillPaymentCategories.fulfilled]: (state, action) => {
      state.billPaymentCategories = action.payload.data;
      state.billPaymentCategoriesLoading = true;
    },
    [getBillPaymentCategories.rejected]: (state) => {
      state.billPaymentCategoriesLoading = true;
    },
  },
});

// Action creators are generated for each case reducer function
const { reducer, actions } = billPaymentSlice;
// export const { handleNextButton } = actions;
export default reducer;

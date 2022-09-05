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

export const singleBillPaymentCategoryAsync = createAsyncThunk(
  "billPayment/billPaymentCategory",
  async (values, { rejectWithValue }) => {
    try {
      const response = await BillPaymentService.billPaymentCategory(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getBillerProductsAsync = createAsyncThunk(
  "billPayment/getBillerProducts",
  async (values, { rejectWithValue }) => {
    try {
      const response = await BillPaymentService.getBillerProducts(values);
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
  singleBillPaymentCategoryLoading: false,
  getBillerProductsLoading: false,
  billPaymentCategories: "",
  singleBillPaymentCategory: "",
  billerProducts: "",
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
    [singleBillPaymentCategoryAsync.pending]: (state) => {
      state.singleBillPaymentCategoryLoading = true;
    },
    [singleBillPaymentCategoryAsync.fulfilled]: (state, action) => {
      state.singleBillPaymentCategory = action.payload.data;
      state.singleBillPaymentCategoryLoading = false;
    },
    [singleBillPaymentCategoryAsync.rejected]: (state) => {
      state.singleBillPaymentCategoryLoading = false;
    },
    [getBillerProductsAsync.pending]: (state) => {
      state.getBillerProductsLoading = true;
    },
    [getBillerProductsAsync.fulfilled]: (state, action) => {
      state.billerProducts = action.payload.data;
      state.getBillerProductsLoading = true;
    },
    [getBillerProductsAsync.rejected]: (state) => {
      state.getBillerProductsLoading = true;
    },
  },
});

// Action creators are generated for each case reducer function
const { reducer, actions } = billPaymentSlice;
// export const { handleNextButton } = actions;
export default reducer;

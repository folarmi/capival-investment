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

export const validateBillerProductAsync = createAsyncThunk(
  "billPayment/validateBillerProduct",
  async (values, { rejectWithValue }) => {
    try {
      const response = await BillPaymentService.validateBillerProduct(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const processPaymentAsync = createAsyncThunk(
  "billPayment/processPayment",
  async (values, { rejectWithValue }) => {
    try {
      const response = await BillPaymentService.processPayment(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const initiateTransactionAsync = createAsyncThunk(
  "billPayment/initiateTransaction",
  async (values, { rejectWithValue }) => {
    try {
      const response = await BillPaymentService.initiateTransaction(values);
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
  validateBillerProductLoading: false,
  initiateTransactionLoading: false,
  processPaymentLoading: false,
  billPaymentCategories: "",
  singleBillPaymentCategory: "",
  billerProducts: "",
  validateBillerProduct: "",
  initiateTransaction: "",
  processPayment: "",
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
      state.billPaymentCategoriesLoading = false;
    },
    [getBillPaymentCategories.rejected]: (state) => {
      state.billPaymentCategoriesLoading = false;
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
    [validateBillerProductAsync.pending]: (state) => {
      state.validateBillerProductLoading = true;
    },
    [validateBillerProductAsync.fulfilled]: (state, action) => {
      state.validateBillerProduct = action.payload.data;
      state.validateBillerProductLoading = false;
    },
    [validateBillerProductAsync.rejected]: (state) => {
      state.validateBillerProductLoading = false;
    },
    [initiateTransactionAsync.pending]: (state) => {
      state.initiateTransactionLoading = true;
    },
    [initiateTransactionAsync.fulfilled]: (state, action) => {
      state.initiateTransaction = action.payload.data;
      state.initiateTransactionLoading = false;
    },
    [initiateTransactionAsync.rejected]: (state) => {
      state.initiateTransactionLoading = false;
    },
    [processPaymentAsync.pending]: (state) => {
      state.processPaymentLoading = true;
    },
    [processPaymentAsync.fulfilled]: (state, action) => {
      state.processPaymentLoading = action.payload.data;
      state.processPayment = false;
    },
    [processPaymentAsync.rejected]: (state) => {
      state.processPaymentLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
const { reducer, actions } = billPaymentSlice;
// export const { handleNextButton } = actions;
export default reducer;

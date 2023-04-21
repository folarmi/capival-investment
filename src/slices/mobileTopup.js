import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import MobileTopUpService from "../services/mobileTopUp.service";

export const getAirtimeBillersAsync = createAsyncThunk(
  "mobiletopUp/getAirtimeBillers",
  async (values, { rejectWithValue }) => {
    try {
      const response = await MobileTopUpService.getAirtimeBillers(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAllDataBillersAsync = createAsyncThunk(
  "mobiletopUp/get",
  async (values, { rejectWithValue }) => {
    try {
      const response = await MobileTopUpService.getAllDataBillers(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getDataProductsAsync = createAsyncThunk(
  "mobiletopUp/getdataProducts",
  async (values, { rejectWithValue }) => {
    try {
      const response = await MobileTopUpService.getDataProducts(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const purchaseAirtimeAsync = createAsyncThunk(
  "mobiletopUp/purchaseAirtime",
  async (values, { rejectWithValue }) => {
    try {
      const response = await MobileTopUpService.purchaseAirtime(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const purchaseDataAsync = createAsyncThunk(
  "mobiletopUp/purchaseData",
  async (values, { rejectWithValue }) => {
    try {
      const response = await MobileTopUpService.purchaseData(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAllBettingBillersAsync = createAsyncThunk(
  "mobiletopUp/purchaseAirtime",
  async (values, { rejectWithValue }) => {
    try {
      const response = await MobileTopUpService.getAllBettingBillers(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const validateBettingAccountAsync = createAsyncThunk(
  "mobiletopUp/validateBettingAccount",
  async (values, { rejectWithValue }) => {
    try {
      const response = await MobileTopUpService.validateBettingAccount(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const fundBettingWalletAsync = createAsyncThunk(
  "mobiletopUp/fundBettingWallet",
  async (values, { rejectWithValue }) => {
    try {
      const response = await MobileTopUpService.fundBettingWallet(values);
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
  getAirtimeBillersLoading: false,
  getAllDataBillersLoading: false,
  getDataProductsLoading: false,
  airtimePurchaseIsLoading: false,
  buyDataLoading: false,
  bettingBillersLoading: false,
  validateBettingAccountLoading: false,
  fundBettingWalletLoading: false,
  airtimeBillers: "",
  dataBillers: "",
  dataProducts: "",
  bettingBillers: "",
  bettingAccountDetails: "",
};

export const mobileTopUpSlice = createSlice({
  name: "mobileTopUp",
  initialState,
  reducers: {
    resetBettingAccountDetails: (state) => {
      state.bettingAccountDetails = "";
    },
  },
  extraReducers: {
    [getAirtimeBillersAsync.pending]: (state) => {
      state.getAirtimeBillersLoading = true;
    },
    [getAirtimeBillersAsync.fulfilled]: (state, action) => {
      state.airtimeBillers = action.payload.data;
      state.getAirtimeBillersLoading = false;
    },
    [getAirtimeBillersAsync.rejected]: (state) => {
      state.getAirtimeBillersLoading = false;
    },
    [getDataProductsAsync.pending]: (state) => {
      state.getDataProductsLoading = true;
    },
    [getDataProductsAsync.fulfilled]: (state, action) => {
      state.dataProducts = action.payload.data;
      state.getDataProductsLoading = false;
    },
    [getDataProductsAsync.rejected]: (state) => {
      state.getDataProductsLoading = false;
    },
    [purchaseAirtimeAsync.pending]: (state) => {
      state.airtimePurchaseIsLoading = true;
    },
    [purchaseAirtimeAsync.fulfilled]: (state, action) => {
      state.dataProducts = action.payload.data;
      state.airtimePurchaseIsLoading = false;
    },
    [purchaseAirtimeAsync.rejected]: (state) => {
      state.airtimePurchaseIsLoading = false;
    },
    [getAllBettingBillersAsync.pending]: (state) => {
      state.bettingBillersLoading = true;
    },
    [getAllBettingBillersAsync.fulfilled]: (state, action) => {
      state.bettingBillers = action.payload.data;
      state.bettingBillersLoading = false;
    },
    [getAllBettingBillersAsync.rejected]: (state) => {
      state.bettingBillersLoading = false;
    },
    [purchaseDataAsync.pending]: (state) => {
      state.buyDataLoading = true;
    },
    [purchaseDataAsync.fulfilled]: (state, action) => {
      state.bettingBillers = action.payload.data;
      state.buyDataLoading = false;
    },
    [purchaseDataAsync.rejected]: (state) => {
      state.buyDataLoading = false;
    },
    [validateBettingAccountAsync.pending]: (state) => {
      state.validateBettingAccountLoading = true;
    },
    [validateBettingAccountAsync.fulfilled]: (state, action) => {
      state.bettingAccountDetails = action.payload.data;
      state.validateBettingAccountLoading = false;
    },
    [validateBettingAccountAsync.rejected]: (state) => {
      state.validateBettingAccountLoading = false;
    },
    [fundBettingWalletAsync.pending]: (state) => {
      state.fundBettingWalletLoading = true;
    },
    [fundBettingWalletAsync.fulfilled]: (state, action) => {
      state.fundBettingWalletLoading = false;
    },
    [fundBettingWalletAsync.rejected]: (state) => {
      state.fundBettingWalletLoading = false;
    },
    [getAllDataBillersAsync.pending]: (state) => {
      state.getAllDataBillersLoading = true;
    },
    [getAllDataBillersAsync.fulfilled]: (state, action) => {
      state.dataBillers = action.payload.data;
      state.getAllDataBillersLoading = false;
    },
    [getAllDataBillersAsync.rejected]: (state) => {
      state.getAllDataBillersLoading = false;
    },
  },
});

const { reducer, actions } = mobileTopUpSlice;
export const { resetBettingAccountDetails } = actions;
export default reducer;

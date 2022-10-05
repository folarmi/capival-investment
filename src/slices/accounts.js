import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import AccountService from "../services/account.service";

export const createNextofKinAsync = createAsyncThunk(
  "accounts/createNextOfKin",
  async (values, { rejectWithValue }) => {
    try {
      const response = await AccountService.createNextOfKin(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const employerInfoAsync = createAsyncThunk(
  "accounts/employerInfo",
  async (values, { rejectWithValue }) => {
    try {
      const response = await AccountService.employerInfo(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const uploadKYCDocumentsAsync = createAsyncThunk(
  "accounts/uploadKYCDocuments",
  async (values, { rejectWithValue }) => {
    try {
      const response = await AccountService.uploadKYCDocuments(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const reportIssueAsync = createAsyncThunk(
  "accounts/reportIssue",
  async (values, { rejectWithValue }) => {
    try {
      const response = await AccountService.reportIssue(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const addBankAccountAsync = createAsyncThunk(
  "accounts/addBankAccount",
  async (values, { rejectWithValue }) => {
    try {
      const response = await AccountService.addBankAccount(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const addDebitCardAsync = createAsyncThunk(
  "accounts/addDebitCard",
  async (values, { rejectWithValue }) => {
    try {
      const response = await AccountService.addDebitCard(values);
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
  createNextofKinLoading: false,
  createEmployerInfoLoading: false,
  uploadKycDocumentsLoading: false,
  addBankAccountLoading: false,
  reportIssueLoading: false,
  addDebitCardLoading: false,
};

export const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  extraReducers: {
    [createNextofKinAsync.pending]: (state) => {
      state.createNextofKinLoading = true;
    },
    [createNextofKinAsync.fulfilled]: (state) => {
      state.createNextofKinLoading = false;
    },
    [createNextofKinAsync.rejected]: (state) => {
      state.createNextofKinLoading = false;
    },
    [employerInfoAsync.pending]: (state) => {
      state.createEmployerInfoLoading = true;
    },
    [employerInfoAsync.fulfilled]: (state) => {
      state.createEmployerInfoLoading = false;
    },
    [employerInfoAsync.rejected]: (state) => {
      state.createEmployerInfoLoading = false;
    },
    [uploadKYCDocumentsAsync.pending]: (state) => {
      state.uploadKycDocumentsLoading = true;
    },
    [uploadKYCDocumentsAsync.fulfilled]: (state) => {
      state.uploadKycDocumentsLoading = false;
    },
    [uploadKYCDocumentsAsync.rejected]: (state) => {
      state.uploadKycDocumentsLoading = false;
    },
    [reportIssueAsync.pending]: (state) => {
      state.reportIssueLoading = true;
    },
    [reportIssueAsync.fulfilled]: (state) => {
      state.reportIssueLoading = false;
    },
    [reportIssueAsync.rejected]: (state) => {
      state.reportIssueLoading = false;
    },
    [addBankAccountAsync.pending]: (state) => {
      state.addBankAccountLoading = true;
    },
    [addBankAccountAsync.fulfilled]: (state) => {
      state.addBankAccountLoading = false;
    },
    [addBankAccountAsync.rejected]: (state) => {
      state.addBankAccountLoading = false;
    },
    [addDebitCardAsync.pending]: (state) => {
      state.addDebitCardLoading = true;
    },
    [addDebitCardAsync.fulfilled]: (state) => {
      state.addDebitCardLoading = false;
    },
    [addDebitCardAsync.rejected]: (state) => {
      state.addDebitCardLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
const { reducer } = accountsSlice;
export default reducer;

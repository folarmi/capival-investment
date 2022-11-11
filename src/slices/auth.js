import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../services/auth.service.js";
import AccountService from "../services/account.service";

export const verifyBVNAsync = createAsyncThunk(
  "auth/verifyBVN",

  async (values, { rejectWithValue }) => {
    try {
      const response = await AuthService.verifyBVN(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const bvnOtpVerificationAsync = createAsyncThunk(
  "auth/verifyOtpBvn",
  async (values, { rejectWithValue }) => {
    try {
      const response = await AuthService.bvnOtpValidation(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const registerUserAsync = createAsyncThunk(
  "auth/verifyOtpBvn",
  async (values, { rejectWithValue }) => {
    try {
      const response = await AuthService.registerUser(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUserAsync = createAsyncThunk(
  "auth/loginUser",
  async (values, { rejectWithValue }) => {
    try {
      const response = await AuthService.loginUser(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const forgotPasswordAsync = createAsyncThunk(
  "auth/forgotPassword",
  async (values, { rejectWithValue }) => {
    try {
      const response = await AuthService.forgotPassword(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const forgotPasswordAsyncOTP = createAsyncThunk(
  "auth/forgotPasswordOTP",
  async (values, { rejectWithValue }) => {
    try {
      const response = await AuthService.forgotPasswordOTP(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const changePasswordAsync = createAsyncThunk(
  "auth/changePassword",
  async (values, { rejectWithValue }) => {
    try {
      const response = await AuthService.changePasswordWithToken(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const setTransactionPinAsync = createAsyncThunk(
  "auth/setTransactionPin",
  async (values, { rejectWithValue }) => {
    try {
      const response = await AuthService.setTransactionPin(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const resetTransactionPinAsync = createAsyncThunk(
  "auth/resetTransactionPin",
  async (values, { rejectWithValue }) => {
    try {
      const response = await AuthService.resetTransactionPin(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const logoutAsync = createAsyncThunk("auth/logout", async () => {
  AuthService.logout();
});

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

const initialState = {
  isVerifyBvnLoading: false,
  isBvnOtpLoading: false,
  registerUserIsLoading: false,
  forgotPasswordLoading: false,
  forgotPasswordLoadingOTP: false,
  changePasswordLoading: false,
  isTransactionPinLoading: false,
  isresetTransactionPinLoading: false,
  createNextofKinLoading: false,
  createEmployerInfoLoading: false,
  addBankAccountLoading: false,
  uploadKycDocumentsLoading: false,
  forgotPasswordEmail: "",
  bvnData: [],
  login: {
    isLoading: false,
    isLoggedIn: false,
    user: null,
    error: null,
  },
};

const registerSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleForgotPasswordEmail: (state, action) => {
      state.forgotPasswordEmail = action.payload;
    },
    resetInitialState: (state) => {
      state.login.isLoading = false;
      state.login.isLoggedIn = false;
      state.login.user = null;
    },
  },
  extraReducers: {
    [verifyBVNAsync.pending]: (state) => {
      state.isVerifyBvnLoading = true;
    },
    [verifyBVNAsync.fulfilled]: (state) => {
      state.isVerifyBvnLoading = false;
    },
    [verifyBVNAsync.rejected]: (state, action) => {
      state.isVerifyBvnLoading = false;
      state.error = action.payload;
    },
    [bvnOtpVerificationAsync.pending]: (state) => {
      state.isBvnOtpLoading = true;
    },
    [bvnOtpVerificationAsync.fulfilled]: (state, action) => {
      state.bvnData = action.payload.data;
      state.isBvnOtpLoading = false;
    },
    [bvnOtpVerificationAsync.rejected]: (state, action) => {
      state.isBvnOtpLoading = false;
      state.error = action.payload;
    },
    [registerUserAsync.pending]: (state) => {
      state.registerUserIsLoading = true;
    },
    [registerUserAsync.fulfilled]: (state, action) => {
      state.bvnData = action.payload.data;
      state.registerUserIsLoading = false;
    },
    [registerUserAsync.rejected]: (state, action) => {
      state.registerUserIsLoading = false;
      state.error = action.payload;
    },
    [loginUserAsync.pending]: (state) => {
      state.login.isLoading = true;
    },
    [loginUserAsync.fulfilled]: (state, action) => {
      state.login.isLoggedIn = true;
      state.login.isLoading = false;
      state.login.user = action.payload;
    },
    [loginUserAsync.rejected]: (state, action) => {
      state.login.isLoading = false;
      state.error = action.payload;
    },
    [forgotPasswordAsync.pending]: (state) => {
      state.forgotPasswordLoading = true;
    },
    [forgotPasswordAsync.fulfilled]: (state, action) => {
      state.forgotPasswordEmail = action.payload.data;
      state.forgotPasswordLoading = false;
    },
    [forgotPasswordAsync.rejected]: (state, action) => {
      state.forgotPasswordLoading = false;
      state.error = action.payload;
    },
    [forgotPasswordAsyncOTP.pending]: (state) => {
      state.forgotPasswordLoadingOTP = true;
    },
    [forgotPasswordAsyncOTP.fulfilled]: (state) => {
      state.forgotPasswordLoadingOTP = false;
    },
    [forgotPasswordAsyncOTP.rejected]: (state, action) => {
      state.forgotPasswordLoadingOTP = false;
      state.error = action.payload;
    },
    [changePasswordAsync.pending]: (state) => {
      state.changePasswordLoading = true;
    },
    [changePasswordAsync.fulfilled]: (state) => {
      state.changePasswordLoading = false;
    },
    [changePasswordAsync.rejected]: (state, action) => {
      state.changePasswordLoading = false;
      state.error = action.payload;
    },
    [setTransactionPinAsync.pending]: (state) => {
      state.isTransactionPinLoading = true;
    },
    [setTransactionPinAsync.fulfilled]: (state) => {
      state.isTransactionPinLoading = false;
      // state.login.user = action.data;
    },
    [setTransactionPinAsync.rejected]: (state, action) => {
      state.isTransactionPinLoading = false;
      state.error = action.payload;
    },
    [resetTransactionPinAsync.pending]: (state) => {
      state.isresetTransactionPinLoading = true;
    },
    [resetTransactionPinAsync.fulfilled]: (state, action) => {
      state.isresetTransactionPinLoading = false;
    },
    [resetTransactionPinAsync.rejected]: (state, action) => {
      state.isresetTransactionPinLoading = false;
      state.error = action.payload;
    },
    [logoutAsync.fulfilled]: (state) => {
      state.login.isLoggedIn = false;
      state.login.isLoading = false;
      state.login.user = null;
    },
    [createNextofKinAsync.pending]: (state) => {
      state.createNextofKinLoading = true;
    },
    [createNextofKinAsync.fulfilled]: (state, action) => {
      state.createNextofKinLoading = false;
      state.login.user = action.payload;
    },
    [createNextofKinAsync.rejected]: (state) => {
      state.createNextofKinLoading = false;
    },
    [employerInfoAsync.pending]: (state) => {
      state.createEmployerInfoLoading = true;
    },
    [employerInfoAsync.fulfilled]: (state, action) => {
      state.createEmployerInfoLoading = false;
      state.login.user = action.payload;
    },
    [employerInfoAsync.rejected]: (state) => {
      state.createEmployerInfoLoading = false;
    },
    [addBankAccountAsync.pending]: (state) => {
      state.addBankAccountLoading = true;
    },
    [addBankAccountAsync.fulfilled]: (state, action) => {
      state.addBankAccountLoading = false;
      state.login.user = action.payload;
    },
    [addBankAccountAsync.rejected]: (state) => {
      state.addBankAccountLoading = false;
    },
    [uploadKYCDocumentsAsync.pending]: (state) => {
      state.uploadKycDocumentsLoading = true;
    },
    [uploadKYCDocumentsAsync.fulfilled]: (state, action) => {
      state.uploadKycDocumentsLoading = false;
      state.login.user = action.payload;
    },
    [uploadKYCDocumentsAsync.rejected]: (state) => {
      state.uploadKycDocumentsLoading = false;
    },
  },
});

const { reducer, actions } = registerSlice;
export const { handleForgotPasswordEmail, resetInitialState } = actions;

export default reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../services/auth.service.js";

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
  "auth/login",
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

const initialState = {
  isVerifyBvnLoading: false,
  isBvnOtpLoading: false,
  registerUserIsLoading: false,
  bvnData: [],
  login: {
    isLoading: false,
    isLoggedIn: false,
    user: null,
    error: null,
  },
};

// extraReducers: (builder) => {
//   builder.addMatcher(
//     api.endpoints.login.matchFulfilled,
//     (state, { payload }) => {
//       state.token = payload.token
//       state.user = payload.user
//     }
//   )
// },
const registerSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetInitialState: (state) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.user = null;
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
      // console.log(action.payload);
      state.login.isLoggedIn = true;
      state.login.isLoading = false;
      state.login.user = action.payload;
    },
    [loginUserAsync.rejected]: (state, action) => {
      state.login.isLoading = false;
      state.error = action.payload;
    },
  },
});

const { reducer, actions } = registerSlice;
export const { resetInitialState } = actions;

export default reducer;
// login: {
//   isLoading: false,
//   isLoggedIn: false,
//   user: null,
//   error: null,
// },

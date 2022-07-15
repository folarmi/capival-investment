import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RegisterService from "../services/register.service.js";

export const verifyBVNAsync = createAsyncThunk(
  "register/verifyBVN",

  async (values, { rejectWithValue }) => {
    try {
      const response = await RegisterService.verifyBVN(values);
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
  "register/verifyOtpBvn",
  async (values, { rejectWithValue }) => {
    try {
      const response = await RegisterService.bvnOtpValidation(values);
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
  bvnData: [],
};

const registerSlice = createSlice({
  name: "register",
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
  },
});

const { reducer, actions } = registerSlice;
export const { resetInitialState } = actions;

export default reducer;

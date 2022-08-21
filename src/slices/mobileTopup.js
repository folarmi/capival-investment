import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import MobileTopUpService from "../services/mobileTopUp.service";

export const getAirtimeBillersAsync = createAsyncThunk(
  "mobiletopUp/get",
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

const initialState = {
  getAirtimeBillersLoading: false,
  airtimeBillers: "",
};

export const mobileTopUpSlice = createSlice({
  name: "mobileTopUp",
  initialState,
  extraReducers: {
    [getAirtimeBillersAsync.pending]: (state) => {
      state.getAirtimeBillersLoading = true;
    },
    [getAirtimeBillersAsync.fulfilled]: (state, action) => {
      state.airtimeBillers = action.payload.data;
      state.getAirtimeBillersLoading = true;
    },
    [getAirtimeBillersAsync.rejected]: (state) => {
      state.getAirtimeBillersLoading = true;
    },
  },
});

// Action creators are generated for each case reducer function
const { reducer } = mobileTopUpSlice;
// export const { handleNextButton } = actions;
export default reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import utilsService from "../services/utils.services.js";

export const getGenderAsync = createAsyncThunk(
  "utils/getGender",

  async (values, { rejectWithValue }) => {
    try {
      const response = await utilsService.getGender(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getMaritalStatusAsync = createAsyncThunk(
  "utils/getMaritalStatus",

  async (values, { rejectWithValue }) => {
    try {
      const response = await utilsService.getMaritalStatus(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAllStates = createAsyncThunk(
  "utils/getAllStates",

  async (values, { rejectWithValue }) => {
    try {
      const response = await utilsService.getAllStates(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getStateLGA = createAsyncThunk(
  "utils/getStateLGA",

  async (values, { rejectWithValue }) => {
    try {
      const response = await utilsService.getStateLga(values);
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
  getGenderLoading: false,
  getMaritalStatusLoading: false,
  getAllStatesLoading: false,
  getStateLGALoading: false,
  gender: [],
  maritalStatus: [],
  states: [],
  lgas: [],
};

const utilsSlice = createSlice({
  name: "utils",
  initialState,
  extraReducers: {
    [getGenderAsync.pending]: (state) => {
      state.getGenderLoading = true;
    },
    [getGenderAsync.fulfilled]: (state, action) => {
      state.getGenderLoading = false;
      state.gender = action.payload.data;
    },
    [getGenderAsync.rejected]: (state, action) => {
      state.getGenderLoading = false;
      state.error = action.payload;
    },
    [getMaritalStatusAsync.pending]: (state) => {
      state.getMaritalStatusLoading = true;
    },
    [getMaritalStatusAsync.fulfilled]: (state, action) => {
      state.getMaritalStatusLoading = false;
      state.maritalStatus = action.payload.data;
    },
    [getMaritalStatusAsync.rejected]: (state, action) => {
      state.getMaritalStatusLoading = false;
      state.error = action.payload;
    },
    [getAllStates.pending]: (state) => {
      state.getAllStatesLoading = true;
    },
    [getAllStates.fulfilled]: (state, action) => {
      state.getAllStatesLoading = false;
      state.states = action.payload.data;
    },
    [getAllStates.rejected]: (state, action) => {
      state.getAllStatesLoading = false;
      state.error = action.payload;
    },
    [getStateLGA.pending]: (state) => {
      state.getStateLGALoading = true;
    },
    [getStateLGA.fulfilled]: (state, action) => {
      state.getStateLGALoading = false;
      state.lgas = action.payload.data;
    },
    [getStateLGA.rejected]: (state, action) => {
      state.getStateLGALoading = false;
      state.error = action.payload;
    },
  },
});

const { reducer, actions } = utilsSlice;
// export const { resetInitialState } = actions;

export default reducer;

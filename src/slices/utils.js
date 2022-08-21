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

export const getLoanTypesAsync = createAsyncThunk(
  "utils/getLoanTypes",
  async (values, { rejectWithValue }) => {
    try {
      const response = await utilsService.getLoanTypes(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getLoanTenureAsync = createAsyncThunk(
  "utils/getLoanTenure",
  async (values, { rejectWithValue }) => {
    try {
      const response = await utilsService.getTenure(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getRepaymentChannelsAsync = createAsyncThunk(
  "utils/getRepaymentChannel",
  async (values, { rejectWithValue }) => {
    try {
      const response = await utilsService.getRepaymentChannels(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getBankStatementAsync = createAsyncThunk(
  "utils/getBankStatement",
  async (values, { rejectWithValue }) => {
    try {
      const response = await utilsService.getBankStatementType(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAllBanksAsync = createAsyncThunk(
  "utils/getAllBanks",
  async (values, { rejectWithValue }) => {
    try {
      const response = await utilsService.getAllBanks(values);
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
  getLoanTypesLoading: false,
  getBankStatementLoading: false,
  getMaritalStatusLoading: false,
  getRepaymentChannelsLoading: false,
  getAllStatesLoading: false,
  getStateLGALoading: false,
  getLoanTenureLoading: false,
  getAllBanksLoading: false,
  gender: [],
  maritalStatus: [],
  states: [],
  lgas: [],
  loanTypes: [],
  loanTenure: [],
  repaymentChannels: [],
  bankStatementType: [],
  allBanks: [],
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
    [getLoanTypesAsync.pending]: (state) => {
      state.getLoanTypesLoading = true;
    },
    [getLoanTypesAsync.fulfilled]: (state, action) => {
      state.getLoanTypesLoading = false;
      state.loanTypes = action.payload.data;
    },
    [getLoanTypesAsync.rejected]: (state, action) => {
      state.getLoanTypesLoading = false;
      state.error = action.payload;
    },
    [getLoanTenureAsync.pending]: (state) => {
      state.getLoanTenureLoading = true;
    },
    [getLoanTenureAsync.fulfilled]: (state, action) => {
      state.getLoanTenureLoading = false;
      state.loanTenure = action.payload.data;
    },
    [getLoanTenureAsync.rejected]: (state, action) => {
      state.getLoanTenureLoading = false;
      state.error = action.payload;
    },
    [getRepaymentChannelsAsync.pending]: (state) => {
      state.getRepaymentChannelsLoading = true;
    },
    [getRepaymentChannelsAsync.fulfilled]: (state, action) => {
      state.getRepaymentChannelsLoading = false;
      state.repaymentChannels = action.payload.data;
    },
    [getRepaymentChannelsAsync.rejected]: (state, action) => {
      state.getRepaymentChannelsLoading = false;
      state.error = action.payload;
    },
    [getBankStatementAsync.pending]: (state) => {
      state.getBankStatementLoading = true;
    },
    [getBankStatementAsync.fulfilled]: (state, action) => {
      state.getBankStatementLoading = false;
      state.bankStatementType = action.payload.data;
    },
    [getBankStatementAsync.rejected]: (state, action) => {
      state.getBankStatementLoading = false;
      state.error = action.payload;
    },
    [getAllBanksAsync.pending]: (state) => {
      state.getAllBanksLoading = true;
    },
    [getAllBanksAsync.fulfilled]: (state, action) => {
      state.getAllBanksLoading = false;
      state.allBanks = action.payload.data;
    },
    [getAllBanksAsync.rejected]: (state, action) => {
      state.getAllBanksLoading = false;
      state.error = action.payload;
    },
  },
});

const { reducer } = utilsSlice;

export default reducer;

// "loan_type_id": "1",
// "loan_amount": "800000.00",
// "tenor": "8",
// "repayment_channel": "remita",
// "statement_type": "mbs",
// "mbs_ticket_no": "12345-00",
// "mbs_ticket_password": "123456",
// "disbursement_account_no": "1234567890",
// "disbursement_account_name": "Okoro Hassan Opeyemi",
// "disbursement_bank_code": "000013"

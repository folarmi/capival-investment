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

export const getWalletBalanceAsync = createAsyncThunk(
  "utils/getWalletBalance",
  async (values, { rejectWithValue }) => {
    try {
      const response = await utilsService.getWalletBalance(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getRelationshipOfficerAsync = createAsyncThunk(
  "utils/getWalletBalance",
  async (values, { rejectWithValue }) => {
    try {
      const response = await utilsService.getRelationshipOfficer(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getHelpTopics = createAsyncThunk(
  "utils/getHelpTopics",
  async (values, { rejectWithValue }) => {
    try {
      const response = await utilsService.getHelpTopics(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAllEmployers = createAsyncThunk(
  "utils/getEmployers",
  async (values, { rejectWithValue }) => {
    try {
      const response = await utilsService.getAllCompanies(values);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getDashboardFeaturesAsync = createAsyncThunk(
  "utils/getDashboardFeatures",
  async (values, { rejectWithValue }) => {
    try {
      const response = await utilsService.getDashboardFeatures(values);
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
  getWalletBalanceLoading: false,
  getRelationShipOfficerLoading: false,
  gethelpTopicsLoading: false,
  getAllEmployersLoading: false,
  getDashboardFeaturesLoading: false,
  gender: [],
  maritalStatus: [],
  states: [],
  lgas: [],
  loanTypes: [],
  loanTenure: [],
  repaymentChannels: [],
  bankStatementType: [],
  allBanks: [],
  helpTopics: [],
  employers: [],
  officerDetails: "",
  dashboardFeatures: "",
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
    [getWalletBalanceAsync.pending]: (state) => {
      state.getWalletBalanceLoading = true;
    },
    [getWalletBalanceAsync.fulfilled]: (state) => {
      state.getWalletBalanceLoading = false;
    },
    [getWalletBalanceAsync.rejected]: (state, action) => {
      state.getWalletBalanceLoading = false;
      state.error = action.payload;
    },
    [getRelationshipOfficerAsync.pending]: (state) => {
      state.getRelationShipOfficerLoading = true;
    },
    [getRelationshipOfficerAsync.fulfilled]: (state, action) => {
      state.getRelationShipOfficerLoading = false;
      state.officerDetails = action.payload.data;
    },
    [getRelationshipOfficerAsync.rejected]: (state, action) => {
      state.getRelationShipOfficerLoading = false;
      state.error = action.payload;
    },
    [getHelpTopics.pending]: (state) => {
      state.gethelpTopicsLoading = true;
    },
    [getHelpTopics.fulfilled]: (state, action) => {
      state.gethelpTopicsLoading = false;
      state.helpTopics = action.payload.data;
    },
    [getHelpTopics.rejected]: (state, action) => {
      state.gethelpTopicsLoading = false;
      state.error = action.payload;
    },
    [getAllEmployers.pending]: (state) => {
      state.getAllEmployersLoading = true;
    },
    [getAllEmployers.fulfilled]: (state, action) => {
      state.getAllEmployersLoading = false;
      state.employers = action.payload.data;
    },
    [getAllEmployers.rejected]: (state, action) => {
      state.getAllEmployersLoading = false;
      state.error = action.payload;
    },
    [getDashboardFeaturesAsync.pending]: (state) => {
      state.getDashboardFeaturesLoading = true;
    },
    [getDashboardFeaturesAsync.fulfilled]: (state, action) => {
      state.getDashboardFeaturesLoading = false;
      state.dashboardFeatures = action.payload.data;
    },
    [getDashboardFeaturesAsync.rejected]: (state, action) => {
      state.getDashboardFeaturesLoading = false;
      state.error = action.payload;
    },
  },
});

const { reducer } = utilsSlice;

export default reducer;

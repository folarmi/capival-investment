import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import LoanService from "../services/loan.service";
import UtilsService from "../services/utils.services";

// export const getLoanTypesAsync = createAsyncThunk(
//   "loan/getLoanTypes",

//   async (values, { rejectWithValue }) => {
//     try {
//       const response = await UtilsService.getLoanTypes(values);
//       return response;
//     } catch (error) {
//       if (!error.response) {
//         throw error;
//       }
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

const initialState = {
  getLoanTypesLoading: false,
  loanTypes: "",
};

const loanSlice = createSlice({
  name: "loan",
  initialState,
  reducers: {},
  extraReducers: {},
});

const { reducer } = loanSlice;

export default reducer;

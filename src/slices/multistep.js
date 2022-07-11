import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
  bvn: null,
};

export const multiStepSlice = createSlice({
  name: "multistep",
  initialState,
  reducers: {
    handleNextButton: (state) => {
      state.value < 7 ? (state.value += 1) : (window.location = "/dashboard");
      state.value += 1;
    },
    handleBackButton: (state) => {
      //   state.value === 1 ? (state.value = 1) : (state.value -= 1);
      state.value = 1;
    },
    handleNextByCount: (state, action) => {
      state.value += action.payload;
    },
    handleBVN: (state, action) => {
      state.bvn = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
const { reducer, actions } = multiStepSlice;
export const {
  handleNextButton,
  handleBackButton,
  handleNextByCount,
  handleBVN,
} = actions;
export default reducer;

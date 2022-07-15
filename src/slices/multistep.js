import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
  bvnNumber: "",
};

export const multiStepSlice = createSlice({
  name: "multistep",
  initialState,
  reducers: {
    handleNextButton: (state, action) => {
      state.value <= 7 ? state.value++ : (window.location = "/dashboard");
      state.bvnNumber = action.payload;
      // state.value++;
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

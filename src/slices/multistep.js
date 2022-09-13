import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
  userInfo: {
    gender: "",
    address: "",
    email: "",
    password: "",
    passport: "",
    signature: "",
    otpEmail: "",
  },
  phoneNumber: "",
};

export const multiStepSlice = createSlice({
  name: "multistep",
  initialState,
  reducers: {
    handleNextButton: (state, action) => {
      state.value < 7 ? (state.value += 1) : (window.location = "/dashboard");
      state.userInfo.bvn = action.payload;
    },
    handleBackButton: (state) => {
      state.value === 1 ? (state.value = 1) : (state.value -= 1);
    },
    handleNextByCount: (state, action) => {
      state.value += action.payload;
    },
    handlePhoneNumber: (state, action) => {
      state.phoneNumber += action.payload;
    },
    handleGender: (state, action) => {
      state.userInfo.gender = action.payload;
    },
    handleOTPEmail: (state, action) => {
      state.userInfo.otpEmail = action.payload;
    },
    handleAddress: (state, action) => {
      state.userInfo.address = action.payload;
    },
    handleEmailAndPassword: (state, action) => {
      state.userInfo.email = action.payload.email;
      state.userInfo.password = action.payload.password;
    },
    handlePassport: (state, action) => {
      state.userInfo.passport = action.payload;
    },
    handleSignature: (state, action) => {
      state.userInfo.signature = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
const { reducer, actions } = multiStepSlice;
export const {
  handleNextButton,
  handleBackButton,
  handleNextByCount,
  handleGender,
  handleAddress,
  handleEmailAndPassword,
  handlePassport,
  handleSignature,
  handlePhoneNumber,
  handleOTPEmail,
} = actions;
export default reducer;

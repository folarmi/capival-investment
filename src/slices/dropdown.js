import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dropDownState: {
    id: "",
    show: false,
  },
};

export const dropDown = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    toggleDropDownState: (state, action) => {
      state.dropDownState.show = !state.dropDownState.show;
      state.dropDownState.id = action.payload;
    },
  },
});

const { reducer, actions } = dropDown;
export const { toggleDropDownState } = actions;
export default reducer;

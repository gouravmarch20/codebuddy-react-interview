import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    emailId: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    countryCode: "+91",
    phoneNumber: "",
    isAgreeTC: false,
  },
  currentStepIndex: 0,
  status: "idle",
};
const userSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
 
    nextStep: (state, action) => {
      state.currentStepIndex =  action.payload;
    },
    updateFields(state, action) {
      const fields = action.payload;
      state.user = { ...state.user, ...fields };
    },
  },
  extraReducers: {
 
  },
});
export const { logOut, nextStep, updateFields } = userSlice.actions;

export const { reducer: userReducer } = userSlice;

import { createSlice } from "@reduxjs/toolkit";

export const getInitialRegisterState = () => {
  return {
    registerLoader: false,
    registerResponse: null,
    registerError: null,
    registerPostdata : null
  };
};

const registerSlice = createSlice({
  name: "register",
  initialState: getInitialRegisterState(),
  reducers: {
    requestRegisterUser: (state, { payload }) => {
      state.registerLoader = true;
    },
    responseRegisterUser: (state, {payload}) => {
      state.registerLoader = false;
      state.registerResponse = payload;
      registerPostdata = payload;
    },
    errorRegisterUser: (state, { payload }) => {
      state.registerError = payload;
    },
  },
});

export const { requestRegisterUser, responseRegisterUser, errorRegisterUser } =
  registerSlice.actions;

export const registerSelector = (state) => state.register;

export default registerSlice.reducer;

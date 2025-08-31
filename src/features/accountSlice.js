import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    login: false,
    Name: "",
    email:""
  },
  reducers: {
    setLogin: (state, action) => {
      state.login = true;
      state.Name = action.payload.Name; 
    },
    logout: (state) => {
      state.login = false;
      state.email = "";
    },setemail:(state, action) =>{
        state.email=action.payload
    }
  }
});

export const { setLogin, logout,setemail } = accountSlice.actions;
export default accountSlice.reducer;

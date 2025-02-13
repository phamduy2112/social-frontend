

import { authInitalState } from "@/types/auth.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


  const initialState:authInitalState = {

    email:''
};
  
  const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
      setEmail: (state, action: PayloadAction<{ email: string }>) => {
        state.email = action.payload.email;
      },
    },

  });
  
  export const { setEmail } = authSlice.actions;
  
  export const authReducer = authSlice.reducer;
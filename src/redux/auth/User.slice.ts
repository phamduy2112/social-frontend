// login:false,
// import { registerApi } from "@/service/auth/auth.service";
import { getUserApi } from "@/service/user/user.service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getUserDetailThunk = createAsyncThunk(
    "getUserDetailThunk",
    async () => {      
      try {
        const resp = await getUserApi();
        return resp;
      } catch (e) {
        console.log(e);
      }
    },
  );
  
  const initialState = {
    userDetail:null,
    token:null,
    login:false,

};
  
  const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
      setLogin: (state, { payload }) => {
        state.login = payload;
      },
      setToken: (state, { payload }) => {
        state.token = payload;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(getUserDetailThunk.fulfilled, (state, { payload }) => {
          state.userDetail = payload;
        });
    },
  
  
  
  
  });
  
  export const { setLogin,setToken } = userSlice.actions;
  
  export const userReducer = userSlice.reducer;
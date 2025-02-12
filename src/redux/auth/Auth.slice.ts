// import { registerApi } from "@/service/auth/auth.service";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

// export const getSearchProductThunk = createAsyncThunk(
//     "getSearchProductThunk",
//     async (data:any) => {      
//       try {
//         const resp = await registerApi(data);
//         return resp;
//       } catch (e) {
//         console.log(e);
//       }
//     },
//   );
  
  const initialState = {

    email:''
};
  
  const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
      setEmail: (state, { payload }) => {
        state.email = payload.email;
      },
    },
    // extraReducers: (builder) => {
    //   builder
    //     .addCase(getSearchProductThunk.fulfilled, (state, { payload }) => {
    //       state.listSearch = payload;
    //     });
    // },
  
  
  
  
  });
  
  export const { setEmail } = authSlice.actions;
  
  export const authReducer = authSlice.reducer;
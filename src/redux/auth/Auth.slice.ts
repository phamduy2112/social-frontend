// import { registerApi } from "@/service/auth/auth.service";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
  
//   const initialState = {
//     login:false,
// };
  
//   const searchSlice = createSlice({
//     name: "searchSlice",
//     initialState,
//     reducers: {
//     //   setSearch: (state, { payload }) => {
//     //     state.listSearch = payload;
//     //   },
//     },
//     extraReducers: (builder) => {
//       builder
//         .addCase(getSearchProductThunk.fulfilled, (state, { payload }) => {
//           state.listSearch = payload;
//         });
//     },
  
  
  
  
//   });
  
//   export const { setSearch } = searchSlice.actions;
  
//   export const searchReducer = searchSlice.reducer;
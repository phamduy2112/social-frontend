// login:false,
// import { registerApi } from "@/service/auth/auth.service";

import { createFriendsApi, deleteFriendsApi, getFriendsApi } from "@/service/friend/friends.service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const getFriendsApiThunk = createAsyncThunk(
    "getFriendsApiThunk",
    async (data) => {      
      try {
        const resp = await getFriendsApi(data);

        return resp.data.content;
  
      } catch (e) {
        console.log(e);
      }
    },
  );
  export const createFriendsApiThunk = createAsyncThunk(
    "createFriendsApiThunk",
    async (data,{dispatch}) => {      
      try {
        const resp = await createFriendsApi(data);
        const listFriends=await dispatch(getFriendsApiThunk());

    }catch (err) {
        console.log(err);
    }
}
)
  export const deleteFriendsApiThunk = createAsyncThunk(
    "deleteFriendsApiThunk",
    async (id:number,{dispatch}) => {      
      try {
        const resp = await deleteFriendsApi(id);
        const listFriends=await dispatch(getFriendsApiThunk());
        return listFriends.payload
      } catch (e) {
        console.log(e);
      }
    },
  );
  const initialState:any = {
    listFriends:[]

};
  
  const friendSlice = createSlice({
    name: "friendSlice",
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
        .addCase(getFriendsApiThunk.fulfilled, (state, { payload }) => {
          state.listFriends = payload;
        });
    },
  
  
  
  
  });
  
  export const { setLogin,setToken } = friendSlice.actions;
  
  export const friendReducer = friendSlice.reducer;
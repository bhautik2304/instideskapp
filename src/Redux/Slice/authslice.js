import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    auth:{},
    authStatus:false
}

const authslice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authUsers:(state,action)=>{
      console.log(state.authStatus)
      state.authStatus=true
    }
  }
});

export const {authUsers} = authslice.actions

export const selectIsLoggedIn = (state) => state.authStatus;

export default authslice.reducer
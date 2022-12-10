import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    auth:[],
    authStatus:false
}
// https://gocoolgroup.com/crmportal/
const authslice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUsers:(state,action)=>{
      state.auth=action.payload
      state.authStatus=true
    },
    logoutUsers:(state,action)=>{
      state.auth=[]
      state.authStatus=false
    },
    registerUserData:(state,action)=>{
      state.auth=action.payload
      state.authStatus=true
    }
  }
});

export const {loginUsers,logoutUsers,registerUserData} = authslice.actions

export const selectIsLoggedIn = (state) => state.authStatus;

export default authslice.reducer
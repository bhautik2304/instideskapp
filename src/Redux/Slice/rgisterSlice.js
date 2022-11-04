import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    rgister: [],
}

const rgisterSlice = createSlice({
  name: "rgister",
  initialState,
  reducers: {
    registerInquiry:(state,action)=>{state.rgister.push(action.payload)},
}
});

export const {registerInquiry} = rgisterSlice.actions

export default rgisterSlice.reducer
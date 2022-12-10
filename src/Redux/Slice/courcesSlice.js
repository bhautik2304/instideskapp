import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    cources:[],
    stateUpdate:false
}

const courcesSlice = createSlice({
  name: "cources",
  initialState,
  reducers: {
    addCources:(state,action)=>{
        state.cources=action.payload
        state.stateUpdate=true
    }
  }
});

export const {addCources} = courcesSlice.actions

export default courcesSlice.reducer
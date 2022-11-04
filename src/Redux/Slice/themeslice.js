import { createSlice } from '@reduxjs/toolkit'
import { useTheme,Themmode } from "../../Theme/index";
const initialState = {
    theme:useTheme(false,Themmode)
}

const themeslice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
        swichMode:(state,action)=>{
                state.theme=action.payload
        }
  }
});

export const {swichMode} = themeslice.actions

export default themeslice.reducer
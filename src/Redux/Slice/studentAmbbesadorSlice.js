import { createAsyncThunk, createSlice }from '@reduxjs/toolkit'
import  axios  from "axios";

//  const collesges='https://gocoolgroup.com/api/university.php?token=70f1063ca2ae497bb9425a852683545b'
 const ambesader='https://dndtecnosol.in/api/ambesader'
 
export const fetchAmbesader = createAsyncThunk('ambesader',async () => axios(ambesader).then((e)=>e.data.data))

const initialState = {
    ambesader:[],
     loading:false
}



const studentAmbbesadorSlice = createSlice({
  name: "ambesader",
  initialState,
  extraReducers: {
    [fetchAmbesader.fulfilled]:(state,action)=>{
      state.loading=false;
      state.ambesader=action.payload;
    }
  }
});

// export const {} = studentAmbbesadorSlice.actions

export default studentAmbbesadorSlice.reducer
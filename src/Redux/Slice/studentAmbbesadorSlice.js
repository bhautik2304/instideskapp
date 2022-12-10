import { createAsyncThunk, createSlice }from '@reduxjs/toolkit'
import  axios  from "axios";

//  const collesges='https://gocoolgroup.com/api/university.php?token=70f1063ca2ae497bb9425a852683545b'
 const ambesader='https://buntyshairstudio.com/api/ambesader'
 
export const fetchAmbesader = createAsyncThunk('ambesader',async () =>{
   const data= axios.get(ambesader).then((e)=>e.data.data)
   return data
  })

const initialState = {
    ambesader:[],
     loading:false
}
// 79da8d5a2e8e9d89bf6f3b302b7de6f5 
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
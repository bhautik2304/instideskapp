import { createAsyncThunk, createSlice }from '@reduxjs/toolkit'
import  axios  from "axios";

 const collesges='https://gocoolgroup.com/api/university.php?token=70f1063ca2ae497bb9425a852683545b'

export const fetchCollege = createAsyncThunk('colleges',async () => axios(collesges).then((e)=>e.data.data))

const initialState = {
     colleges:[],
     loading:false
}

const Collegeslice = createSlice({
  name: 'colleges',
  initialState,
  extraReducers: {
    [fetchCollege.fulfilled]:(state,action)=>{
      state.loading=false;
      state.colleges=action.payload;
    }
  }
});

// export const {addcolleges} = Collegeslice.actions

export default Collegeslice.reducer
import { createAsyncThunk, createSlice }from '@reduxjs/toolkit'
import  axios  from "axios";
import apirouteconst from '../../constants/apirouteconst';

export const fetchCountry = createAsyncThunk('Country_all',async () => axios(apirouteconst.Country_all).then((e)=>e.data.data))

const initialState = {
     country:[],
     loading:false
}

const countrySlice = createSlice({
  name: 'country',
  initialState,
  extraReducers: {
    [fetchCountry.fulfilled]:(state,action)=>{
      state.loading=false;
      state.country=action.payload;
    }
  }
});

// export const {} = countrySlice.actions

export default countrySlice.reducer
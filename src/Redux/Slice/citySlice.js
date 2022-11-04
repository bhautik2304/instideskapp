import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import apirouteconst from '../../constants/apirouteconst';
// const user = useSelector((state) => state.authUser.auth)
export const fetchcity= createAsyncThunk('fetchall/city', async (id) => {
    axios(apirouteconst.city_all).then((e) => e.data.data)
})

const initialState = {
    city: [],
    loading: false
}

const citySlice = createSlice({
  name: "city",
  initialState,
  extraReducers: {
    [fetchcity.fulfilled]: (state, action) => {
        state.loading = false;
        state.city = action.payload;
    }
}
});

export const {} = citySlice.actions

export default citySlice.reducer
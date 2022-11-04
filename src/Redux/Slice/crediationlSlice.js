import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import apirouteconst from '../../constants/apirouteconst';
// const user = useSelector((state) => state.authUser.auth)
export const fetchcrediationl= createAsyncThunk('fetchall/crediationl', async (id) => {
    axios(apirouteconst.Credentials).then((e) => e.data.data)
})

const initialState = {
    crediationl: [],
    loading: false
}

const crediationlSlice = createSlice({
  name: "crediationl",
  initialState,
  extraReducers: {
    [fetchcrediationl.fulfilled]: (state, action) => {
        state.loading = false;
        state.application = action.payload;
    }
}
});

export const {} = crediationlSlice.actions

export default crediationlSlice.reducer
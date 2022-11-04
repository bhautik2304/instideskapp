import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";
import apirouteconst from '../../constants/apirouteconst';


export const fetchstate= createAsyncThunk('fetchall/state', async (id) => {
    axios(apirouteconst.State_all).then((e) => e.data.data)
})

const initialState = {
    state: [],
    loading: false
}

const stateSlice = createSlice({
  name: "state",
  initialState,
  extraReducers: {
    [fetchstate.fulfilled]: (state, action) => {
        state.loading = false;
        state.application = action.payload;
    }
}
});

export const {} = stateSlice.actions

export default stateSlice.reducer
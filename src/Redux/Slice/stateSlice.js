import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";
import apirouteconst from '../../constants/apirouteconst';


export const fetchstate= createAsyncThunk('fetchall/state', async (id) => {
   const state= axios(apirouteconst.State_all).then((e) => e.data.data)
   return state
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
        state.state = action.payload;
    }
}
});

export const {} = stateSlice.actions

export default stateSlice.reducer
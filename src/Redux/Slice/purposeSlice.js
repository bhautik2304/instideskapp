import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import apirouteconst from '../../constants/apirouteconst';

export const getPurpose= createAsyncThunk('purpose', async (_, thunkAPI) => {
    axios.get(apirouteconst.purpose).then((e) => {
       return e.data.data
    })
})

const initialState = {
    entities:[],
    loading: false
}

const purposeSlice = createSlice({
  name: "purpose",
  initialState,
  extraReducers: {
    [getPurpose.pending]: (state) => {
    state.loading = "pending"
  },
  [getPurpose.fulfilled]: (state, { payload }) => {
    state.loading = "done"
    state.entities = payload
  },
  [getPurpose.rejected]: (state) => {
    state.loading = "rejected"
  },
}
});

// export const {} = studySlice.actions

export default purposeSlice.reducer
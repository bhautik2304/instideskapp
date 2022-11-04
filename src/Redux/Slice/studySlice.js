import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import apirouteconst from '../../constants/apirouteconst';

export const fetchstudy= createAsyncThunk('fetchall/study', async () => {
    axios(apirouteconst.Education_strem).then((e) => e.data.data)
})

const initialState = {
    study: [],
    loading: false
}

const studySlice = createSlice({
  name: "study",
  initialState,
  extraReducers: {
    [fetchstudy.fulfilled]: (state, action) => {
        state.loading = false;
        state.application = action.payload;
    }
}
});

export const {} = studySlice.actions

export default studySlice.reducer
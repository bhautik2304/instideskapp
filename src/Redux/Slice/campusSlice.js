import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import apirouteconst from '../../constants/apirouteconst';

// const user = useSelector((state) => state.authUser.auth)
export const fetchcampus= createAsyncThunk('fetchall/campus', async (id) => {
    axios(apirouteconst.campus_all).then((e) => e.data.data)
})

const initialState = {
    campus: [],
    loading: false
}

const campusSlice = createSlice({
  name: "campus",
  initialState,
  extraReducers: {
    [fetchcampus.fulfilled]: (state, action) => {
        state.loading = false;
        state.application = action.payload;
    }
}
});

export const {} = campusSlice.actions

export default campusSlice.reducer
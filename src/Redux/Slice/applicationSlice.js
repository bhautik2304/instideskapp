import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

// const user = useSelector((state) => state.authUser.auth)
export const fetchApplication= createAsyncThunk('fetchall/application', async (id) => {
    axios('https://gocoolgroup.com/api/admission.php?token=70f1063ca2ae497bb9425a852683545b&id='+id).then((e) =>{
    console.lof(e.data)    
    return e.data.data
    })
})

const initialState = {
    application: [],
    loading: false
}

const applicationSlice = createSlice({
    name: "application",
    initialState,
    extraReducers: {
        [fetchApplication.fulfilled]: (state, action) => {
            state.loading = false
            state.application =state.application.push(action.payload)
        }
    }
});


export default applicationSlice.reducer
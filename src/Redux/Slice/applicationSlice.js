import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

// const user = useSelector((state) => state.authUser.auth)
export const fetchApplication= createAsyncThunk('fetchall/application', async (id) => {
    const data= axios('https://gocoolgroup.com/api/admission.php?token=70f1063ca2ae497bb9425a852683545b&id='+id).then((e) =>{  
    return e.data
    })
    return data
})

const initialState = {
    application: [],
    loading: false,
    code:''
}

const applicationSlice = createSlice({
    name: "application",
    initialState,
    extraReducers: {
        [fetchApplication.fulfilled]: (state, action) => {
            state.loading = false
            state.application =action.payload.data
            state.code=action.payload.code
        }
    }
});


export default applicationSlice.reducer
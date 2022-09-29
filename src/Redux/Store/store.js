import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../Slice/authslice'
export const store = configureStore({
  reducer: {
    authUser:authReducer
  },
})
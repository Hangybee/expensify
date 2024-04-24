import { configureStore } from '@reduxjs/toolkit'
import user from './slices/userSlice'
import userReducer from './slices/userSlice'
export const store = configureStore({
  reducer: {
    user : userReducer
  },
})
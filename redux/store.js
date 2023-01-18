import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import dialogReducer from './dialog/dialogSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        dialog: dialogReducer,
    },
})
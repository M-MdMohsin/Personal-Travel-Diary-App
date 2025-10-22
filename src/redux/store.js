import { configureStore } from '@reduxjs/toolkit'
import userReduser from './slice/userSlice'

export const store = configureStore({
    reducer: {
        user : userReduser
    }
})
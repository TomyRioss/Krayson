import { configureStore } from '@reduxjs/toolkit'
import BuyCarSlice from './slices/BuyCarSlice'

export const store = configureStore({
  reducer: {
    buyCar: BuyCarSlice
  },
})
import { configureStore } from '@reduxjs/toolkit'
import countrySlice from './slices/CountrySlice'
import savesSlice from './slices/SavesSlice'

export const store = configureStore({
  reducer: {
    countrySlice,
    savesSlice
  },
})
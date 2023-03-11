import { configureStore } from "@reduxjs/toolkit";
import mainReducer  from '../features/mainSlices'
import categoriesReducer from '../features/categoriesSlices'

export const store = configureStore({
  reducer:{
    mainReducer: mainReducer,
    categoriesReducer: categoriesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
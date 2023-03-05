import { configureStore } from "@reduxjs/toolkit";
import mainReducer  from '../features/mainSlices'

export const store = configureStore({
  reducer:{
    mainReducer: mainReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
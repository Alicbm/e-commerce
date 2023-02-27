import { configureStore } from "@reduxjs/toolkit";
import mainReducer  from '../features/mainSlices.jsx'

export const store = configureStore({
  reducer:{
    mainReducer: mainReducer
  }
})





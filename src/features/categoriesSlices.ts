import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category1: true,
  category2: false,
  category3: false,
  category4: false,
  category5: false,
  category6: false,
};

export const categoriesSlice = createSlice({
  name: 'categoriesSlice',
  initialState: initialState,
  reducers: {
    category1: (state, action) => {
      state.category1 = action.payload;
    },
    category2: (state, action) => {
      state.category2 = action.payload;
    },
    category3: (state, action) => {
      state.category3 = action.payload;
    },
    category4: (state, action) => {
      state.category4 = action.payload;
    },
    category5: (state, action) => {
      state.category5 = action.payload;
    },
    category6: (state, action) => {
      state.category6 = action.payload;
    }
  }
})

export const {
  category1,
  category2,
  category3,
  category4,
  category5,
  category6
} = categoriesSlice.actions

export default categoriesSlice.reducer



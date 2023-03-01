import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  modal: false,
  headerSearch: false,
  filterModal: false,
  sortModal: false,
  category1: true,
  category2: false,
  category3: false,
  category4: false,
  category5: false,
  category6: false,
}

export const mainSlice = createSlice({
  name: 'mainSlice',
  initialState: initialState,
  reducers:{
    modal: (state, action) => {
      state.modal = action.payload;
    },
    headerSearch: (state, action) => {
      state.headerSearch = action.payload;
    },
    filterModal: (state, action) => {
      state.filterModal = action.payload;
    },
    sortModal: (state, action) => {
      state.sortModal = action.payload;
    },
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
    },
  }
})

export const {
  modal,
  headerSearch,
  filterModal,
  sortModal,
  category1,
  category2,
  category3,
  category4,
  category5,
  category6,
} = mainSlice.actions;
export default mainSlice.reducer;

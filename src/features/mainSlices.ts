import { createSlice } from "@reduxjs/toolkit";

const descriptionProduct = {
  brand: "",
  category: {
    id: 0,
    name: '',
    image: '',
    createAt: ''
  },
  categoryId: 0,
  createAt: "",
  description: "",
  favorite: false,
  id: 0,
  image: "",
  name: "",
  price: 0,
  product: "",
};

const initialState = {
  mainUrl: "https://online-store-production.up.railway.app/api/v1/",
  modal: false,
  headerSearch: false,
  filterModal: false,
  sortModal: false,
  nameCategory: "",
  productSelected: descriptionProduct,
  typeProductSelected: [],
  relevantProduct: [],
  refreshValues: false,
  category1: true,
  category2: false,
  category3: false,
  category4: false,
  category5: false,
  category6: false,
};

export const mainSlice = createSlice({
  name: "mainSlice",
  initialState: initialState,
  reducers: {
    mainUrl: (state, action) => {
      state.mainUrl = "https://online-store-production.up.railway.app/api/v1/";
    },
    modal: (state, action) => {
      state.modal = action.payload;
    },
    headerSearch: (state, action) => {
      state.headerSearch = action.payload;
    },
    filterModal: (state, action) => {
      state.filterModal = action.payload;
      if (state.filterModal) {
        state.sortModal = false;
      }
    },
    sortModal: (state, action) => {
      state.sortModal = action.payload;
      if (state.sortModal) {
        state.filterModal = false;
      }
    },
    nameCategory: (state, action) => {
      state.nameCategory = action.payload;
    },
    productSelected: (state, action) => {
      state.productSelected = action.payload;
    },
    typeProductSelected: (state, action) => {
      state.typeProductSelected = action.payload;
    },
    relevantProduct: (state, action) => {
      state.relevantProduct = action.payload
    },
    refreshValues: (state, action) => {
      state.refreshValues = action.payload
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
  },
});

export const {
  mainUrl,
  modal,
  headerSearch,
  filterModal,
  sortModal,
  nameCategory,
  productSelected,
  typeProductSelected,
  relevantProduct,
  refreshValues,
  category1,
  category2,
  category3,
  category4,
  category5,
  category6,
} = mainSlice.actions;
export default mainSlice.reducer;

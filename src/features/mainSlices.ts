import { createSlice } from "@reduxjs/toolkit";
import { storage } from "../functions/function";
import { ArrayProducts, DescriptionProduct } from "../types";

const dataProductSelected: DescriptionProduct = storage('BARGAILIX_PRODUCT_SELECTED')
const dataCartProducts: ArrayProducts[] = storage('BARGAILIX_CART_PRODUCTS')

const initialState = {
  mainUrl: "https://online-store-production.up.railway.app/api/v1/",
  modal: false,
  headerSearch: false,
  filterModal: false,
  sortModal: false,
  nameCategory: "",
  productSelected: dataProductSelected,
  typeProductSelected: [],
  relevantProduct: [],
  refreshValues: false,
  refreshValuesTwo: false,
  cartProducts: dataCartProducts,
  comments: [],
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
    refreshValuesTwo: (state, action) => {
      state.refreshValuesTwo = action.payload
    },
    cartProducts: (state, action) => {
      state.cartProducts = action.payload
    },
    comments: (state, action) => {
      state.comments = action.payload
    } 
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
  refreshValuesTwo,
  cartProducts,
  comments
} = mainSlice.actions
export default mainSlice.reducer;

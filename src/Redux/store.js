import { configureStore, createSlice } from "@reduxjs/toolkit";

// Create a slice with a global constant
const imgGlobalSrcSlice = createSlice({
  name: "imgGlobalSrc",
  initialState: { value: "" }, // Your global constant
  reducers: {
    setimgGlobalSrc: (state, action) => {
      state.value = action.payload;
    },
  },
  
});

const productGlobalDataSlice = createSlice({
  name: "productGlobalData",
  initialState: { value: "" }, // Your global constant
  reducers: {
    setproductGlobalData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setimgGlobalSrc } = imgGlobalSrcSlice.actions;
export const { setproductGlobalData } = productGlobalDataSlice.actions;

// Configure store
const store = configureStore({
  reducer: {
    imgGlobalSrc: imgGlobalSrcSlice.reducer,
    productGlobalData: productGlobalDataSlice.reducer
  },
});

export default store;
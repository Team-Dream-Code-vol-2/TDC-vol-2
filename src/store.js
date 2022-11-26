import { configureStore } from '@reduxjs/toolkit'
import productReducer from './features/product'
import cartReducer from './features/cart'

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  }
});

export default store;
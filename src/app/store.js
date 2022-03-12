import { configureStore } from "@reduxjs/toolkit";

import infoReducer from "../features/info/infoSlice";
import cartReducer from '../features/cart/cartSlice'

const store = configureStore({
  reducer: {
    data: infoReducer,
    cart: cartReducer,
  },
});

export default store;

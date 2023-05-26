import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import productReducer from "./productsSlice";
import cartReducer from "./cartSlice";;

const store = configureStore({
    reducer: {
        user: userReducer,
        products: productReducer,
        cart: cartReducer
    }
})

export default store;
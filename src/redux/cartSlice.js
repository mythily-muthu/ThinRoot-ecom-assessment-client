import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalItems: 0,
    totalPrice: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { item, quantity } = action.payload;
            const existingItem = state.cartItems.find((cartItem) => cartItem.id === item.id);

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.cartItems.push({ ...item, quantity });
            }

            state.totalItems += quantity;
            state.totalPrice += item.price * quantity;
        },
        removeFromCart: (state, action) => {
            const { itemId, quantity } = action.payload;
            const existingItem = state.cartItems.find((cartItem) => cartItem.id === itemId);

            if (existingItem) {
                if (existingItem.quantity > quantity) {
                    existingItem.quantity -= quantity;
                } else {
                    state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== itemId);
                }

                state.totalItems -= quantity;
                state.totalPrice -= existingItem.price * quantity;
            }
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.totalItems = 0;
            state.totalPrice = 0;
        },
    }
})

// export actions
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

// export reducer
export default cartSlice.reducer;
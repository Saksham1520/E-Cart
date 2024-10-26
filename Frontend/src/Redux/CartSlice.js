import { createSlice } from "@reduxjs/toolkit"


const cartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        carts: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id)

            if (itemIndex < 0) {
                const temp = { ...action.payload, qnty: 1 }
                state.carts = [...state.carts, temp]
            } else {
                state.carts[itemIndex].qnty += 1
            }
        },

        increament: (state, action) => {
            const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id)

            if (itemIndex >= 0) {
                state.carts[itemIndex].qnty += 1
            }
        },

        decreament: (state, action) => {
            const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id)

            if (itemIndex >= 0) {
                if (state.carts[itemIndex].qnty > 1) {
                    state.carts[itemIndex].qnty--
                } else {
                    const data = state.carts.filter((item) => item.id !== action.payload.id)
                    state.carts = data
                }
            }
        },

        deleteItem: (state, action) => {
            const finalCart = state.carts.filter((item) => item.id !== action.payload.id)

            state.carts = finalCart
        },

        deleteAllItems: (state, action) => {
            state.carts = action.payload
        }
    }

})

export const { addToCart, increament, decreament, deleteItem, deleteAllItems } = cartSlice.actions;
export default cartSlice.reducer;
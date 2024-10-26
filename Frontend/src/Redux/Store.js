import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import FilterProduct from "../Components/FilterProduct";
import SearchSlice from "./SearchSlice";


const store = configureStore({
    reducer: {
        allcart: CartSlice,
        search: SearchSlice,
    }
})

export default store;
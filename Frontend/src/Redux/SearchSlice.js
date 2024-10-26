import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "searchSlice",
    initialState: {
        searchProduct: "",
        radioFilter: {},
    },
    reducers: {
        setSearchProduct: (state, action) => {
            state.searchProduct = action.payload
        },
        setRadioFilter: (state, action) => {
            state.radioFilter = action.payload
        }
    }
})

export const { setSearchProduct, setRadioFilter } = searchSlice.actions;

export default searchSlice.reducer
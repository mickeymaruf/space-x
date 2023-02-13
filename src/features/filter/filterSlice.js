import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchText: ""
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        searchReducer: (state, action) => {
            state.searchText = action.payload;
        }
    }
})

export const { searchReducer } = filterSlice.actions;
export default filterSlice.reducer;
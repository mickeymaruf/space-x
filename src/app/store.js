import { configureStore } from "@reduxjs/toolkit";
import addressSlice from "../features/address/addressSlice";
import filterSlice from "../features/filter/filterSlice";
import historySlice from "../features/history/historySlice";

const store = configureStore({
    reducer: {
        history: historySlice,
        address: addressSlice,
        filter: filterSlice
    }
});

export default store;
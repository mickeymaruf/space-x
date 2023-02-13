import { configureStore } from "@reduxjs/toolkit";
import addressSlice from "../features/address/addressSlice";
import historySlice from "../features/history/historySlice";

const store = configureStore({
    reducer: {
        history: historySlice,
        address: addressSlice
    }
});

export default store;
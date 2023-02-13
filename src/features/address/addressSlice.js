import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    addresses: [],
    error: null
};

export const getAddressesData = createAsyncThunk("address/getAddressesData", async () => {
    const res = await fetch("https://api.spacexdata.com/v3/payloads");
    const data = await res.json();
    return data;
})

const addressSlice = createSlice({
    name: "address",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAddressesData.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
        })
        builder.addCase(getAddressesData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.addresses = action.payload;
        })
        builder.addCase(getAddressesData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
            state.addresses = [];
        })
    }
});

export default addressSlice.reducer;
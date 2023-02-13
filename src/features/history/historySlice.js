import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    histories: [],
    error: null
};

export const getHistoriesData = createAsyncThunk("history/getHistoriesData", async () => {
    const res = await fetch("https://api.spacexdata.com/v3/history");
    const data = await res.json();
    return data;
})

const historySlice = createSlice({
    name: "history",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getHistoriesData.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
            state.histories = action.payload;
        })
        builder.addCase(getHistoriesData.fulfilled, (state, action) => {
            state.histories = action.payload;
            state.isLoading = false;
        })
        builder.addCase(getHistoriesData.rejected, (state, action) => {
            state.histories = [];
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
})

export default historySlice.reducer;
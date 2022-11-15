import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        favorites: []
    },

    reducers: {
        getAllFavs: (state, action) => {
            state.favorites = action.payload;
        },
    },
});

export const { getAllFavs } = favoritesSlice.actions;

export default favoritesSlice.reducer;

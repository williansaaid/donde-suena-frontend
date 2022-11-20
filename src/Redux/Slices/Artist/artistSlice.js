import { createSlice } from "@reduxjs/toolkit";

export const artistSlice = createSlice({
    name: "artist",
    initialState: {
        artists: [],
    },
    reducers: {
        getAllArtists: (state, action) => {
            state.artists = action.payload;
        },
    }
})
export const {
    getAllArtists
} = artistSlice.actions;
export default artistSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const artistSlice = createSlice({
    name: "artist",
    initialState: {
        artists: [],
        artistId: [],
    },
    reducers: {
        getAllArtists: (state, action) => {
            state.artists = action.payload;
        },
        getAllArtistById: (state, action) => {
            state.artistId = action.payload;
        },
    }
})
export const {
    getAllArtists,
    getAllArtistById
} = artistSlice.actions;
export default artistSlice.reducer;

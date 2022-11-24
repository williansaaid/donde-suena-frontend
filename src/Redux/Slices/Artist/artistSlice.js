import { createSlice } from "@reduxjs/toolkit";

export const artistSlice = createSlice({
    name: "artist",
    initialState: {
        artists: [],
        artistId: [],
        events: []
    },
    reducers: {
        getAllArtists: (state, action) => {
            state.artists = action.payload;
        },
        getAllArtistById: (state, action) => {
            state.artistId = action.payload;
        },
        getArtistShows: (state, action) => {
            state.events = action.payload;
        }
    }
})
export const {
    getAllArtists,
    getAllArtistById,
    getArtistShows,
} = artistSlice.actions;
export default artistSlice.reducer;

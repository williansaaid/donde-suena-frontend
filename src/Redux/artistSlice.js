import { createSlice } from "@reduxjs/toolkit";

export const artistSlice = createSlice({
    name: "artist",
    initialState: {
        artist: [],
       
    },
    reducers: {

        getAllArtists: (state, action) => {
            state.events = action.payload;
        },
    }
})
export const {
    getAllArtists
} = artistSlice.actions; //en .actions guardo las funciones
export default artistSlice.reducer;
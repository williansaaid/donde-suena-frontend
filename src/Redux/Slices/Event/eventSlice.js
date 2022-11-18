import { createSlice } from "@reduxjs/toolkit";

export const eventsSlice = createSlice({
    name: "events",
    initialState: {
        events: [],
        detail: {},
    },

    reducers: {
        getAllEvents: (state, action) => {
            state.events = action.payload;
        },
        getAllEventsById: (state, action) => {
            state.detail = action.payload;
        },
        filteredEvents: (state, action) => {
            state.events = action.payload;
        },
        getEventsByName: (state, action) => {
            state.events = action.payload;
        },
    },
});
export const {
    getAllEvents,
    getAllEventsById,
    filteredEvents,
    getEventsByName,
} = eventsSlice.actions; //en .actions guardo las funciones
export default eventsSlice.reducer;

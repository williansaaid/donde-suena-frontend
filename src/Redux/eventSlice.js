import { createSlice } from "@reduxjs/toolkit";

export const eventsSlice = createSlice({
    name: "events",
    initialState: {
        events: [],
        detail: {},
        userIsLogged: false,
        googleToken: {},
    },
    //usando redux toolkits son los reducers son una mezcla de actions y reducers
    reducers: {
        getAllEvents: (state, action) => {
            state.events = action.payload;
        },
        getAllEventsById: (state, action) => {
            state.detail = action.payload;
        },
        logUser: (state, action) => {
            state.userIsLogged = action.payload && true;
        },
        googleRegister: (state, action) => {
            state.googleToken = action.payload;
        },
    },
});
export const { getAllEvents, getAllEventsById, logUser, googleRegister } =
    eventsSlice.actions; //en .actions guardo las funciones
export default eventsSlice.reducer;

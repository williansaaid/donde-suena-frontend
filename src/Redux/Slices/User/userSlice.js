import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userIsLogged: false,
        googleToken: {},
        modal: false,
        tickets: []
    },
    reducers: {
        logUser: (state, action) => {
            state.userIsLogged = action.payload && true;
        },
        googleRegister: (state, action) => {
            state.googleToken = action.payload;
        },
        changeModal: (state, action) => {
            state.modal = !state.modal;
        },
        getAllTicketsByUser: (state, action) => {
            state.tickets = action.payload;
        },
    },
});
export const {
    logUser,
    googleRegister,
    changeModal,
    getAllTicketsByUser,
} = userSlice.actions;
export default userSlice.reducer;

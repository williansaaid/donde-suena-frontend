import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        modal: false,
        tickets: []
    },
    reducers: {
        changeModal: (state, action) => {
            state.modal = !state.modal;
        },
        getAllTicketsByUser: (state, action) => {
            state.tickets = action.payload;
        },
    },
});
    
export const { logUser, getAllTicketsByUser } = userSlice.actions;
export default userSlice.reducer;

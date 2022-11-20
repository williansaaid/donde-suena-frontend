import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "userPublic",
    initialState: {
        modal: false,
        tickets: [],
        paymentUrl: "",
    },
    reducers: {
        paymentOrder: (state, action) => {
            state.paymentUrl = action.payload;
        },
        getAllTicketsByUser: (state, action) => {
            state.tickets = action.payload;
        },

        clearPaymentOrder: (state) => {
            state.paymentUrl = "";
        },
    },
});
export const { logUser, getAllTicketsByUser, paymentOrder, clearPaymentOrder } =
    userSlice.actions;

export default userSlice.reducer;

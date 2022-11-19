import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "userPublic",
    initialState: {
        modal: false,
        paymentUrl: ""
    },
    reducers: {
        paymentOrder: (state, action) => {
            state.paymentUrl = action.payload;
        },
        clearPaymentOrder: (state) => {
            state.paymentUrl = "";
        }
    },
});
export const {
    paymentOrder,
    clearPaymentOrder
} = userSlice.actions;

export default userSlice.reducer;

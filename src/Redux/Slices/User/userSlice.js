import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        modal: false,
        paymentUrl: ""
    },
    reducers: {
        paymentOrder: (state, action) => {
            state.paymentUrl = action.payload;
        }
    },
});
export const {
    paymentOrder
} = userSlice.actions;

export default userSlice.reducer;

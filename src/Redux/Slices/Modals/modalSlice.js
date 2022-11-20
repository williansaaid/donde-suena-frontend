import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "modal",
    initialState: {
        loginOpen: false,
    },
    reducers: {
        loginModal: (state, action) => {
            state.loginOpen = !state.loginOpen;
        },
    },
});
export const { loginModal } = modalSlice.actions;
export default modalSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userIsLogged: false,
        googleToken: {},
        modal: false,
        paymentUrl: ""
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
        paymentOrder: (state, action) => {
            state.paymentUrl = action.payload;
        }
    },
});
export const {
    logUser,
    googleRegister,
    changeModal,
    paymentOrder
} = userSlice.actions;
export default userSlice.reducer;

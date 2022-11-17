import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userIsLogged: false,
        googleToken: {},
        modal: false,
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
        }
    },
});
export const {
    logUser,
    googleRegister,
    changeModal
} = userSlice.actions;
export default userSlice.reducer;

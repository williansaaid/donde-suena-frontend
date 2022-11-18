import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        modal: false,
    },
    reducers: {
        changeModal: (state, action) => {
            state.modal = !state.modal;
        },
    },
});
export const { logUser } = userSlice.actions;
export default userSlice.reducer;

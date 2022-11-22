import { createSlice } from "@reduxjs/toolkit";

export const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        comments: [],
    },
    reducers: {
        getAllComments: (state, action) => {
            state.comments = action.payload;
        },
    },
});
export const { getAllComments } = commentsSlice.actions;
export default commentsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        postsId: {},
    },
    reducers: {
        getPostById: (state, action) => {
            state.postsId = action.payload;
        },
        getPost: (state, action) => {
            state.posts = action.payload;
        },
    },
});
export const { getPost, getPostById } = postSlice.actions;
export default postSlice.reducer;

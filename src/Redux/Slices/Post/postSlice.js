import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice
({
  name: "posts",
  initialState: {
      posts: [],
  },
  reducers: {
      getPostById: (state, action) => {
          state.posts = action.payload;
      },
  }
})
export const {
 getPostById
} = postSlice.actions;
export default postSlice.reducer;

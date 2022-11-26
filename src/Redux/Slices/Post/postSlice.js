import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice
({
  name: "posts",
  initialState: {
      posts: [],
  },
  reducers: {
    getPost: (state, action) => {
          state.posts = action.payload;
      },
  }
})
export const {
 getPost
} = postSlice.actions;
export default postSlice.reducer;

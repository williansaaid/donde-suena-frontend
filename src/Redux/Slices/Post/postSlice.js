import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice
({
  name: "posts",
  initialState: {
      posts: [],
      postsId:[],
  },
  reducers: {
      getPostById: (state, action) => {
          state.postsId = action.payload;
      },
  }
})
export const {
 getPostById
} = postSlice.actions;
export default postSlice.reducer;

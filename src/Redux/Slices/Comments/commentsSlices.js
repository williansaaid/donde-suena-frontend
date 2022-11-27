import { createSlice } from "@reduxjs/toolkit";

export const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        comments: [],
        artists:[],
        users:[],
    },
    reducers: {
        getAllComments: (state, action) => {
            state.comments = action.payload;
        },
        addComment: (state, action ) => {
          state.comments = action.payload
        },
        deleteComment: (state,action) =>{
          state.comments =action.payload
        }
       editComment: (state , action ) => {
        state.comments =action.payload
       },
       replyComment : (state,action) => {
        state.comments=action.payload
       },

     },

});
export const { getAllComments,addComment, editComment, replyComment} = commentsSlice.actions;
export default commentsSlice.reducer;

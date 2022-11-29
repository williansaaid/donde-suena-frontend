import { createSlice } from "@reduxjs/toolkit";



export const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        comments: [],
        commentsId:[],
        reply:[],
        delete:[],

    },
    reducers: {
        getAllComments: (state, action) => {
            state.comments = action.payload;
        },
        getCommentById:(state,action) =>{
          state.commentsId=action.payload
        },
        addComment: (state, action ) => {
          state.reply = action.payload
        },
        deleteComments: (state,action) =>{
          state.delete =action.payload
        },
       editComment: (state , action ) => {
        state.comments =action.payload
       },
      

     },

});
export const { getAllComments,getCommentsById,addComment, editComment, deleteComments} = commentsSlice.actions;
export default commentsSlice.reducer;

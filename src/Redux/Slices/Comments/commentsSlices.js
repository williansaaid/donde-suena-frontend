import { createSlice } from "@reduxjs/toolkit";

export const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        comments: [],
        commentsId: [],
        
      
    },
    reducers: {
        getAllComments: (state, action) => {
            state.comments = action.payload;
        },
        addComment: (state, action ) => {
          state.comments = action.payload
        },
        deleteComments: (state,action) =>{
          state.comments =action.payload
        },
       editComment: (state , action ) => {
        state.comments =action.payload
       },
      

     },

});
export const { getAllComments,addComment, editComment, deleteComments} = commentsSlice.actions;
export default commentsSlice.reducer;

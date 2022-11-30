import axios from "axios";

import {getAllComments, getCommentsById , addComment , editComment , deleteComments} from "./commentsSlices";

export const getComments =(id) =>(dispatch) =>{
  axios.get(`/auth/artist/getComments/${id}`)
  .then((res)=>{
    dispatch(getCommentsById(res.data.comments[0].id))

  } )
  .catch((e)=>console.log(e));
}
export const createComment =(comments)=>(dispatch)=>{
  axios.post("/auth/user/createComment", comments)
    .then((res)=>{
      console.log(res.data.newComment)
      dispatch(addComment(res.data.newComment))})
    .catch((e) => console.log(e));
}
export const createCommentArtist =(comments)=>(dispatch)=>{
  axios.post("/auth/artist/createComment", comments)
    .then((res)=>{
      console.log(res.data.newComment)
      dispatch(addComment(res.data.newComment))})
    .catch((e) => console.log(e));
}
// export const addComment = (comments) =>(dispatch) => {
//   axios.post("")
// }

export const deleteComment=(id)=>(dispatch) =>{
  axios.delete (`/auth/user/deleteComment/${id}`)
  .then((res)=>{
    dispatch(deleteComments(res.data.id))
  })
  .catch((e)=>console.log(e))
}
export const updateComment=(id)=>(dispatch)=>{
  axios.put(`/auth/user/editComment/${id}`)
  .then((res)=>{
    dispatch(editComment(res.data.id))
  })
  .catch((e)=>console.log(e))
}

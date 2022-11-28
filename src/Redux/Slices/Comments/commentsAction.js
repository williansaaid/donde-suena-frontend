import axios from "axios";

import {getAllComments , addComment , editComment , deleteComments} from "./commentsSlices"; 

export const getComments =(id) =>(dispatch) =>{
  axios.post(`http://localhost:3001/auth/artist/getComments/${id}`)
  .then((res)=>{
    dispatch(getAllComments(res.data.id))
  } )
  .catch((e)=>console.log(e));
}
export const createComment =(comments)=>(dispatch)=>{
  axios.post("http://localhost:3001/auth/user/createComment", comments)
    .then((res)=>{
      console.log(res.data.newComment)
      dispatch(addComment(res.data.newComment))})
    .catch((e) => console.log(e));
}
// export const addComment = (comments) =>(dispatch) => {
//   axios.post("")
// }

export const deleteComment=(id)=>(dispatch) =>{
  axios.delete (`http://localhost:3001/auth/user/deleteComment/${id}`)
  .then((res)=>{
    dispatch(deleteComments(res.data.id))
  })
  .catch((e)=>console.log(e))
}
export const updateComment=(id)=>(dispatch)=>{
  axios.put(`http://localhost:3001/auth/user/editComment/${id}`)
  .then((res)=>{
    dispatch(editComment(res.data.id))
  })
  .catch((e)=>console.log(e)) 
}

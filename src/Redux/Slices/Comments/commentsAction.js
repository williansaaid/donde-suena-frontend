import axios from "axios";

import {getAllComments} from "./commentsSlices";

export const getComments =(comments)=>(dispatch)=>{
  axios.post("http://localhost:3001/auth/user/createComment", comments)
    .then((res)=>{
      console.log(res.data.newComment)
      dispatch(getAllComments(res.data.newComment))})
    .catch((e) => console.log(e));
}
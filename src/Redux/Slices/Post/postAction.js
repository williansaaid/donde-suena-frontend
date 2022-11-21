import axios from "axios";

import { getPostById } from "./postSlice";

export const getPostId =()=>(dispatch)=>{
  axios.get("http://localhost:3001/auth/artist/getPost/aadd8222-ee5d-482b-8464-b59d33b90ab2")
    .then((res)=>{
      console.log(res.data.postId.posts)
      dispatch(getPostById(res.data.postId.posts))})
    .catch((e) => console.log(e));
}


import axios from "axios";

import { getPostById } from "./postSlice";

export const getPostId =(nickname)=>(dispatch)=>{
  axios.get(`http://localhost:3001/auth/artist/getPosts?name=${nickname}`)
    .then((res)=>{
      dispatch(getPostById(res.data.findPosts.posts))})
    .catch((e) => console.log(e));
}

// export const getPostId =()=>(dispatch)=>{
//   axios.get("http://localhost:3001/auth/artist/getPosts")
//     .then((res)=>{
//       console.log(res.data.allPosts)
//       dispatch(getPostById(res.data.allPosts))})
//     .catch((e) => console.log(e));
// }



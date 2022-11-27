import axios from "axios";


import { getPost } from "./postSlice";

export const getPosts=()=>(dispatch)=>{
  axios.get("http://localhost:3001/auth/artist/getPosts/")
    .then((res)=>dispatch(getPost(res.data.allPosts)))
    .catch((e) => console.log(e));
}


// export const getPostId =()=>(dispatch)=>{
//   axios.get("http://localhost:3001/auth/artist/getPosts")
//     .then((res)=>{
//       console.log(res.data.allPosts)
//       dispatch(getPostById(res.data.allPosts))})
//     .catch((e) => console.log(e));
// }


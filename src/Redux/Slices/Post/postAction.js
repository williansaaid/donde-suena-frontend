import axios from "axios";
import { getPost, getPostById} from "./postSlice";

export const getPostId =(id)=>(dispatch)=>{
  axios.get(`http://localhost:3001/auth/artist/getPost/${id}`)
    .then((res)=>{
      console.log(res.data)
      dispatch(getPostById(res.data.postId))})
      .catch((e) => console.log(e));
    }
export const getPosts=()=>(dispatch)=>{
  axios.get("http://localhost:3001/auth/artist/getPosts/")
    .then((res)=>dispatch(getPost(res.data.allPosts)))
    .catch((e) => console.log(e));
}

// export const getPostById =()=>(dispatch)=>{
//   axios.get("http://localhost:3001/auth/artist/getPosts")
//     .then((res)=>{
//       console.log(res.data.allPosts)
//       dispatch(getPostById(res.data.allPosts))})
//     .catch((e) => console.log(e));
// }


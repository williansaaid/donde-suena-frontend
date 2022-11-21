import {getPostId} from "../../Redux/Slices/Post/postAction"
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {Comments} from "../Comments/Comments"
import { TextField } from "@mui/material";




export const PostId=() =>{ 
  const dispatch = useDispatch();
  const  {posts} = useSelector((state) => state.posts);
  const [visible, setVisible] = useState();

  useEffect(() => {
    dispatch(getPostId());
}, [dispatch]);
const showMorePost = () => {
    setVisible((prevValue) => prevValue + 4);
};

  console.log(posts)
return (

  <div>
{posts && posts?.map((el)=>{
  return(
    <div class="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-56 max-w-md md:max-w-2xl ">
      <div class="flex items-start px-4 py-6">
      <div class="">
      <div class="flex items-center justify-between">
      <h2 class="text-lg font-semibold text-gray-900 -mt-1">{el.title}</h2>
      <p class="mt-3 text-gray-700 text-sm">
        {el.description}
      </p>
      
      <img
          src={el.image ? el.image : ""}
          alt=""
          width="200" 
          height="100"
        />
        <Comments></Comments>
  

      {/* artist={el.artist} */}
    </div>
    <form>
      <TextField
      label="añadir comentario"
      size="small"
      variant="outlined"
      className="post_input"
      placeholder="añadir comentario"
      // value={comment}
      // on change ={e => setComment(e.target.value)}
      />
    </form>
    <button
    variant="contained"
    size="small"


    >
      Enviar
    </button>
      </div>
      </div>
      </div>
          
  )
})}

  </div>
)
}


export default PostId;
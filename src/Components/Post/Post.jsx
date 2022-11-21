import React  from "react";
import LikeButton from "../LikeButton/LikeButton";


export const Post =({ name , description ,message ,photoUrl}) =>{
  return (
 <div className="post" class="bg-slate-400 p-15 mb-10 rounded-lg">
  <div className="post_header" class="flex-initial mb-10 ">
    <h2>Foto de perfil</h2>
    <div className="post_info" class="ml-10px"></div>
    <h2 class="text-xs" >{name}</h2>
    <p class="text-xs text-white ">{description}</p>
  </div>
  <div className="post_body" class="break-words">
  <p>{message}</p>
  </div>

  <div className="post-Button">
<LikeButton class="items-center"/>
  </div>
 </div>

 
  )
}
export default Post
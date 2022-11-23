import React  from "react";
import LikeButton from "../LikeButton/LikeButton";


export const Post =({ name , description ,message ,photoUrl}) =>{
  return (
 <div className="post" className="bg-slate-400 p-15 mb-10 rounded-lg">
  <div className="post_header" className="flex-initial mb-10 ">
    <h2>Foto de perfil</h2>
    <div className="post_info" className="ml-10px"></div>
    <h2 className="text-xs" >{name}</h2>
    <p className="text-xs text-white ">{description}</p>
  </div>
  <div className="post_body" className="break-words">
  <p>{message}</p>
  </div>

  <div className="post-Button">
<LikeButton className="items-center"/>
  </div>
 </div>


  )
}
export default Post

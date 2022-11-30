import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
 import { useParams } from "react-router-dom";
import { getComments } from "../../Redux/Slices/Comments/commentsAction"
import { Comments } from "../CommentsUser/Comments";
import {DateTime} from "../DateTime/DateTime"
export const  PostDetail =()=>{
  const dispatch = useDispatch();
  const {postDetail} =useSelector((state)=>state?.postDetail);
  const {id}=useParams();
 
  useEffect(()=>{dispatch(getComments(id))},[dispatch,id])
  
  console.log(postDetail)

  return (<div className="flex flex-col gray-200  ">

<div className="h-23 bg-gray-200 flex items-center justify-center  ">
                            <div className=" mt-5 w-3/4  mx-auto rounded-lg bg-gray-200 shadow p-5 text-gray-800 flex bg-white shadow-lg rounded-lg md:max-w-2xl   ">
                                <div className="w-full flex mb-4">
                                    <img
                                        class="w-12 h-12 rounded-full object-cover 
                                  shadow "
                                        src={postDetail.artists[0]?.image}
                                        // {postDetail.image}
                                        alt="avatar"
                                    />
                                    <div className="grid-rows-{2} ">
                                        <div className="flex-grow pl-3 mr-10 bg-customWhite">
                                            <h2 className="text-lg font-semibold text-gray-900 -mt-1 ml-1 ">
                                                {postDetail.artists[0]?.nickname}
                                            </h2>

                                            <div className="w-full mb-4 ">
                                                <p className="mt-3 text-gray-700 text-sm ml-1 pb-5 object-contain">
                                                    {postDetail.description}
                                                </p>

                                                <div class="content-center  m-auto max-w-sm ml-29  gap-4 object-contain ">
                                                    <img
                                                        src={
                                                            postDetail.image
                                                                ? postDetail.image
                                                                : null
                                                        }
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             <DateTime/>
                                                        
                            </div>
                        </div>
                        <div  className="min h-50 bg-gray-200 flex items-center justify-center object-top">
                          <div className="w-11/12">
                        <Comments idposts={postDetail.id} className="w-3.5"/>

                          </div>

                        </div>

  {postDetail.comments?.map((el)=>(
      

<section class="relative flex items-center justify-center   bg-gray-200 min-w-screen">
<div key={el.id} class="container px-0 mx-auto sm:px-5">
<div
            class="flex-col w-full py-4 mx-auto bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3">
<div class="flex flex-row">
<img class="object-cover w-12 h-12 border-2 border-gray-300 rounded-full" alt="avatar"
                    src={el.users[0]?.image}/>
                    <div class="flex-col mt-1">
                    <div class="flex items-center flex-1 px-4 font-bold leading-tight">{el.users[0]?.firstName}
                    <span class="ml-2 text-xs font-normal text-gray-500">Fecha</span>
                    </div>
                    <div class="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">{el.body}
                    </div>
      {/* <img src={el.users[0]?.image} alt="imagen" /> */}
      
      </div>
      </div>
      
      </div>
      </div>
      
     
</section>
))}
  
  </div>
  )
// return (
//   // <div>
//   // {
//   //   postDetail?.map(e=>(
      
//   //     <div>
//   //       <img src={e.image} alt="postImage"/>
//   //       {/* <h1>{e.artists[0].nickname}</h1>
//   //       <h2>{e.description}</h2> */}
//   //     </div>
//   //   ))
//   // }
//   // </div>
// )
}
export default PostDetail;
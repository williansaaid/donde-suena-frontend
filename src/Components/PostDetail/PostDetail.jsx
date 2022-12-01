import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getComments } from "../../Redux/Slices/Comments/commentsAction";
import { Comments } from "../CommentsUser/Comments";
import { DateTime } from "../DateTime/DateTime";
import { deletePost } from "../../Redux/Slices/Post/postAction";
import Swal from "sweetalert2";


export const PostDetail = () => {
    const dispatch = useDispatch();
    const { postDetail } = useSelector((state) => state?.postDetail);
    
    const { id } = useParams();

    useEffect(() => {
        dispatch(getComments(id));
    }, [dispatch, id]);

    const handleDeletePost = (e) => {
        dispatch(deletePost(id));
        
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Post eliminado 😥",
            showConfirmButton: false,
            timer: 1500,
        });
    };

 

    return (
        <div>
        <div class="wrapper pt-10 px-8 flex flex-col items-center">
        <div class="mb-4 break-inside p-6 rounded-xl bg-white dark:bg-customGray flex flex-col bg-clip-border sm:w-2/6 w-full">
            <div class="flex pb-6 items-center justify-between">
            <div class="h-24 bg-transparent">
                                <button
                                    class="inline-block p-4 text-center text-white transition bg-red-500 rounded-full shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none float-right"
                                    onClick={(e) =>
                                        handleDeletePost(e)
                                    }
                                  
                                >
                                    <svg
                                        class="w-3 h-3 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>
                <div class="flex">
                    <a class="inline-block mr-4" href="#">
                        <img
                            class="rounded-full max-w-none w-12 h-12 "
                            src={postDetail.artists[0].image}
                        />
                    </a>
                    <div class="flex flex-col">
                        <div>
                            <a
                                class="inline-block text-lg font-bold dark:text-white "
                                href="#"
                            >
                                {postDetail.artists[0].nickname}
                            </a>
                        </div>
                        <div class="text-slate-500 dark:text-slate-300 dark:text-slate-400">
                            <DateTime />
                        </div>
                    </div>
                </div>
            </div>
            <div class="py-1"></div>
            <p class="dark:text-slate-200">
                {postDetail.description}
            </p>
            <div class="py-4">
                <div class="ml-6  max-w-sm">
                    <img
                        className=" mr-10  ml-7 rounded-xl max-w-sm max-h-96"
                        src={postDetail.image ? postDetail.image : null}
                       
                        alt=""
                    />
                    <div className="space-x-4 ">
                    <a
                        class="inline-flex items-center py-2 mr-3"
                        href="#"
                    >
                
                        <img
                            className="space-x-4"
                            src="https://cdn-icons-png.flaticon.com/512/1171/1171164.png"
                            width="40px"
                            height="40px"
                        />
                         <img
                            className="space-x-4"
                            src="https://cdn-icons-png.flaticon.com/512/1682/1682643.png"
                            width="40px"
                            height="40px"
                        />
                          <img
                            className="space-x-4"
                            src="https://cdn-icons-png.flaticon.com/512/5448/5448458.png"
                            width="40px"
                            height="40px"
                        />

                    </a>
                    </div>
                </div>
            </div>
            
                
                {/* <input
                    class="pt-2 pb-2 pl-3 w-full h-11 bg-slate-100 dark:bg-white rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-400 font-medium pr-20"
                    type="text"
                    placeholder="Escribe tu comentario"
                    disabled
                /> */}
               
            
        </div>
    </div>
            <div className="min h-50 bg-gray-200 flex items-center justify-center object-top">
                <div className="w-11/12">
                    <Comments idposts={postDetail.id} className="w-3.5" />
                </div>
            </div>

           {postDetail.comments?.map((el) => (
                <section class="relative flex items-center justify-center   bg-gray-200 min-w-screen">
                    <div key={el.id} class="container px-0 mx-auto sm:px-5">
                        <div class="flex-col w-full py-4 mx-auto bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3">
                            <div class="flex flex-row">
                                <img
                                    class="object-cover w-12 h-12 border-2 border-gray-300 rounded-full"
                                    alt="avatar"
                                    src={el.users[0].image || el.artist[0].image}
                                />
                                <div class="flex-col mt-1">
                                    <div class="flex items-center flex-1 px-4 font-bold leading-tight">
                                        {el.users[0].firstName ||el.artist[0].nickname}
                                        <span class="ml-2 text-xs font-normal text-gray-500">
                                            Fecha
                                        </span>
                                    </div>
                                    <div class="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                                        {el.body || el.description}
                                    </div>
                                    {/* <img src={el.users[0]?.image} alt="imagen" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
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
};
export default PostDetail;

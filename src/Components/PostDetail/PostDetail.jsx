import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getComments } from "../../Redux/Slices/Comments/commentsAction";
import { Comments } from "../CommentsUser/Comments";

export const PostDetail = () => {
    const dispatch = useDispatch();
    const { postDetail } = useSelector((state) => state.postDetail);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getComments(id));
    }, [dispatch, id]);

    console.log(postDetail);

    return (
        <div>
            <div className="min h-50 bg-gray-200 flex items-center justify-center gap-5 ">
                <div className=" mt-5 w-3/4  mx-auto rounded-lg bg-gray-200 shadow p-5 text-gray-800 flex bg-white shadow-lg rounded-lg mb-12 md:max-w-2xl   ">
                    <div className="w-full flex mb-4">
                        <img
                            class="w-12 h-12 rounded-full object-cover 
                                  shadow "
                            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            // {postDetail.image}
                            alt="avatar"
                        />
                        <div className="grid-rows-{2} ">
                            <div className="flex-grow pl-3 mr-10 bg-customWhite">
                                <h2 className="text-lg font-semibold text-gray-900 -mt-1 ml-1 ">
                                    Nickname
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
                    <Comments idposts={postDetail.id} />
                </div>
            </div>

            {postDetail.comments?.map((el) => (
                <div key={el.id} class="flex justify-center relative top-1/3">
                    <div class="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
                        <div class="relative flex gap-4">
                            <img
                                src={el.users[0]?.image}
                                class="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
                                alt=""
                                loading="lazy"
                            />
                            {/* <img src={el.users[0]?.image} alt="imagen" /> */}
                            <div class="flex flex-col w-full">
                                <div class="flex flex-row justify-between">
                                    <p class="relative text-xl whitespace-nowrap truncate overflow-hidden">
                                        {el.users[0]?.firstName}
                                    </p>
                                    <a class="text-gray-500 text-xl" href="#">
                                        <i class="fa-solid fa-trash"></i>
                                    </a>
                                </div>
                                <p class="text-gray-400 text-sm">Fecha</p>
                            </div>
                            {el.users[0]?.firstName}
                            {el.body}
                        </div>
                    </div>
                    <p class="-mt-4 text-gray-500"> {el.body}</p>
                </div>
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

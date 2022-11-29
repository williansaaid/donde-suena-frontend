import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostId } from "../../Redux/Slices/Post/postAction";

export const PostDumb = () => {
    const dispatch = useDispatch();
    const {  postsId } = useSelector((state) => state.posts);
    console.log(postsId);
    const {id} = useParams()

    useEffect(() => {
        dispatch(getPostId(id));
    }, [dispatch]);

    return (
        <div>
            <h1>{postsId.nickname}</h1>
            {postsId.posts&&
                postsId.posts?.map((el) => {
                    return (
                        <div className="min h-50 bg-gray-200 flex items-center justify-center">
                            <div className="mt-5 w-3/4 flex-col items-center mx-auto rounded-lg bg-white shadow p-5 text-gray-800 bg-white shadow-lg rounded-lg mb-12 md:max-w-2xl">
                                <img
                                    class="w-12 h-12 rounded-full object-cover 
                                  shadow mr-2"
                                    src={el.image}
                                    alt="avatar"
                                />
                                artist={el.nickname}
                                <div class="w-full  mr-70">
                                    <p class="text-xs text-gray-500 text-right">
                                        Date October 15{el.date}
                                    </p>
                                </div>
                                <div className="w-full flex mb-4 p-2">
                                    <img
                                        className="w-52 h-16"
                                        src={el.image ? el.image : ""}
                                        alt="postImage"
                                    />
                                    <div className="grid-rows-{2}">
                                        <div className="flex-grow pl-3 mr-10">
                                            <div className="w-full mb-4">
                                                <p className="mt-3 text-gray-700 text-sm ml-3">
                                                    {el.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default PostDumb;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../Redux/Slices/Post/postAction";

export const PostDumb = () => {
    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state.posts);
    console.log(posts);

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <div>
            {posts &&
                posts?.map((el) => {
                    return (
                        <div className="min h-50 bg-gray-200 flex items-center justify-center">
                            <div className=" mt-5 w-3/4  mx-auto rounded-lg bg-white shadow p-5 text-gray-800flex bg-white shadow-lg rounded-lg mb-12 md:max-w-2xl ">
                                    artist={el.artist}
                                    <div class="w-full  mr-70">
                                        <p class="text-xs text-gray-500 text-right">
                                            Date {el.date}
                                        </p>
                                    </div>
                                <div className="w-full flex mb-4">
                                    <img
                                        class="w-12 h-12 rounded-full object-cover 
                                  shadow"
                                        src={el.artists[0].image}
                                        alt="avatar"
                                    />
                                    <img
                                        src={el.image ? el.image : ""}
                                        alt=""
                                        width="200"
                                        height="50"
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

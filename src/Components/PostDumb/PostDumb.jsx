import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostId } from "../../Redux/Slices/Post/postAction";

export const PostDumb = () => {
    const dispatch = useDispatch();
    const { postsId } = useSelector((state) => state.posts);
    console.log(postsId);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getPostId(id));
    }, [dispatch]);

    return (
        <div class=" rounded overflow-hidden border w-full bg-white mx-3 md:mx-0 lg:mx-0">
            {postsId.posts?.length &&
                postsId.posts?.map((el, i) => {
                    return <div key={i} className="border-b-8 border-customGray ">
            <div class="w-full flex justify-between p-3">
                <div class="flex">
                   
                    <span class="pt-1 ml-2 font-bold text-sm flex items-center">
                        <img
                            class="w-12 h-12 rounded-full object-cover shadow mr-2 text-right font-bold"
                            src={postsId.image}
                            alt="avatar"
                        />
                        {postsId.nickname}
                    </span>
                </div>
                <span class="px-2 hover:bg-gray-300 cursor-pointer rounded">
                    <i class="fas fa-ellipsis-h pt-2 text-lg"></i>
                </span>
            </div>
                        {console.log(el)}
                        <img
                            class="w-full bg-cover"
                            src={el.image}
                            alt={"postImage"}
                        />
                        <div class="px-3 pb-2">
                            <div class="pt-2">
                                <i class="far fa-heart cursor-pointer"></i>
                                <span class="text-sm text-gray-400 font-medium">
                                    {el.likes.length}
                                </span>
                            </div>
                            <div class="pt-1">
                                <div class="mb-2 text-sm">
                                    <span class="font-medium mr-2">
                                        {postsId.nickname}
                                    </span>{" "}
                                    {el.description}
                                </div>
                            </div>
                            <div class="text-sm mb-2 text-gray-400 cursor-pointer font-medium">
                                {el.comments.length}
                            </div>
                            {/* <div class="mb-2">
                                <div class="mb-2 text-sm">
                                    <span class="font-medium mr-2">
                                        razzle_dazzle
                                    </span>{" "}
                                    Dude! How cool! I went to New Zealand last
                                    summer and had a blast taking the tour! So
                                    much to see! Make sure you bring a good
                                    camera when you go!
                                </div>
                            </div> */}
                        </div>
                    </div>;
                })}
        </div>
    );
};

export default PostDumb;

{
    /* /         <div>
    //             <div className="mt-5 w-3/4 flex items-center mx-auto rounded-lg bg-white shadow p-5 text-gray-800 bg-white shadow-lg rounded-lg mb-12 md:max-w-2xl">
    //                 {postsId.posts &&
                    postsId.posts?.map((el) => {
                        return (
                            <div className="h-50 bg-gray-200 items-center justify-center flex" >
                                <img
                                    class="w-12 h-12 rounded-full object-cover shadow mr-2 text-right font-bold"
                                    src={el.image}
                                    alt="avatar"
                                />
                                <h1>{postsId.nickname}</h1>

                                <div class="w-full  mr-70">
                                    <p class="text-xs text-gray-500 text-right ">
                                        Date October 15{el.date}
                                    </p>
                                </div>
                                <div>
                                    <div className="w-full grid mb-4 p-2">
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
        </div>
    );
}; */
}

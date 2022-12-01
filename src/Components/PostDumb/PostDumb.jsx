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
        <div className=" rounded overflow-hidden border w-full bg-white mx-3 md:mx-0 lg:mx-0">
            {postsId.posts?.length &&
                postsId.posts?.map((el, i) => {
                    return (
                        <div key={i} className="border-b-8 border-customGray ">
                            <div className="w-full flex justify-between p-3">
                                <div className="flex">
                                    <span className="pt-1 ml-2 font-bold text-sm flex items-center">
                                        <img
                                            className="w-12 h-12 rounded-full object-cover shadow mr-2 text-right font-bold"
                                            src={postsId.image}
                                            alt="avatar"
                                        />
                                        {postsId.nickname}
                                    </span>
                                </div>
                                <span className="px-2 hover:bg-gray-300 cursor-pointer rounded">
                                    <i className="fas fa-ellipsis-h pt-2 text-lg"></i>
                                </span>
                            </div>
                            {console.log(el)}
                            <img
                                className="w-full bg-cover"
                                src={el.image}
                                alt={"postImage"}
                            />
                            <div className="px-3 pb-2">
                                <div className="pt-1">
                                    <div className="mb-2 text-sm">
                                        <span className="font-medium mr-2">
                                            {postsId.nickname}
                                        </span>
                                        {el.description}
                                    </div>
                                </div>
                                <div className="text-sm mb-2 text-gray-400 cursor-pointer font-medium">
                                    {el.comments.length}
                                </div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default PostDumb;

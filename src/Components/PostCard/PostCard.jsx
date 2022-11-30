import { getPosts } from "../../Redux/Slices/Post/postAction";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getArtists } from "../../Redux/Slices/Artist/artistActions";
import { Comments } from "../CommentsUser/Comments";
import {DateTime} from "../DateTime/DateTime"
export const PostCard = ({ props }) => {
    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state.posts);
    const [visible, setVisible] = useState();
    const [comment, setComment] = useState("");
    const { artists } = useSelector((state) => state.artistState);
 
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    const showMorePost = () => {
        setVisible((prevValue) => prevValue + 4);
    };

    useEffect(() => {
        dispatch(getArtists());
    }, [dispatch]);

    return (
        <div>
            {posts &&
                posts?.map((el,id ) => {
                    return (
                        <div className="min h-50 bg-gray-200 flex items-center justify-center gap-5 ">
                            <div className=" mt-5 w-3/4  mx-auto rounded-lg bg-gray-200 shadow p-5 text-gray-800 flex bg-white shadow-lg rounded-lg mb-12 md:max-w-2xl border-double border-2 border-rose-500">
                                <div className="w-full flex mb-4">
                                    <img
                                        class="w-12 h-12 rounded-full object-cover 
                                  shadow "
                                        src={el.artists[0].image}
                                        alt="avatar"
                                    />
                                    <div className="grid-rows-{2} ">
                                      <div className="">
                                      <h2 className="ml-60">  <DateTime ></DateTime></h2>
                                      </div>
                                        <div className="flex-grow pl-3 mr-10 bg-customWhite">
                                            <h2 className="text-lg font-semibold text-gray-900 -mt-1 ml-1 ">
                                                {el.artists[0].nickname}
                                            </h2>
                                              
                                            <div className="w-full mb-4 ">
                                                <p className="mt-3 text-gray-700 text-sm ml-1 pb-5 object-contain">
                                                    {el.description}
                                                </p>

                                                <div class="content-center  m-auto max-w-sm ml-29  gap-4 object-contain ">
                                                    <img className="content-center  m-auto max-w-sm ml-29  gap-4 object-contain ml-20"
                                                        src={
                                                            el.image
                                                                ? el.image
                                                                : null
                                                        }
                                                        alt=""
                                                    />
                                          
                                                
                                               
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                                <div>
                                
                                </div>
                            </div>
                           
                        </div>
                        
                        
                    );
                })}
        </div>
    );
};

export default PostCard;

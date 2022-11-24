import { getPostId } from "../../Redux/Slices/Post/postAction";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CommentsUser } from "../CommentsUser/CommentsUser";
import { id } from "date-fns/locale";

export const PostCard = ({nickname}) => {
    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state.posts);
    const [visible, setVisible] = useState();
    const [comment, setComment] = useState("");

    useEffect(() => {
        dispatch(getPostId(nickname));
    }, [dispatch, nickname]);
    const showMorePost = () => {
        setVisible((prevValue) => prevValue + 4);
    };

    return (
        <div>
            {posts &&
                posts?.map((el) => {
                    return (
                        <div className="flex items-center justify-center p-6 text-xl">
                            <div className="flex bg-white shadow-lg rounded-lg">
                                <div className="flex items-start px-4 py-6">
                                    <div className="">
                                        <div className="flex items-center justify-between">
                                            <h2 className="text-lg font-semibold text-gray-900 -mt-1">
                                                {el.title}
                                            </h2>
                                            <p className="mt-3 text-gray-700 text-sm">
                                                {el.description}
                                            </p>

                                            <img
                                                src={el.image ? el.image : ""}
                                                alt=""
                                                width="200"
                                                height="100"
                                            />

                                            <CommentsUser />

                                            {/* artist={el.artist} */}
                                        </div>
                                        {/* <form>
      <TextField
      label="añadir comentario"
      size="small"
      variant="outlined"
      className="post_input"
      placeholder="añadir comentario"
      // value={comment}
      // on change ={e => setComment(e.target.value)}
      />
    </form>

    <button
    variant="contained"
    size="small">
      Enviar
    </button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default PostCard;

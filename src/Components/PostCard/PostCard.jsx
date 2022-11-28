import { getPosts, getPostId } from "../../Redux/Slices/Post/postAction";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getArtists } from "../../Redux/Slices/Artist/artistActions";
import { CommentsUser } from "../CommentsUser/CommentsUser";
import { id } from "date-fns/locale";
import { PostDumb } from "../PostDumb/PostDumb";

export const PostCard = ({ nickname }) => {
    const dispatch = useDispatch();
    const { postsId } = useSelector((state) => state.posts);
    const { posts } = useSelector((state) => state.posts);
    const [visible, setVisible] = useState();
    const [comment, setComment] = useState("");
    const [posteos, setPosteos] = useState([]);

    console.log(nickname)

    useEffect(() => {
        // if (nickname) {
            dispatch(getPostId(nickname));
            
            setPosteos(postsId);
        // } else {
        //     dispatch(getPosts());
            
        //     setPosteos(posts);
        // }
    }, [dispatch]);
    const showMorePost = () => {
        setVisible((prevValue) => prevValue + 4);
    };



    return <div>{posteos && <PostDumb posteos={posteos} />}</div>;
};
export default PostCard;

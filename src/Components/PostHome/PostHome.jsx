import React from "react";
import { PostVar } from "../PostVar/PostVar";
import { PostCard } from "../PostCard/PostCard";
import { Comments } from "../CommentsUser/Comments";

import "../CommentsUser/comments.css";

const PostHome = (el) => {
    return (
        <div>
            <div>
                <PostVar />
            </div>
            <div>
                <PostCard />
            </div>
            <div>
                {/* esta hardcodeado el id del usuario  , tendria que ser el current id */}
                {/* <Comments currentUserId="1"/> */}
            </div>
        </div>
    );
};

export default PostHome;

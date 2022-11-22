import React from "react";
import {PostVar} from "../PostVar/PostVar";
import {PostCard} from "../PostCard/PostCard";

const PostHome = () => {



    return (
        <div>
        <div>
            <PostVar />
        </div>
        <div>
            <PostCard/>
        </div>
        </div>
    );
};

export default PostHome;

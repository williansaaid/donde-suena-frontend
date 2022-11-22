import React, { useState, useRef, useEffect} from "react";
import cn from "classnames";
import { getComments } from "../../Redux/Slices/Comments/commentsAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const INITIAL_HEIGHT = 46;

export const CommentsUser = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [commentValue, setCommentValue] = useState("");
    const dispatch = useDispatch();
    const  {comments} = useSelector((state) => state.comments);
    const [success, setSuccess] = useState(false);

    console.log(comments)

  //   useEffect(() => {
  //     dispatch(getComments());
  // }, [dispatch]);
    
    const outerHeight = useRef(INITIAL_HEIGHT);
    const textRef = useRef(null);
    const containerRef = useRef(null);

    const onExpand = () => {
        if (!isExpanded) {
            outerHeight.current = containerRef.current.scrollHeight;
            setIsExpanded(true);
        }
    };
    const [input, setInput] = useState({
      post: "",
      comment: "",
      user: "",
  });

    const onChange = (e) => {
        setCommentValue(e.target.value);
    };

   

    const onSubmit = (e) => {
      e.preventDefault();
      const postValues = {
          ...input,
          comment: "",
          user: "Maya"
      }
      if(!postValues.comment ){
          dispatch(getComments(postValues));
          setSuccess(false);
          setInput({
              post: "",   
              user: "",
              comment: "",
          });
      } 
  }
  useEffect(() => {
  }, [dispatch]);


    return (
        <form
            onSubmit={onSubmit}
            ref={containerRef}
            className={cn("comment-box", {
                expanded: isExpanded,
                collapsed: !isExpanded,
                modified: commentValue.length > 0,
            })}
            style={{
                minHeight: isExpanded ? outerHeight.current : INITIAL_HEIGHT,
            }}
        >
            <div className="header">
                <div className="user">
                    <img src="avatar/path" alt="User avatar" />
                    <span>User Name</span>
                    <label htmlFor="comment">What are your thoughts?</label>
                    <textarea
                        ref={textRef}
                        onClick={onExpand}
                        onFocus={onExpand}
                        onChange={onChange}
                        className="comment-field"
                        placeholder="What are your thoughts?"
                        value={commentValue}
                        name="comment"
                        id="comment"
                    />
                </div>
            </div>
            <div className="actions">
                <button type="submit" disabled={commentValue.length < 1}>
                    Respond
                </button>
            </div>
            <div>
              {comments}
              
            </div>
        </form>
    );
};
export default CommentsUser;

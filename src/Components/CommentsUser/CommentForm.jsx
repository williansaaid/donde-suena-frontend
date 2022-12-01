import { useState } from "react";
import { createComment } from "../../Redux/Slices/Comments/commentsAction";
import { useDispatch,useSelector } from "react-redux";

export const CommentForm = ({
  idposts,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) => {
  const user = useSelector((state) => state.sessionState?.user);
  const dispatch = useDispatch();
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;

  const  handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(createComment({
      body: text,
      date: new Date(),
      user: user.firstName,
      postId: idposts
    }))
    setText("");
   }
   const handleChange=(e)=>{
   e.preventDefault();
    setText(e.target.value);

   }
  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   setText("");
  // };
  return (
    <div className="flex mx-auto items-center justify-center shadow-lg  max-w-lg bg-gray-200 ">
    <form onSubmit={handleSubmit}
    className="w-full max-w-xl bg-white rounded-lg px-4 pt-2 bg-gray-200 "
    >
    <div className="w-full md:w-full px-3 mb-1 mt-0 ">

      <div className="flex flex-wrap -mx-3 mb-3">

      <textarea

className="comment-form-textarea"
className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="body" placeholder='Escribe tu comentario...' required
value={text}
onChange={handleChange}
/>
{ console.log(text)}
</div>
      <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded" disabled={isTextareaDisabled}>
        {submitLabel}
      </button>
      {hasCancelButton && (
        <button
        type="button"
        className="comment-form-button comment-form-cancel-button"

        onClick={handleCancel}
        >
          Cancel

        </button>

        )}
        </div>
    </form>
    </div>
  );
};

export default CommentForm;

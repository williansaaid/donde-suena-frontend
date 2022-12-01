import React, { useState } from "react";
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
const [showForm,setShowForm] =useState(false);

  const  handleSubmit=(e)=>{
    e.preventDefault();
    dispatch (createComment({
      body: text,
      date: new Date(),
      user: user.firstName,
      postId: idposts
    }))

    setText("");
    window.location.reload(true)
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

    <div class="flex mx-auto items-center justify-center shadow-lg  max-w-lg bg-transparent w-screen ml-15" >
      <React.Fragment>
        {showForm? (
        <form onSubmit={handleSubmit}
        class="w-full max-w-xl bg-gray-200 px-4 pt-2"

        >
        <div class="w-full md:w-full px-3 mb-1 mt-0 ">

          <div class="flex flex-wrap -mx-3 mb-3">

          <textarea

    className="comment-form-textarea"
    class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"

    name="body" placeholder='Escribe tu comentario...' required
    value={text}
    onChange={handleChange}
    />
    { console.log(text)}
    </div>
          <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded" disabled={isTextareaDisabled}>
            {submitLabel}
          </button>
          <button onClick={()=> setShowForm(false)} className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded " >Cancelar</button>
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
        ): ( <button onClick={()=> setShowForm(true) }  className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded ml-">Añadir Comentario</button>
      )}

    </React.Fragment>
    </div>
  );
};

<<<<<<< HEAD
export default CommentForm;
=======
export default CommentForm;
>>>>>>> 682be6908b740034643302ad48d0efcd9faa69e6

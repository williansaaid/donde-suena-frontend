
import CommentForm from "./CommentForm";


export const Comment = ({comment , replies ,currentUserId , eliminateComment ,addComment, activeComment ,setActiveComment , parentId=null, modifyComment}) =>{
 //en el caso de que el usuario no este logeado , su user id es null , por lo tanto solo puede responder si esta logeado 
 const isEditing =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "editing";
  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "replying";
  const canReply = Boolean (currentUserId)
  const canEdit =currentUserId ===comment.userId
  const canDelete = currentUserId===comment.userId
  //la variable createdAt me permite que se pueda ver la fecha de "una Manera mas amistosa"
  const createdAt = new Date(comment.createdAt).toLocaleDateString();
  
 
 const replyId = parentId? parentId : comment.id;
  
 
 return (
  <section   className ="flex items-center justify-center  antialiased bg-white bg-gray-100 min-w-screen ml-14 " >

    <div className="container  ml-14 sm:px-5 ">
<div className="flex-col w-full py-4 mx-auto bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3">
  <div className="flex flex-row">

  <img className="object-cover w-12 h-12 border-2 border-gray-300 rounded-full" alt="Noob master's avatar"
                    src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80"/>
  <div className="flex-col mt-1">
  <div class="flex items-center flex-1 px-4 font-bold leading-tight">  {comment.username}
                        <span class="ml-2 text-xs font-normal text-gray-500">{createdAt}</span>
                        </div>
                        {  !isEditing &&  <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
      {comment.body}
      </div>}
      
      {isEditing && (
        <CommentForm
        submitLabel="Update"
        hasCancelButton
        initialText={comment.body}
        handleSubmit={(text)=>modifyComment(text,comment.id)}
        handleCancel={()=>setActiveComment(null)}
        />
        )}
  </div>
  </div>
</div>
<div className="comment-right part">
  <div className="comment-content">
    <div className="comment-Author">
      {comment.username}
      <div>{createdAt}</div>
    </div>
  {  !isEditing &&  <div className="comment-text">
      {comment.body}
      </div>}
      {isEditing && (
        <CommentForm
        submitLabel="Update"
        hasCancelButton
        initialText={comment.body}
        handleSubmit={(text)=>modifyComment(text,comment.id)}
        handleCancel={()=>setActiveComment(null)}
        />
        )}
      <div className="comments-actions-buttons "  class="flex items-stretch">
       {canReply 
       && 
       <button className="comments-actions-buttons " class=" ml-7 mr-2 text-sm font-medium leading-loose text-gray-600"
       onClick={()=>
        setActiveComment({ id:comment.id ,type:"replying"})} 
        >
          <div class="flex flex-row">
          <img src="https://res.cloudinary.com/ds41xxspf/image/upload/v1669243828/Donde-Suena-Assets/icons8-response-30_bgrxrb.png" alt="respondericon" width="20px"/>
             Responder

          </div>
        </button>}
        {canEdit   &&
        <button className=" ml-3 mr-6 text-sm font-medium leading-loose text-gray-600"
        onClick={()=>
          setActiveComment({ id:comment.id ,type:"editing"})}
          >
            <div class="flex flex-row">
<img src="https://res.cloudinary.com/ds41xxspf/image/upload/v1669243828/Donde-Suena-Assets/icons8-pencil-30_ufpgqp.png" alt="editarIcono" width="20px"/>
          Editar
            </div>
          </button>}
      { canDelete && 
      <button 
      className=" ml-3 mr-6 text-sm font-medium leading-loose text-gray-600"
      onClick={()=> eliminateComment (comment.id)} 
      >
        <div class="flex flex-row">
<img src="https://res.cloudinary.com/ds41xxspf/image/upload/v1669243828/Donde-Suena-Assets/icons8-trash-can-30_ygzque.png" alt="eliminarIcono" width="20px"/>
          Eliminar
            </div>
      </button>}
      </div>
    </div>
{/* los replies vienen en forma de array , luego hago recursividad para llamar al comentario de ese reply  */}
    {isReplying && (
      <CommentForm
      submitLabel="Contestar"
      handleSubmit={(text)=> addComment (text, replyId)}
      />
      
      
      )}
    
    {replies.length > 0  && (
      <div className="replies"> 
      {replies.map(reply =>(
        <Comment
        comment={reply} 
        key={reply.id} 
        replies={[]}
          currentUserId={currentUserId}
          addComment={addComment}
          eliminateComment={eliminateComment}
          activeComment={activeComment}
          setActiveComment={setActiveComment}
          modifyComment={modifyComment}
          // no es parent id por que es cuando creo una respuesta crea form de comments de vuelta
          parentId={comment.id}
          /> 
          // replies lo seteamos como un array vacio ya que las respuestas no pueden anidar otra respuestas , por tema de rendimiento a gran escala , recordar que tenemos que pasarle el current user id por que en cada respuesta hay que otorgar la misma info en que adentro de nuestro comentario 
          
          ))}
      </div>
    )}
  </div>
</div>

    
    </section>
  )
}
export default Comment
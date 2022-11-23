
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
    <div className="comment">
<div className="comment-image-container">
<img src="https://w7.pngwing.com/pngs/73/392/png-transparent-man-in-front-of-laptop-computer-computer-icons-end-user-end-user-computing-computing-blue-text-computer-thumbnail.png" alt="user Icon" width="50px" height="50px"/>
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
      <div className="comments-actions-buttons">
       {canReply 
       && 
       <button className="comments-actions-buttons " class=" ml-7 mr-6"
       onClick={()=>
      setActiveComment({ id:comment.id ,type:"replying"})} 
       >
        Responder
        </button>}
        {canEdit   &&
        <button className="comments-actions-buttons"  
        onClick={()=>
          setActiveComment({ id:comment.id ,type:"editing"})}
        >
          Editar
          </button>}
      { canDelete && 
      <button 
      className="comment-Button"
      onClick={()=> eliminateComment (comment.id)} 
      >Eliminar
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

    
  )
}
export default Comment


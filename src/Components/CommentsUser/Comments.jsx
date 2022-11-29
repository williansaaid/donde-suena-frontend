//recordar nunca pasar user id a la api NO ES SEGURO
import { useEffect, useState, } from "react";
import { getComments, createComment, deleteComment, updateComment, } from "../../Redux/Slices/Comments/commentsAction";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Comment } from "./Comment";
import { CommentForm} from "./CommentForm"

export const Comments = (props) =>{
  const {id}=useParams();
  const dispatch = useDispatch();
  const {commentsId}=useSelector((state)=>state.commentsId)
  const [comments, setCommentsId]=useState([])
  // const [backendComments , setBackendComments]= useState([id])
  //en la proxima funcion seteamos el estado para luego ser editado 
  const [activeComment , setActiveComment]=useState (null)
  // aca manejamos el comentario raiz y luego renderizamos sus respuestas  sabemos que es el comentario raiz por que el parent id es null
  const rootComments =commentsId.filter(
    (commentsId)=> commentsId.parent===null
  );


  //Para hacer las respuestas tenemos que recordar que los nuevos comentarios siempre se guardan arriba , pero en cambio cuando hacemos una respuesta los comentarios nuevos se guardaran abajo , por lo tanto hacemos esa logica con un filter para que las respuestas se generen abajo. EL HOMBRE DEL TUTO ESCRIBIO COMMEND , CREO QUE ES ERROR PERO FIJARSE BIEN
  const getReplies= commentId =>{
    return commentsId.filter(commentsId=>commentsId.parent===commentId).sort((a,b) => new Date(a.createdAt).getTime()  - new Date(b.createdAt).getTime()) //con el sort ordeno en ascendente 
  }
  //agrego los comentarios del form a los que ya estan 
  const addComment =(text ,parent) =>{
    // console.log ("addComment", text , parentId)
    createComment(text, parent);
    dispatch(comment =>{
      setCommentsId([comment,...comments])
      setActiveComment(null)
    })
  }
const eliminateComment =(commentId) =>{
  if(window.confirm("Seguro que quieres eliminar el comentario?")){  
    deleteComment(commentId).then(()=>{
      const updatedBackendComments = commentsId.filter(
        (commentsId)=>commentsId.id !== commentId
      );
      setCommentsId(updatedBackendComments)
    })
  }
}
const  modifyComment = (text , commentId) =>{
  updateComment(text , commentId).then(() =>{
    const updatedBackendComments =commentsId.map(commentsId=>{
      if (commentsId.id ===commentId){
        return { ...commentsId , body:text}
    }
    return commentsId
   } )
   setCommentsId(updatedBackendComments)
   setActiveComment (null)
  })
}
  console.log(commentsId)
  // useEffect((data)=>{
  //     dispatch(getComments(id));
  //       setBackendComments(data.comments[0].id)
  //     } ,[dispatch,id] ) ;
       
      
      
  return (
   
    <div className="comments">
      
     
      <CommentForm submitLabel="Enviar" handleSubmit={addComment}/>
      <div className="comments-container">
    {rootComments.map((rootComment)=>(
   <Comment 
   key={rootComment.id} 
   comment ={rootComment} 
   replies ={getReplies(rootComment.id)}
   currentUserId={id}
   addComment={addComment}
   eliminateComment={eliminateComment}
   activeComment  ={activeComment}
   setActiveComment={setActiveComment}
   modifyComment={modifyComment}
  
   />
   //no es ideal llamar una funcion en el hecho pero al tener una pagina con pocos comentarios no hay problema
    ))}
      </div>
    </div>
  )
}
export default Comments;
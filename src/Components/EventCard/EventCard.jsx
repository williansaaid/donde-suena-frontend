import React,{useEffect  } from "react";
import { useDispatch } from "react-redux";
import {getEvents , getEventsById}from "../../Redux/eventActions";
import { useSelector } from "react-redux";

export const Events = ()=> {
  const dispatch =useDispatch()
  useEffect(()=>{
    
    dispatch(getEvents())
  },[])
  const events = useSelector(state=>state.events)
  console.log(events)
  // return ( function eventCard({
  //   name,
  //   date,
  //   image,
  //   price,
  //   id
  // }) {
    return (
      <div class="eventCard">
  <h3>hola</h3>

{/* <img
  src={image ? image : "no se encontro imagen"}
  alt="Img not found"
  width="300px"
  height="200px"
/>2
<h5 class="date">📅 Fecha: {date}</h5>
<h5 class="price"> Precio:{price}</h5>
  <a id="MoreInfo" href={`/details/${id}`}>Mas info ➡️</a>
         */}
      </div>
    )
    
  }
 
 
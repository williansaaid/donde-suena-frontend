import React,{useEffect  } from "react";
import { useDispatch } from "react-redux";
import {getEvents , getEventsById}from "../../Redux/eventActions";
import { useSelector } from "react-redux";

export const Events = ()=> {
  const dispatch =useDispatch()
  const {events} = useSelector(state=>state.events)

  useEffect(()=>{
    
    dispatch(getEvents())
  },[])
  

  return(
    <div>
    {events&&events.map((el,id)=>{
      return(
        <div key={id}>
        {el.name}
        {el.date}
        {el.start}
        {el.end}
        {el.image}
        </div>
      )
    })}
    </div>
  )
     
  }
  export default Events;
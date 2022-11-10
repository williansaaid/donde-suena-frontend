import axios from "axios";
import {getAllEvents, getAllEventsById} from "./eventSlice"

export  const getEvents= ()=>(dispatch) =>{
  axios("http://localhost:3001/event/getEvents")
  .then(res =>dispatch(getAllEvents(res.data.events)))
  .catch(e=>console.log(e))
}
 export const getEventsById=(id)=>(dispatch)=>{
    axios( `http://localhost:3001/event/getEvent/${id}`)
    .then(res =>dispatch(getAllEventsById(res.data.event)))
    .catch(e=>console.log(e))
  }
import axios from "axios";
import {getAllEvents, getAllEventsById} from "./eventSlice"

export  const getEvents= ()=>(dispatch) =>{
  axios("https://api.rawg.io/api/games?key=b1f1279276264710a0688044a23f6b01")
  .then(res =>dispatch(getAllEvents(res.data.results)))
  .catch(e=>console.log(e))
}
 export const getEventsById=(id)=>(dispatch)=>{
   axios("url del get all events by id")
   .then(res =>dispatch(getAllEventsById(res.data.results)))
   .catch(e=>console.log(e))
 }
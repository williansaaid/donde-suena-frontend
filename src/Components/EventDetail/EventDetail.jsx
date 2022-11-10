import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getEventsById } from "../../Redux/eventActions";
import Navbar from "../Navbar/Navbar";

const EventDetail = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { detail } = useSelector((state) => state.detail);
  console.log(detail);
  useEffect(() => {
    dispatch(getEventsById(id));
  }, [dispatch, id]);
  //"w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"

  return (
   
      
      <section>
    <div>
    <img src={detail.image} alt="" class="object-contain h-48 w-96 ..." loading="lazy" />
  </div>
  
  </section>
    
  );
};
export default EventDetail;

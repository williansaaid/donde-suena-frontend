import React from "react";
import CarouselCustom from "../Carousel/Carousel_custom";
import { Events } from "../EventCard/EventCard";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const {allEvents} = useSelector((state) => state.events);
  
  // const indexOfLastEvent = currentPage * eventPerPage;
  // const indexOfFirstEvent = indexOfLastEvent- eventPerPage;
  // const currentEvent= allEvents.slice(
  //   indexOfFirstEvent,
  //   indexOfLastEvent
  // );
  return(
  <div>
   <CarouselCustom />;
    
   <Events/>
  </div>
 

 
 
  )
};


export default Home;

import React from "react";
import CarouselCustom from "../Carousel/Carousel_custom";
import { Events } from "../EventCard/EventCard";


const Home = () => {

  
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

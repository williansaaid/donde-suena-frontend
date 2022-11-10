import React from "react";
import CarouselCustom from "../Carousel/Carousel_custom";
import { Events } from "../EventCard/EventCard";

import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <CarouselCustom />
        <div class="text-3xl font-semibold text-red-700 capitalize lg:text-4xl ">
        Proximos Eventos
        </div>

    
      
      
 
      <section class="bg-white dark:bg-gray-50 flex space-x-20 content-center" >
      <Events />
     
      </section>
    </div>
  );

};


export default Home;

import React from "react";
import CarouselCustom from "../Carousel/Carousel_custom";
import { Events } from "../EventCard/EventCard";
import Footer from"../Footer/Footer"
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <CarouselCustom />
        <div class="text-3xl font-semibold text-customRed capitalize lg:text-4xl  flex h-20 justify-center items-center">
        <h1>Proximos Eventos</h1>
        </div>

    
      
      
 
      <section class="bg-white dark:bg-gray-50 flex space-x-20 content-center" >
        <div class ="flex flex-col space-y-4">
      <Events  class="divide-y-8"/>

        </div>
     
      </section>
    
    </div>
  
  );

};


export default Home;

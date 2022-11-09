import React from "react";
import CarouselCustom from "../Carousel/Carousel_custom";
import { Events } from "../EventCard/EventCard";

import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <CarouselCustom />
      <Events/>
    </div>
  );
};


export default Home;

import React from "react";
import CarouselCustom from "../Carousel/Carousel_custom";
import { Events } from "../EventCard/EventCard";



const Home = () => {
	return (
		<div>
			<CarouselCustom />
			<div className='text-3xl font-semibold text-red-700 capitalize lg:text-4xl '>
        <div class="grid h-20 place-items-center">
        <h1>
  				Proximos Eventos
          </h1>

        </div>
			</div>
        <div class="place-items-center">
			<section className='bg-white dark:bg-gray-50 flex space-x-20 content-center'>
        </section>

				<Events />
			</div>
		</div>
  
	);
};

export default Home;

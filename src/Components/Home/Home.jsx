import React from "react";
import CarouselCustom from "../Carousel/Carousel_custom";
import Filters from "../Filters/Filters.jsx";
import { Events } from "../EventCard/EventCard";

const Home = () => {
    return (
        <div>
            <CarouselCustom />
            <Filters className="w-full bg-customGray container mx-auto flex justify-between items-center" />
            <div className="text-3xl font-semibold text-red-700 capitalize lg:text-4xl ">
                <div class="grid h-20 place-items-center">
                    <h1>Proximos Eventos</h1>
                </div>
            </div>

            <div class="place-items-center">
                <Events />
            </div>
        </div>
    );
};

export default Home;

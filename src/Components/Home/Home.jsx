import React from "react";
import CarouselCustom from "../Carousel/Carousel_custom";
import Filters from "../Filters/Filters.jsx";
import { Events } from "../EventCard/EventCard";
import FilterBar from "../Filters/Filters";

const Home = () => {
    return (
        <div>
            <CarouselCustom />
            <nav>
                <div class="bg-customGray w-full flex relative justify-between items-center px-8 h-10">
                    <FilterBar />
                </div>
            </nav>
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

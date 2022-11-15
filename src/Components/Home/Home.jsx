import React from "react";
import CarouselCustom from "../Carousel/Carousel_custom";
import { Events } from "../EventCard/EventCard";
import FilterBar from "../Filters/Filters";

const Home = () => {
    return (
        <div >
            <CarouselCustom />
            <nav>
                <div >
                    <FilterBar />
                </div>
            </nav>
            <div className="text-3xl font-semibold text-red-700 capitalize lg:text-4xl">
                <div class="grid h-20 place-items-center">
                    <h1>PRÓXIMOS EVENTOS</h1>
                </div>
            </div>
            <div class="place-items-center">
                <Events />
            </div>
        </div>
    );
};

export default Home;

import React from "react";
import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { changeLoading } from "../../Redux/Slices/Loading/LoadingActions";
import { getEvents } from "../../Redux/Slices/Event/eventActions";
import { Events } from "../EventCard/EventCard";
import CarouselCustom from "../Carousel/Carousel_custom";
import FilterBar from "../Filters/Filters";
import Loading from "../Loading/Loading";
import ArtistsSection from "../ArtistsSection/ArtistsSection";

const Home = () => {
    const dispatch = useDispatch();

    const { loading } = useSelector((state) => state.loadingState);
    const location = useLocation();
    const path = location.pathname;

    useEffect(() => {
        dispatch(getEvents());
    }, []);

    const loadingCallback = useCallback(() => {
        dispatch(changeLoading());
        setTimeout(() => {
            dispatch(changeLoading());
        }, 500);
    }, []);

    useEffect(() => {
        loadingCallback();
    }, [loadingCallback, path]);

    return (
        <div>
            <CarouselCustom />
            <nav>
                <div>
                    <FilterBar />
                </div>
            </nav>
            {loading && <Loading />}
            <div className={loading ? "hidden" : ""}>
                <div className="flex flex-wrap py-10">
                    <div className="w-1/6 flex flex-col items-center pt-10 gap-8">
                        <h3 className="text-xl font-semibold text-red-700 uppercase italic lg:text-2xl">Artistas Favoritos</h3>
                        <ArtistsSection />
                    </div>
                    <div className="w-4/6 flex flex-col items-center rounded-3xl bg-gray-100 pt-8">
                        <h2 className="text-xl font-semibold text-red-700 uppercase lg:text-4xl">Próximos Eventos</h2>
                        <Events />
                    </div>
                    <div className="w-1/6 flex flex-col items-center pt-10 gap-8">
                        <h3 className="text-xl font-semibold text-red-700 uppercase italic lg:text-2xl">Talento Emergente</h3>
                        <ArtistsSection />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

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
                <div className="text-3xl font-semibold text-red-700 capitalize lg:text-4xl">
                    <div className="grid h-20 place-items-center">
                        <h1>PRÓXIMOS EVENTOS</h1>
                    </div>
                </div>
                <div className="flex flex-wrap ">
                    <div>
                        <ArtistsSection />
                    </div>
                    <div className="flex items-center justify-center w-[40%]">
                        <Events />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

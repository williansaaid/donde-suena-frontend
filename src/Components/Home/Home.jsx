import React from "react";
import CarouselCustom from "../Carousel/Carousel_custom";
import { Events } from "../EventCard/EventCard";
import FilterBar from "../Filters/Filters";
import { useSelector, useDispatch } from "react-redux";
import { changeLoading } from "../../Redux/Slices/Loading/LoadingActions";
import { getEvents } from "../../Redux/Slices/Event/eventActions";
import { useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loading from "../Loading/Loading";

const Home = () => {
    const dispatch = useDispatch();

    const { loading } = useSelector((state) => state.loadingState);
    const location = useLocation();
    const path = location.pathname;
    // console.log(loading);
    useEffect(() => {
        dispatch(getEvents());
    }, []);
    const loadingCallback = useCallback(() => {
        dispatch(changeLoading());
        setTimeout(() => {
            dispatch(changeLoading());
        }, 1000);
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
            {loading && (
                <Loading />
                // </div>
            )}
            <div className={loading ? "hidden" : ""}>
                <div className="text-3xl font-semibold text-red-700 capitalize lg:text-4xl">
                    <div class="grid h-20 place-items-center">
                        <h1>PRÓXIMOS EVENTOS</h1>
                    </div>
                </div>
                <div class="flex items-center justify-center">
                    <Events />
                </div>
            </div>
        </div>
    );
};

export default Home;

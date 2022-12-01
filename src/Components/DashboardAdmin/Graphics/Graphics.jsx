import { EventsByPrice } from "./EventsByPrice";
import { EventsCountGenre } from "./EventsCountGenre";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getEvents } from "../../../Redux/Slices/Event/eventActions";
export const Graphics = () => {
    const { events } = useSelector((state) => state.eventsState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEvents());
    }, [dispatch]);
    return (
        <div className="flex ">
            <div className="flex flex-col gap-4 w-1/2">
                <div className="flex justify-center">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                        Eventos por precio
                    </h1>
                </div>
                <EventsByPrice events={events} />
            </div>
            <div className="flex flex-col gap-4 w-1/2">
                <div className="flex justify-center">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                        Eventos por género
                    </h1>
                </div>
                <EventsCountGenre events={events} />
            </div>
        </div>
    );
};

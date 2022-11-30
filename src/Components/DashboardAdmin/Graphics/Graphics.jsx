import { EventsByPrice } from "./EventsByPrice";
import { EventsCountGenre } from "./EventsCountGenre";
export const Graphics = ({ events }) => {
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

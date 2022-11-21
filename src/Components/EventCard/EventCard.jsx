import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const Events = () => {
    const { events } = useSelector((state) => state.eventsState);
    const [visible, setVisible] = useState(4);

    const showMoreEvents = () => {
        setVisible((prevValue) => prevValue + 4);
    };

    return (
        <div className="flex flex-col items-center w-3/4 mb-20">
            <div className="w-full flex justify-around items-center flex-wrap gap-8 py-8">
                {events &&
                    events.slice(0, visible).map((el, id) => {
                        return (
                            <div
                                key={id}
                                className="relative sm:h-50 w-80 rounded-lg"
                            >
                                <div>
                                    <div className="group flex  justify-center text-center relative overflow-hidden rounded-md cursor-pointer">
                                        <img
                                            className="object-cover w-auto h-auto rounded-lg  ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125"
                                            src={el.image}
                                            alt="imagen no encontrada"
                                        />
                                        <div className="absolute bg-black w-full h-full opacity-50 transition-opacity duration-500 group-hover:opacity-80" />
                                        <div className="absolute p-3 w-full h-full bottom-0 bg- rounded-lg flex flex-col justify-items-center  justify-end text-left">
                                            <div className="justify-items-center justify-end text-left">
                                                <a
                                                    href={`/details/${el.id}`}
                                                    className="text-xl font-semibold text-gray-800 hover:underline dark:text-white"
                                                >
                                                    {el.name}
                                                </a>
                                            </div>

                                            <span className="text-sm text-gray-500 dark:text-gray-300">
                                                📅 Fecha :{el.date}
                                            </span>
                                            <span className="text-sm text-gray-500 dark:text-gray-300">
                                                ⏰ Inicia {el.start} - Finaliza{" "}
                                                {el.end}
                                            </span>
                                            <span className="text-sm text-gray-500 dark:text-gray-300">
                                                💵 Compra por {el.price}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
            {visible < events.length && (
                <button
                    onClick={showMoreEvents}
                    class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                >
                    VER MAS EVENTOS ↓
                </button>
            )}
        </div>
    );
};
export default Events;

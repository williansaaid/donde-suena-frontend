import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getEvents } from "../../Redux/eventActions";
import { useSelector } from "react-redux";

export const Events = () => {
    const dispatch = useDispatch();
    const { events } = useSelector((state) => state.events);
    const { items, setItems } = useState([]);
    const [visible, setVisible] = useState(4);
    useEffect(() => {
        dispatch(getEvents());
    }, []);
    const showMoreEvents = () => {
        setVisible((prevValue) => prevValue + 4);
    };

    return (
        <div class="flex flex-col items-center w-3/4 mb-20">
            <div class="w-full flex justify-around items-center flex-wrap gap-8 py-8">
                {events &&
                    events.slice(0, visible).map((el, id) => {
                        return (
                            <card
                                key={id}
                                className="relative sm:h-50 w-80 rounded-lg"
                            >
                                <div>
                                    <div className="group flex justify-center text-center relative overflow-hidden rounded-md cursor-pointer">
                                        <img
                                            class="object-cover w-auto h-auto rounded-lg  ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125"
                                            src={el.image}
                                            alt="imagen no encontrada"
                                        />
                                        <div className="absolute bg-black w-full h-full opacity-50 transition-opacity duration-500 group-hover:opacity-80" />
                                        <div className="absolute w-full h-full bottom-0 bg- rounded-lg flex flex-col justify-items-center  justify-end text-left">
                                            <div className="justify-items-center justify-end text-left">
                                                <a
                                                    href={`/details/${el.id}`}
                                                    class="text-xl font-semibold text-gray-800 hover:underline dark:text-white"
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
                            </card>
                        );
                    })}
            </div>
            <button
                onClick={showMoreEvents}
                class="bg-transparent hover:bg-customRed text-customRed font-semibold hover:text-white py-2 px-4 border-2 border-customRed hover:border-transparent rounded-xl transition duration-500"
            >
                VER MAS EVENTOS ↓
            </button>
        </div>
    );
};
export default Events;

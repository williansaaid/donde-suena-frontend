import { addDays, subDays } from "date-fns/esm";
import React from "react";
import { useDispatch } from "react-redux";
import { setFilter, getEvents } from "../../Redux/Slices/Event/eventActions";
import { format } from "date-fns";
import DropdownPlaceFilter from "./DropdownPlaceFilter";
import DropdownGenreFilter from "./DropdownGenreFilter";

function FilterBar() {
    const dispatch = useDispatch();

    function handleFilterDate(by) {
        let eventStart = "";
        let day = format(addDays(new Date(), 1), "yyyy-MM-dd");
        let week = format(addDays(new Date(), 7), "yyyy-MM-dd");
        let month = format(addDays(new Date(), 30), "yyyy-MM-dd");

        if (by === "day") eventStart = day;
        if (by === "week") eventStart = week;
        if (by === "month") eventStart = month;
        let now = format(subDays(new Date(), 1), "yyyy-MM-dd");

        dispatch(
            setFilter(`?filter[beginDate]=${now}&filter[endDate]=${eventStart}`)
        );
    }

    return (
        <nav className="text-white flex font-bold justify-between items-center h-44 bg-[url('https://res.cloudinary.com/ds41xxspf/image/upload/v1668451836/Donde-Suena-Assets/forma_recorte_pdnvjo.png')] ">
            <ul className="flex justify-around w-3/12 ml-10 mb-20">
                <li className="flex items-center gap-x-1.5">
                    <img
                        className="max-h-5"
                        src="https://res.cloudinary.com/ds41xxspf/image/upload/v1668097753/Donde-Suena-Assets/Henry_Proyecto_Grupal_Filtro_cymgds.png"
                        alt="filterIcon"
                        height="20px"
                        width="20px"
                    />
                    <h1
                        className="cursor-pointer"
                        onClick={() => {
                            dispatch(getEvents());
                        }}
                    >
                        Limpiar Filtros
                    </h1>
                </li>
                <li className="flex items-center gap-x-1.5">
                    <DropdownPlaceFilter />
                </li>
                <li className="flex items-center gap-x-1.5">
                    <DropdownGenreFilter />
                </li>
            </ul>

            <ul className="flex justify-around w-3/12 mr-10 border-x-2 border-y-2 rounded mb-20">
                <li className="w-full">
                    <button
                        className="cursor-pointer hover:bg-gray-400 w-full"
                        onClick={() => handleFilterDate("day")}
                        value={"day"}
                    >
                        24hs
                    </button>
                </li>
                <li className="w-full">
                    <button
                        className="cursor-pointer hover:bg-gray-400 w-full"
                        onClick={() => handleFilterDate("week")}
                        value={"week"}
                    >
                        7 Dias
                    </button>
                </li>
                <li className="w-full">
                    <button
                        className="cursor-pointer hover:bg-gray-400 w-full"
                        onClick={() => handleFilterDate("month")}
                        value={"month"}
                    >
                        30 Dias
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default FilterBar;

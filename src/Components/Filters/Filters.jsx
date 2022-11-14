import { addDays, subDays } from "date-fns/esm";
import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../Redux/eventActions";
import { format } from "date-fns";

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
        <nav class="text-white flex font-bold justify-between items-center h-full">
            <ul class="flex justify-around w-3/12 ml-10">
                <li class="flex items-center gap-x-1.5">
                    <img
                        class="max-h-5"
                        src="https://res.cloudinary.com/ds41xxspf/image/upload/v1668097753/Donde-Suena-Assets/Henry_Proyecto_Grupal_Filtro_cymgds.png"
                        alt="filterIcon"
                        height="20px"
                        width="20px"
                    />
                    <h1>Limpiar Filtros</h1>
                </li>
                <li class="flex items-center gap-x-1.5">
                    <img
                        class="max-h-5"
                        src="https://res.cloudinary.com/ds41xxspf/image/upload/v1668097753/Donde-Suena-Assets/Henry_Proyecto_Grupal_Locaci%C3%B3n_y0tkpm.png"
                        alt="locationIcon"
                        height="20px"
                        width="20px"
                    />
                    <h1>Lugar</h1>
                </li>
                <li class="flex items-center gap-x-1.5">
                    <img
                        class="max-h-5"
                        src="https://res.cloudinary.com/ds41xxspf/image/upload/v1668097753/Donde-Suena-Assets/Henry_Proyecto_Grupal_G%C3%A9nero_j8vpju.png"
                        alt="genresIcon"
                        height="20px"
                        width="20px"
                    />
                    <h1>Genero</h1>
                </li>
            </ul>

            <ul class="flex justify-around w-3/12 mr-10">
                <li>
                    <h1
                        className="cursor-pointer"
                        onClick={() => handleFilterDate("day")}
                        value={"day"}
                    >
                        24hs
                    </h1>
                </li>
                <li>
                    <h1
                        className="cursor-pointer"
                        onClick={() => handleFilterDate("week")}
                        value={"week"}
                    >
                        7 Dias
                    </h1>
                </li>
                <li>
                    <h1
                        className="cursor-pointer"
                        onClick={() => handleFilterDate("month")}
                        value={"month"}
                    >
                        30 Dias
                    </h1>
                </li>
            </ul>
        </nav>
    );
}

export default FilterBar;

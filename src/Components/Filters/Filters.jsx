import { addDays, subDays } from "date-fns/esm";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, getEvents } from "../../Redux/eventActions";
import { format } from "date-fns";
import { getGenres } from "../../Redux/Slices/Genres/genresAction";

function FilterBar() {
    const dispatch = useDispatch();
    const { allGenres } = useSelector((state) => state?.genresState);
    useEffect(() => {
        dispatch(getGenres());
    }, [dispatch]);

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
    function handleFilterByGenre() {
        const genres = allGenres.genres?.map((g) => g.name);
        console.log(genres);
    }
    return (
        <nav class="text-white flex font-bold justify-between items-center h-44 bg-[url('https://res.cloudinary.com/ds41xxspf/image/upload/v1668451836/Donde-Suena-Assets/forma_recorte_pdnvjo.png')] ">
            <ul class="flex justify-around w-3/12 ml-10 mb-20">
                <li class="flex items-center gap-x-1.5">
                    <img
                        class="max-h-5"
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
                    <button onClick={() => handleFilterByGenre("genero")}>
                        <img
                            className="max-h-5 hover:rotate-90 transition duration-500"
                            src="https://res.cloudinary.com/ds41xxspf/image/upload/v1668097753/Donde-Suena-Assets/Henry_Proyecto_Grupal_G%C3%A9nero_j8vpju.png"
                            alt="genresIcon"
                            height="20px"
                            width="20px"
                        />
                    </button>
                    <h1>Genero</h1>
                </li>
            </ul>

            <ul class="flex justify-around w-3/12 mr-10 border-x-2 border-y-2 rounded mb-20">
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

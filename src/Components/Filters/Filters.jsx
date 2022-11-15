import { addDays } from "date-fns/esm";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchByDate } from "../../Redux/filterSlice";
import { format } from "date-fns";

function FilterBar() {
    const dispatch = useDispatch();
    let { events } = useSelector((state) => state.events);
    const eventoPrueba = {
        id: "2c4d2e1c-230e-4162-96dc-d2246323c92d",
        name: "Monoambiente",
        description: "Product",
        date: "2022-11-14",
        start: "13:40:00",
        end: "22:48:00",
        price: 2540,
        quotas: 100,
        image: "https://loremflickr.com/640/480/business",
        state: true,
        address: "Calle 1",
        city: "Bogotá",
    };
    const date = new Date();

    let day = date.getDate();

    let month = date.getMonth();

    let year = date.getFullYear();

    let hour = date.getHours();

    let minutes = date.getMinutes();

    let seconds = date.getSeconds();

    console.log(hour);

    let currentDay = addDays(date, 30);

    events = [...events, eventoPrueba];
    function handleFilterDate(by) {
        let eventStart = "";
        let day = format(addDays(new Date(), 1), "yyyy-MM-dd-HH:mm:ss");
        let week = format(addDays(new Date(), 7), "yyyy-MM-dd-HH:mm:ss");
        let month = format(addDays(new Date(), 30), "yyyy-MM-dd-HH:mm:ss");

        if (by === "day") eventStart = day;
        console.log(day);
        if (by === "week") eventStart = week;
        console.log(week);
        if (by === "month") eventStart = month;
        console.log(month);
        console.log(`soy${by}`);

        const dateNow = format(new Date(), "yyyy-MM-dd-HH:mm:ss");
        const eventDay = events.filter((event) => {
            let dbEvent = `${event.date}-${event.start}`;
            console.log(`${event.date}-${event.start}`);
            if (`${event.date}-${event.start}` < dateNow) return false;
            return eventStart >= `${event.date}-${event.start}`;
        });
        console.log(eventDay);
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
                    <h1>Quitar Filtros</h1>
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
                        className="max-h-5"
                        src="https://res.cloudinary.com/ds41xxspf/image/upload/v1668097753/Donde-Suena-Assets/Henry_Proyecto_Grupal_G%C3%A9nero_j8vpju.png"
                        alt="genresIcon"
                        height="20px"
                        width="20px"
                    />
                    <h1>Genero</h1>
                </li>
            </ul>

            <ul class="flex justify-around w-3/12 mr-10 border-x-2 border-y-2 rounded mb-20">
                <li>
                    <h1
                    onClick={() => handleFilterDate("day")} value={"day"}>
                        24hs
                    </h1>
                </li>
                <li>
                    <h1 onClick={() => handleFilterDate("week")} value={"week"}>
                        7 Dias
                    </h1>
                </li>
                <li>
                    <h1
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

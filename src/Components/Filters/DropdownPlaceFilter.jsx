import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../Redux/Slices/Event/eventActions";

export default function DropdownPlaceFilter() {
    const dispatch = useDispatch();

    const handlePlaceFilter = (e) => {
        let city = e.target.innerHTML.toString();
        dispatch(setFilter(`?filter[city]=${city}`));
    };

    return (
        <div className="group inline-block">
            <button className="outline-none focus:outline-none px-3 py-1 bg-customGray rounded-sm flex items-center min-w-32 gap-x-1.5">
                <img
                    className="max-h-5"
                    src="https://res.cloudinary.com/ds41xxspf/image/upload/v1668097753/Donde-Suena-Assets/Henry_Proyecto_Grupal_Locaci%C3%B3n_y0tkpm.png"
                    alt="locationIcon"
                    height="20px"
                    width="20px"
                />
                <span className="pr-1 font-semibold flex-1">Lugar</span>
                <span>
                    <svg
                        className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </span>
            </button>
            <ul class="flex flex-row grid grid-cols-3 bg-customGray border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32" onClick={(e) => handlePlaceFilter(e)}>
                <li class="rounded-sm px-3 py-1 hover:bg-gray-400 hover:cursor-pointer" value={"Buenos Aires"}>Buenos Aires</li>
                <li class="rounded-sm px-3 py-1 hover:bg-gray-400 hover:cursor-pointer" value={"Lima"}>Lima</li>
                <li class="rounded-sm px-3 py-1 hover:bg-gray-400 hover:cursor-pointer" value={"Cordoba"}>Cordoba</li>
                <li class="rounded-sm px-3 py-1 hover:bg-gray-400 hover:cursor-pointer" value={"Medellín"}>Medellín</li>
                <li class="rounded-sm px-3 py-1 hover:bg-gray-400 hover:cursor-pointer" value={"Santiago"}>Santiago</li>
                <li class="rounded-sm px-3 py-1 hover:bg-gray-400 hover:cursor-pointer" value={"Rio Cuarto"}>Rio Cuarto</li>
                <li class="rounded-sm px-3 py-1 hover:bg-gray-400 hover:cursor-pointer" value={"Rosario"}>Rosario</li>
                <li class="rounded-sm px-3 py-1 hover:bg-gray-400 hover:cursor-pointer" value={"La Plata"}>La Plata</li>
                <li class="rounded-sm px-3 py-1 hover:bg-gray-400 hover:cursor-pointer" value={"Cali"}>Cali</li>
            </ul>
        </div>
    );
}

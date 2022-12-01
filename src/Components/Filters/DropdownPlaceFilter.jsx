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
            <button className="outline-none focus:outline-none px-3 py-1 bg-customGray rounded-sm flex items-center min-w-32 gap-2">
                <img
                    className="h-5 w-auto"
                    src="https://res.cloudinary.com/ds41xxspf/image/upload/v1668097753/Donde-Suena-Assets/Henry_Proyecto_Grupal_Locaci%C3%B3n_y0tkpm.png"
                    alt="locationIcon"
                />
                <span className="font-semibold flex-1">Lugar</span>
                <span>
                    <svg
                        className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-300 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </span>
            </button>
            <ul className="grid grid-cols-3 bg-customGray border rounded-xl transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32 overflow-hidden" onClick={(e) => handlePlaceFilter(e)}>
                <li className="rounded-sm px-3 py-1 hover:bg-gray-400 hover:cursor-pointer transition duration-200 ease-in-out" value={"Buenos Aires"}>Buenos Aires</li>
                <li className="rounded-sm px-3 py-1 hover:bg-gray-400 hover:cursor-pointer transition duration-200 ease-in-out" value={"Lima"}>Lima</li>
                <li className="rounded-sm px-3 py-1 hover:bg-gray-400 hover:cursor-pointer transition duration-200 ease-in-out" value={"Cordoba"}>Cordoba</li>
                <li className="rounded-sm px-3 py-1 hover:bg-gray-400 hover:cursor-pointer transition duration-200 ease-in-out" value={"Medellín"}>Medellín</li>
                <li className="rounded-sm px-3 py-1 hover:bg-gray-400 hover:cursor-pointer transition duration-200 ease-in-out" value={"Santiago"}>Santiago</li>
                <li className="rounded-sm px-3 py-1 hover:bg-gray-400 hover:cursor-pointer transition duration-200 ease-in-out" value={"Rio Cuarto"}>Rio Cuarto</li>
                <li className="rounded-sm px-3 py-1 hover:bg-gray-400 hover:cursor-pointer transition duration-200 ease-in-out" value={"Rosario"}>Rosario</li>
                <li className="rounded-sm px-3 py-1 hover:bg-gray-400 hover:cursor-pointer transition duration-200 ease-in-out" value={"La Plata"}>La Plata</li>
                <li className="rounded-sm px-3 py-1 hover:bg-gray-400 hover:cursor-pointer transition duration-200 ease-in-out" value={"Cali"}>Cali</li>
            </ul>
        </div>
    );
}

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGenres } from "../../Redux/Slices/Genres/genresAction";
import { useSelector } from "react-redux";
import { setFilter } from "../../Redux/Slices/Event/eventActions";


export default function DropdownGenreFilter() {
    const dispatch = useDispatch()
    const { genres } = useSelector((state) => state.genresState);

    useEffect(() => {
        dispatch(getGenres());
    }, [dispatch]);

    const handleGenreFilter = (e) => {
        let genre = e.target.innerHTML.toString()
        dispatch(setFilter(`?filter[genre]=${genre}`))
    }

    return (

        <div class="group inline-block">
            <button class="outline-none focus:outline-none px-3 py-1 bg-customGray rounded-sm flex items-center min-w-32 gap-x-1.5">
                <img
                    className="max-h-5 hover:rotate-90 transition duration-500"
                    src="https://res.cloudinary.com/ds41xxspf/image/upload/v1668097753/Donde-Suena-Assets/Henry_Proyecto_Grupal_G%C3%A9nero_j8vpju.png"
                    alt="genresIcon"
                    height="20px"
                    width="20px"
                />
                <span class="pr-1 font-semibold flex-1">Genero</span>
                <span>
                    <svg
                        class="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </span>
            </button>
            <ul class="flex flex-row grid grid-cols-3 bg-customGray border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32" onClick={(e) => handleGenreFilter(e)}>
                {genres.map((e) => (
                    <li class="rounded-sm px-3 py-1 hover:bg-gray-400 hover:cursor-pointer" value={e.name}>{e.name}</li>
                ))}
            </ul>
        </div>

    )

}

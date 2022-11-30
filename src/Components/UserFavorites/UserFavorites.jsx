import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites, deleteFavorite } from "../../Redux/Slices/Favorites/favoritesAction";
import { getArtists } from "../../Redux/Slices/Artist/artistActions";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const UserFavorites = () => {
    const dispatch = useDispatch();
    const { favorites } = useSelector((state) => state.favoritesState);
    const { artists } = useSelector((state) => state.artistState);

    useEffect(() => {
        dispatch(getFavorites());
    }, []);

    useEffect(() => {
        dispatch(getArtists());
    }, [dispatch]);

    const handleDeleteFavorite = (e) => {
        dispatch(deleteFavorite(e.target.value));
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Favorito eliminado 😥",
            showConfirmButton: false,
            timer: 1500,
        });
    };

    return (
        <div class="w-full flex justify-around flex-wrap ">
            {favorites &&
                favorites?.map((artist) => {
                    return (
                        <div class=" transition duration-500 hover:scale-90 hover:bg-customGray-600">
                            <div class="m-auto m-5 my-5 w-80 max-w-lg items-center justify-center overflow-hidden rounded-2xl bg-slate-600 shadow-xl">
                                <div class="h-24 bg-slate-300">
                                    <button
                                        class="inline-block p-4 text-center text-white transition bg-red-500 rounded-full shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none"
                                        onClick={(e) =>
                                            handleDeleteFavorite(e)(
                                                window.location.reload(true)
                                            )
                                        }
                                        value={artist.id}
                                    >
                                        <svg
                                            class="w-3 h-3 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <Link
                                    to={`/artistProfile/${artist.id}`}
                                    key={artist.id}
                                >
                                    <div class="-mt-20 flex justify-center">
                                        <img
                                            class="h-32 rounded-full "
                                            src={artist.image}
                                        />
                                    </div>
                                    <div class="mt-5 mb-1 px-3 text-center text-1xl text-black font-bold">
                                        {artist.nickname}
                                    </div>
                                </Link>
                                <div class="mb-5 px-3 text-center text-1xl text-white font-bold">
                                    {artist.genre}
                                </div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default UserFavorites;

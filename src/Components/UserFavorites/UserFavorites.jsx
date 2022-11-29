import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getFavorites,
    deleteFavorite,
} from "../../Redux/Slices/Favorites/favoritesAction";
import { getArtists } from "../../Redux/Slices/Artist/artistActions";
import { Link } from "react-router-dom";

const UserFavorites = () => {
    const dispatch = useDispatch();
    const { favorites } = useSelector((state) => state.favoritesState);

    useEffect(() => {
        dispatch(getFavorites());
    }, []);
    const { artists } = useSelector((state) => state.artistState);

    useEffect(() => {
        dispatch(getArtists());
    }, [dispatch]);

    const handleDeleteFavorite = (e) => {
        dispatch(deleteFavorite(e));
        dispatch(getFavorites());
    };

    return (
        <div className="overflow-y-auto max-h-[1000px] w-full flex justify-around flex-wrap ">
            {favorites &&
                favorites?.map((artist) => {
                    return (
                        artist.state?
                        <div class=" transition duration-500 hover:scale-90 hover:bg-customGray-600">
                            <div class="m-auto m-5 my-5 w-80 max-w-lg items-center justify-center overflow-hidden rounded-2xl bg-slate-600 shadow-xl">
                                <div class="h-24 bg-slate-300">
                                    <button
                                        onClick={() => handleDeleteFavorite(artist.id)}
                                        className=""
                                    >
                                        X
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
                                
                            </div>
                        </div>
                            : <Loading/>
                    );
                })}
        </div>
    );
};

export default UserFavorites;

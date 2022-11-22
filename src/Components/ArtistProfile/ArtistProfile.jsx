import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getArtistsById } from "../../Redux/Slices/Artist/artistActions";
import { addFavorite } from "../../Redux/Slices/Favorites/favoritesAction";

export const ArtistProfile = (props) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { artistId } = useSelector((state) => state.artistId);
    const { addFav } = useSelector((state) => state.addFav);
    const { user } = useSelector((state) => state.sessionState.user.data);
    console.log(user);

    useEffect(() => {
        dispatch(getArtistsById(id));
    }, [dispatch, id]);

    function handleAddFav(e) {
        e.preventDefault();
        dispatch(addFavorite(id, user.id));
    }

    return (
        <div class="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
            <div class="px-6">
                <div class="flex flex-wrap justify-center">
                    <div class="w-full flex justify-center">
                        <div class="relative">
                            <img
                                src={artistId.image}
                                class="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                            />
                        </div>
                    </div>
                    <div class="w-full text-center mt-20">
                        <div class="flex justify-center lg:pt-4 pt-8 pb-0">
                            <div class="p-3 text-center">
                                <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">
                                    3,360
                                </span>
                                <span class="text-sm text-slate-400">
                                    Photos
                                </span>
                            </div>
                            <div class="p-3 text-center">
                                <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">
                                    2,454
                                </span>
                                <span class="text-sm text-slate-400">
                                    Followers
                                </span>
                            </div>

                            <div class="p-3 text-center">
                                <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">
                                    564
                                </span>
                                <span class="text-sm text-slate-400">
                                    Following
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-2">
                    <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">
                        {artistId.firstName} {artistId.lastName}
                    </h3>
                    <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                        <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
                        {artistId.spotify}
                    </div>
                </div>
                <div class="mt-6 py-6 border-t border-slate-200 text-center">
                    <div class="flex flex-wrap justify-center">
                        <div class="w-full px-4">
                            <p class="font-light leading-relaxed text-slate-600 mb-4">
                                {artistId.email}
                            </p>
                            <button
                                class="font-normal text-slate-700 hover:text-slate-400 scale-125"
                                onClick={(e) => handleAddFav(e)}
                            >
                                {" "}
                                ⭐{" "}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ArtistProfile;

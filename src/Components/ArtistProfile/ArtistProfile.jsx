import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getArtistsById } from "../../Redux/Slices/Artist/artistActions";
import { addFavorite } from "../../Redux/Slices/Favorites/favoritesAction";
import PostCard from "../PostCard/PostCard";

export const ArtistProfile = (props) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { artistId } = useSelector((state) => state.artistId);
    console.log(artistId);
    const tabsArray = Array.from(document.querySelectorAll("#select-tab"));
    const contentArray = Array.from(
        document.querySelectorAll("#select-content")
    );

    tabsArray.forEach((tab) => {
        tab.addEventListener("click", () => {
            let target = tab;
            //itero sobre los elementos y les saco el fondo activo
            tabsArray.forEach((tab) => {
                tab.classList.remove("bg-customRed");
            });

            const currentTab = tabsArray.indexOf(target);

            contentArray.forEach((content) => {
                if (contentArray.indexOf(content) === currentTab) {
                    content.classList.remove("hidden");
                } else if (contentArray.indexOf("content") !== currentTab) {
                    content.classList.add("hidden");
                }
            });
            target.classList.add("bg-customRed");
        });
    });
    const { addFav } = useSelector((state) => state.addFav);
    const user = useSelector((state) => state.sessionState.user.data);
    console.log(user);

    useEffect(() => {
        dispatch(getArtistsById(id));
    }, [dispatch, id]);

    function handleAddFav(e) {
        e.preventDefault();
        dispatch(addFavorite(id, user.id));
    }

    return (
        <div class="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-20">
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
                                    1,360
                                </span>
                                <span class="text-sm text-slate-400">
                                    Publicaciones
                                </span>
                            </div>
                            <div class="p-3 text-center">
                                <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">
                                    1,454
                                </span>
                                <span class="text-sm text-slate-400">
                                    Seguidores
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
                    {artistId.nickname}
                </div>
                <div class="text-xs mt-0 mb-2 text-slate-400 font-bold">
                    <i class="font-light leading-relaxed text-slate-600 mb-4"></i>
                    {artistId.description}
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
                    <button className="cursor-pointer bg-red-500 hover:bg-red-800 rounded-lg px-5 text-white">
                        Follow Account
                    </button>
                </div>
            </div>
            <div class="flex justify-center lg:pt-4 pt-8 pb-0">
                <div class="p-3 text-center">
                    <a href={artistId.instagram} target="_blank">
                        <img
                            className="cursor-pointer h-8 "
                            src="https://res.cloudinary.com/ds41xxspf/image/upload/v1668128720/Donde-Suena-Assets/thumbnail_instagram_uhwi1o.png"
                            alt="Instagram"
                        />
                    </a>
                </div>
                <div class="p-3 text-center">
                    <a href={artistId.twitter} target="_blank">
                        <img
                            className="cursor-pointer h-8"
                            src="https://res.cloudinary.com/ds41xxspf/image/upload/v1668128720/Donde-Suena-Assets/thumbnail_twitter_jnclek.png"
                            alt="Twitter"
                        />
                    </a>
                </div>
                <div class="p-3 text-center">
                    <a href={artistId.spotify} target="_blank">
                        <img
                            className="cursor-pointer h-8"
                            src="https://res.cloudinary.com/ds41xxspf/image/upload/v1669128648/Donde-Suena-Assets/spotify_ufgwir.png"
                            alt="Spotify"
                        />
                    </a>
                </div>
            </div>
            <div>
                <ul className="flex items-center justify-center">
                    <li
                        id="select-tab"
                        className="p-2 rounded-t w-full font-bold cursor-pointer bg-customRed hover:bg-red-300"
                    >
                        Post
                    </li>
                    <li
                        id="select-tab"
                        className="p-2 rounded-t w-full font-bold cursor-pointer hover:bg-red-300"
                    >
                        Shows
                    </li>
                </ul>
            </div>
            <section
                id="select-content"
                className="container min-h-0 bg-customGray p-2 text-4xl flex items-center justify-center"
            >
                <div>
                    <PostCard></PostCard>
                </div>
            </section>
            <section
                id="select-content"
                className="h-40 bg-gray-400 p-2 text-4xl flex items-center justify-center hidden"
            >
                <div>
                    Shows
                </div>
            </section>
            <script src="/ArtistProfile"></script>
        </div>
    );
};
export default ArtistProfile;

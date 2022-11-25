import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getArtistsById } from "../../Redux/Slices/Artist/artistActions";
import { addFavorite } from "../../Redux/Slices/Favorites/favoritesAction";
import { getPostById } from "../../Redux/Slices/Post/postSlice";
import ArtistShows from "../ArtistShows/ArtistShows";
import PostCard from "../PostCard/PostCard";
import Tabs from "../TabSystemArtist/Tabs";

export const ArtistProfile = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { artistId } = useSelector((state) => state.artistId);
    const posts= useSelector((state)=> state.posts)
    
   
    // const tabsArray = Array.from(document.querySelectorAll("#select-tab"));
    // const contentArray = Array.from(
    //     document.querySelectorAll("#select-content")
    // );

    // tabsArray.forEach((tab) => {
    //     tab.addEventListener("click", () => {
    //         let target = tab;
    //         //itero sobre los elementos y les saco el fondo activo
    //         tabsArray.forEach((tab) => {
    //             tab.classList.remove("bg-customRed");
    //         });

    //         const currentTab = tabsArray.indexOf(target);

    //         contentArray.forEach((content) => {
    //             if (contentArray.indexOf(content) === currentTab) {
    //                 content.classList.remove("hidden");
    //             } else if (contentArray.indexOf("content") !== currentTab) {
    //                 content.classList.add("hidden");
    //             }
    //         });
    //         target.classList.add("bg-customRed");
    //     });
    // });

    const {user} = useSelector((state) => state.sessionState);

    useEffect(() => {
        dispatch(getArtistsById(id));
    }, [dispatch, id]);
    
    console.log(artistId)
    // useEffect(() => {
    //     dispatch(getPostById(artistId?.nickname));
    // }, [dispatch,artistId?.nickname]);
    


    function handleAddFav(e) {
        e.preventDefault();
        dispatch(addFavorite(id, user.uid));
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
                                alt=""
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
                        </div>
                    </div>
                </div>
                <div class="text-center mt-2">
                    <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">
                        {artistId.nickname}
                    </h3>
                    <div class="text-xs mt-0 mb-2 text-slate-400 font-bold">
                        <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
                        {artistId.description}
                    </div>
                </div>
            </div>
            <div class="mt-6 py-6 border-t border-slate-200 text-center">
                <div class="flex flex-wrap justify-center">
                    <button
                        className="cursor-pointer bg-red-500 hover:bg-red-800 rounded-lg px-5 text-white"
                        onClick={(e) => handleAddFav(e)}
                    >
                        Agregar a Favoritos ⭐
                    </button>
                </div>
            </div>
            <div class="flex justify-center mb-6">
                <div class="p-3 text-center">
                    <a
                        href={artistId.instagram}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className="cursor-pointer h-8 "
                            src="https://res.cloudinary.com/ds41xxspf/image/upload/v1668128720/Donde-Suena-Assets/thumbnail_instagram_uhwi1o.png"
                            alt="Instagram"
                        />
                    </a>
                </div>
                <div class="p-3 text-center">
                    <a href={artistId.twitter} target="_blank" rel="noreferrer">
                        <img
                            className="cursor-pointer h-8"
                            src="https://res.cloudinary.com/ds41xxspf/image/upload/v1668128720/Donde-Suena-Assets/thumbnail_twitter_jnclek.png"
                            alt="Twitter"
                        />
                    </a>
                </div>
                <div class="p-3 text-center">
                    <a href={artistId.spotify} target="_blank" rel="noreferrer">
                        <img
                            className="cursor-pointer h-8"
                            src="https://res.cloudinary.com/ds41xxspf/image/upload/v1669128648/Donde-Suena-Assets/spotify_ufgwir.png"
                            alt="Spotify"
                        />
                    </a>
                </div>
            </div>
            <div>
                <Tabs></Tabs>
                {/* <ul className="flex items-center justify-center">
                    <li
                        id="select-tab"
                        className="p-2 rounded-t w-full font-bold cursor-pointer bg-customRed hover:bg-red-300"
                    >
                        Publicaciones
                    </li>
                    <li
                        id="select-tab"
                        className="p-2 rounded-t w-full font-bold cursor-pointer hover:bg-red-300"
                    >
                        Eventos
                    </li>
                </ul> */}
            </div>
            {/* <section
                id="select-content"
                className="container min-h-0 bg-customGray p-2 text-4xl flex items-center justify-center"
            >
                <div>
                    <PostCard nickname={artistId.nickname}/>
                </div>
            </section>
            <section
                id="select-content"
                className="h-90 bg-customGray p-2 text-4xl flex items-center justify-center hidden"
            >
                <div>
                    <ArtistShows id={artistId.id}/>
                </div>
            </section>
            <script src="/ArtistProfile"></script> */}
        </div>
    );
};

export default ArtistProfile;

import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getArtistsById } from "../../Redux/Slices/Artist/artistActions";
import { addFavorite } from "../../Redux/Slices/Favorites/favoritesAction";

import { getPostById } from "../../Redux/Slices/Post/postSlice";
import { setLoginModal } from "../../Redux/Slices/Modals/modalActions";
import ArtistShows from "../ArtistShows/ArtistShows";
import PostCard from "../PostCard/PostCard";
import Tabs from "../TabSystemArtist/Tabs";
import Swal from "sweetalert2";

export const ArtistProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const { artistId } = useSelector((state) => state.artistId);
    const { scroll } = useSelector((state) => state.scrollState);



    const { user } = useSelector((state) => state.sessionState);

    useEffect(() => {
        dispatch(getArtistsById(id));
    }, [dispatch, id]);

    console.log(artistId);
    useEffect(() => {
        dispatch(getPostById(artistId?.nickname));
    }, [dispatch,artistId?.nickname]);
    // const handleScroll = useCallback(() => {
    //     // let coordenadas = scroll[0] + ", " + scroll[1];
    //     // console.log(coordenadas);
    //     let coordenadaX = scroll[0];
    //     let coordenadaY = scroll[1];
    //     console.log(coordenadaX);
    //     console.log(coordenadaY);
    // }, [scroll]);
    useEffect(() => {
        let coordenadaX = scroll[0];
        let coordenadaY = scroll[1];
        window.scroll(coordenadaX, coordenadaY);

        // return window.scrollTo(0, 0);
    }, []);


    function handleAddFav(e) {
        if (!user.isLogged) dispatch(setLoginModal());

        e.preventDefault();
        dispatch(addFavorite(id, user.id));
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Nuevo Favorito Agregado",
            showConfirmButton: false,
            timer: 1500,
        });
    }

    return (
        <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-20">
            <div className="px-6">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full flex justify-center">
                        <div className="relative">
                            <img
                                src={artistId.image}
                                className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="w-full text-center mt-20">
                        <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                            <div className="p-3 text-center">
                                <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                                    1,360
                                </span>
                                <span className="text-sm text-slate-400">
                                    Publicaciones
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-2">
                    <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
                        {artistId.nickname}
                    </h3>
                    <div className="text-xs mt-0 mb-2 text-slate-400 font-bold">
                        <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
                        {artistId.description}
                    </div>
                </div>
            </div>
            <div className="mt-6 py-6 border-t border-slate-200 text-center">
                <div
                    className={
                        user.artista && id !== user.id
                            ? "hidden"
                            : "flex flex-wrap justify-center"
                    }
                >
                    {user.artista ? (
                        <button
                            className="cursor-pointer bg-red-500 hover:bg-red-800 rounded-lg py-2 px-5 text-white"
                            onClick={() => navigate("/create/event")}
                        >
                            Crear Evento ⭐
                        </button>
                    ) : (
                        <button
                            className="cursor-pointer bg-red-500 hover:bg-red-800 rounded-lg py-2 px-5 text-white"
                            onClick={(e) => handleAddFav(e)}
                        >
                            Agregar a Favoritos ⭐
                        </button>
                    )}
                </div>
            </div>
            <div className="flex justify-center mb-6">
                <div className="p-3 text-center">
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
                <div className="p-3 text-center">
                    <a href={artistId.twitter} target="_blank" rel="noreferrer">
                        <img
                            className="cursor-pointer h-8"
                            src="https://res.cloudinary.com/ds41xxspf/image/upload/v1668128720/Donde-Suena-Assets/thumbnail_twitter_jnclek.png"
                            alt="Twitter"
                        />
                    </a>
                </div>
                <div className="p-3 text-center">
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
            </div>
        </div>
    );
};

export default ArtistProfile;

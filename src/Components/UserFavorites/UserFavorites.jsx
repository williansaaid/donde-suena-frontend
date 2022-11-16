import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites } from "../../Redux/Slices/Favorites/favoritesAction";

const favorites = [
    {
        id: 1,
        name: "Juan",
        img: "https://images.unsplash.com/photo-1526218626217-dc65a29bb444?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2luZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        genre: "Pop"
    },
    {
        id: 2,
        name: "Juanito",
        img: "https://images.unsplash.com/photo-1526218626217-dc65a29bb444?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2luZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        genre: "Rap"
    },
    {
        id: 3,
        name: "Martin",
        img: "https://images.unsplash.com/photo-1526218626217-dc65a29bb444?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2luZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        genre: "Cumbia"
    },
    {
        id: 4,
        name: "Juan",
        img: "https://images.unsplash.com/photo-1526218626217-dc65a29bb444?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2luZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        genre: "Pop"
    },
    {
        id: 5,
        name: "Juanito",
        img: "https://images.unsplash.com/photo-1526218626217-dc65a29bb444?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2luZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        genre: "Rap"
    },
    {
        id: 6,
        name: "Martin",
        img: "https://images.unsplash.com/photo-1526218626217-dc65a29bb444?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2luZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        genre: "Cumbia"
    },
]

const UserFavorites = () => {
    const dispatch = useDispatch();
    // const { favorites } = useSelector((state) => state.favorites);
    // useEffect(() => {
    //     dispatch(getFavorites());
    // }, []);

    return (
        <div className="h-full w-full flex flex-col items-center justify-center font-source-sans text-white border-2 rounded-3xl">
            <h4 className="text-white uppercase font-bold py-4 text-xl">Tus Artistas Favoritos</h4>
            {favorites.map(artist => {
                return (
                    <div key={artist.id} className="w-full h-auto flex flex-col items-center justify-center gap-2 border rounded-lg font-bold">
                        <div className="flex items-center justify-between">
                            <p className="uppercase">{artist.name}</p>
                            <img src={artist.img} alt={`${artist.name} image`} className="w-12 h-12 rounded-full"/>
                        </div>
                        <p className="font-">{artist.genre}</p>
                    </div>
                )
            })}
        </div>
    )
};

export default UserFavorites;

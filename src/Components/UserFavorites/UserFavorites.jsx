import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites } from "../../Redux/Slices/Favorites/favoritesAction";

// const favorites = [
//     {
//         id: 1,
//         name: "Juan y su cuarteto",
//         img: "https://images.unsplash.com/photo-1526218626217-dc65a29bb444?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2luZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
//         genre: "Pop",
//     },
//     {
//         id: 2,
//         name: "Bohemian",
//         img: "https://images.unsplash.com/photo-1526218626217-dc65a29bb444?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2luZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
//         genre: "Rap",
//     },
//     {
//         id: 3,
//         name: "Martin",
//         img: "https://images.unsplash.com/photo-1526218626217-dc65a29bb444?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2luZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
//         genre: "Cumbia",
//     },
//     {
//         id: 4,
//         name: "Juan",
//         img: "https://images.unsplash.com/photo-1526218626217-dc65a29bb444?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2luZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
//         genre: "Pop",
//     },
//     {
//         id: 5,
//         name: "Juanito",
//         img: "https://images.unsplash.com/photo-1526218626217-dc65a29bb444?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2luZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
//         genre: "Rap",
//     },
//     {
//         id: 6,
//         name: "Martin",
//         img: "https://images.unsplash.com/photo-1526218626217-dc65a29bb444?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2luZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
//         genre: "Cumbia",
//     },
// ];

const UserFavorites = () => {
    const dispatch = useDispatch();
    const favorites  = useSelector((state) => state.favorites);
    useEffect(() => {
        dispatch(getFavorites());
    }, []);

    return (
        <div class="w-full flex justify-around flex-wrap ">
            {favorites &&
                favorites?.map((artist) => {
                    return (
                <div class=" transition duration-500 hover:scale-90 hover:bg-customGray-600">
                <div class="m-auto m-5 my-5 w-80 max-w-lg items-center justify-center overflow-hidden rounded-2xl bg-slate-600 shadow-xl">
                    <div class="h-24 bg-slate-300"></div>
                    <div class="-mt-20 flex justify-center">
                        <img
                            class="h-32 rounded-full "
                            src={artist.img}
                        />
                    </div>
                    <div class="mt-5 mb-1 px-3 text-center text-1xl text-black font-bold">
                        {artist.name}
                    </div>
                    <div class="mb-5 px-3 text-center text-1xl text-white font-bold">{artist.genre}</div>
                </div>
                </div>
            );
        })}
        </div>
    
   
 
       
)
};

export default UserFavorites;

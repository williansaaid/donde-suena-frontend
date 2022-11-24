import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserById } from "../../Redux/Slices/User/userAction";
import { Link } from "react-router-dom";
import UserFavorites from "../UserFavorites/UserFavorites";

export default function UserProfile() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { userId } = useSelector((state) => state.userIdState);



    useEffect(() => {
        dispatch(getUserById(id));
    }, [dispatch, id]);

    return (
        <div class="container min-w-full">
            <div class="grid grid-cols-1 md:grid-cols-2 ">
                <div class="hidden bg-customRed md:block ">
                    <div class="relative w-full flex justify-center h-52">
                        <img
                            src={userId.image}
                            class="shadow-xl rounded-full align-middle border-none absolute -ml-20 lg:-ml-16 max-w-[150px]"
                        />
                    </div>
                    <img
                        src="https://static.wixstatic.com/media/cc66dc_47b22f588e3b4f1f882bec92cdac68e0~mv2.gif"
                        alt=""
                        width="750px"
                        height="5px"
                        class="mt-10"
                    />
                    <h3 class=" flex justify-center mt-10 mr-14 text-2xl text-black font-bold mb-1">
                        {userId.firstName} {userId.lastName}
                    </h3>
                    <div class="flex justify-center mt-6 py-6 border-t border-slate-200">
                        <div class=" block uppercase tracking-wideflex justify-center mt-10text-2xl text-slate-300 font-bold leading-normal mb-1 mr-14">
                            {userId.email}
                        </div>
                    </div>
                    <div class="flex justify-center mt-10text-2xl text-slate-700 font-bold leading-normal mb-1 mr-14">
                        <span class=" p-3 block uppercase tracking-wide">🛒</span>
                        <span class=" p-3 text-black font-bold mr-10">
                            <Link to={`/myshopping/${id}`}> Mis compras</Link>
                        </span>
                    </div>
                </div>
                <div class="">
                
                    
                    <div class="animate-fade-in-down mt-1 text-center text-2xl text-customRed">
                        Mis Artistas Favoritos ⭐
                    </div>
                    <blockquote class="mb-8">
                        <UserFavorites/>
                    </blockquote>
                </div>
            </div>
        </div>
       
    );
}

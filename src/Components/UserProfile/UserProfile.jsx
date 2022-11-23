import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserById } from "../../Redux/Slices/User/userAction";
import { Link } from "react-router-dom";

export default function UserProfile() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { userId } = useSelector((state) => state.userIdState);
    console.log(userId);

    useEffect(() => {
        dispatch(getUserById(id));
    }, [dispatch, id]);

    return (
        <div class="mt-6 mb-6 ml-6  md:max-w-2xl break-words bg-customRed w-1/3 shadow-lg rounded-xl">
            <div class="px-6">
                <div class="flex flex-wrap justify-center">
                    <div class="w-full flex justify-center">
                        <div class="relative">
                            <img
                                src={userId.image}
                                class="shadow-xl rounded-full align-middle border-none absolute -ml-20 lg:-ml-16 max-w-[150px]"
                            />
                        </div>
                    </div>
                    <div class="w-full text-center ">
                        <div class="h-80 lg:pt-10  ">
                            <div class="p-3 text-center"></div>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <h3 class="text-2xl text-black font-bold leading-normal ">
                        {userId.firstName} {userId.lastName}
                    </h3>
                    <div class="text-xs text-slate-400 font-bold uppercase">
                        <i class="fas fa-map-marker-alt  text-slate-400 opacity-75"></i>
                        {userId.email}
                    </div>
                </div>
                <div class="py-6 border-t border-slate-200 text-center">
                    <div class="flex flex-wrap justify-center">
                        <div class=" px-4">
                            <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">
                                <Link to="myshopping/:id">🛒</Link>
                            </span>
                            <span class="text-sm text-slate-400">
                                Mis compras
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

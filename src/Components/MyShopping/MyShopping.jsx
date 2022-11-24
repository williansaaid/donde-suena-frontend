import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTicketsByUser } from "../../Redux/Slices/User/userAction";

const MyShopping = (props) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { tickets } = useSelector((state) => state.userState);

    useEffect(() => {
        dispatch(getTicketsByUser(id));
    }, [dispatch, id]);

    return (
        <div>
        <h1 class="flex justify-center font-bold text-3xl">Mis Compras</h1>
        <div class="flex flex-wrap mb-2">
            
            {tickets &&
                tickets?.map((el, id) => {
                    return (
                        <><div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2">
            
                            <div class="bg-customRed border rounded shadow p-2 transform transition duration-500 hover:scale-90 hover:bg-customGray-600 ">
                                <div class="flex flex-row items-center">
                                    <div class="flex-shrink pl-1 pr-4"><i class="fa fa-wallet fa-2x fa-fw fa-inverse"></i></div>
                                    <div class="flex-1 text-right">
                                        <h3 class="text-slate-300 font-bold text-2xl">{el.events[0]?.name} / {el.events[0]?.date}<span class="text-green-400"><i class="fas fa-caret-down"></i></span></h3>
                                        <h5 class="text-customGrey font-bold">Precio Total : {el.priceTotal}</h5>
                                        <h5 class="text-slate-300 font-bold">Cantidad: {el.quantity}</h5>
                                    </div>
                                </div>
                            </div>
                        </div></>
                    )
                    })}
                    </div>
                    </div>
    );
};

export default MyShopping;

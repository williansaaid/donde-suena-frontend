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
        <div className="flex flex-col items-center w-3/4 mb-20">
            <div className="w-full flex justify-around items-center flex-wrap gap-8 py-8">
                {tickets &&
                    tickets?.map((el, id) => {

                        return (
                            <div className="relative sm:h-50 w-80 rounded-lg " key={id}>
                                <h1 className="text-xl font-semibold"> Evento : {el.events[0].name}</h1>
                                <h2 className="text-lg font-mono text-customRed">Precio Total : {el.priceTotal}</h2>
                                <h2 className="text-lg"> Cantidad : {el.quantity}</h2>
                            </div>
                        );

                    })}
            </div>
        </div>
    );
};

export default MyShopping;

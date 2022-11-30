import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTicketsByUser } from "../../Redux/Slices/User/userAction";
import { getEvents } from "../../Redux/Slices/Event/eventActions";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
const MyShopping = (props) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { tickets } = useSelector((state) => state.userState);
    const { events } = useSelector((state) => state.eventsState);

    useEffect(() => {
        dispatch(getEvents());
        dispatch(getTicketsByUser(id));
    }, [dispatch, id]);

    const ticketsData = tickets.map((ticket) => {
        let show = [];
        const evento = events.filter(
            (event) => event?.name === ticket?.events[0].name
        );

        show = [...show, { ticket, evento: evento[0] }];
        return show;
    });
    console.log(ticketsData);

    return (
        <div>
            {ticketsData &&
                ticketsData?.flat().map((el) => {
                    return (
                        // <div
                        //     key={idx + 1}
                        //     className="flex w-full pt-3 px-2 md:pr-1 bg-customRed border rounded-2xl shadow p-2 transform transition duration-500 hover:scale-90 hover:bg-customGray-600"
                        // >
                        <div
                            // key={el.evento.id}
                            className=" transition duration-500 hover:scale-90 hover:bg-customGray-600"
                        >
                            <div className="m-auto m-5 my-5  max-w-lg items-center justify-center overflow-hidden rounded-2xl bg-slate-600 shadow-xl">
                                <Link to={`/details/${el.evento.id}`}>
                                    <div>
                                        <img
                                            className="max-w-[320px]"
                                            src={el.evento.image}
                                            alt=""
                                        />
                                    </div>

                                    <div className="h-10 bg-slate-300"></div>
                                    <div className="flex"></div>
                                    <div className="text-left">
                                        <div className="flex flex-wrap mt-3 px-3 gap-3">
                                            <div className="flex flex-wrap text-slate-300">
                                                <FiCalendar size={"1.7rem"} />
                                                <h3 className="text-slate-300 mb-5 px-3 font-bold text-xl">
                                                    {el.ticket.date}
                                                </h3>
                                            </div>
                                            <div className="flex flex-wrap text-slate-300">
                                                <FaMapMarkerAlt
                                                    size={"1.7rem"}
                                                />
                                                <h3 className="text-slate-300 mb-5 px-3 font-bold text-xl">
                                                    {el.evento.address}
                                                </h3>
                                            </div>
                                        </div>

                                        <h5 className="text-customGrey mb-5 px-3 font-bold text-xxl ">
                                            {el.evento.name}
                                        </h5>
                                        <h5 className="text-customGrey mb-5 px-3 font-bold text-xl ">
                                            Precio Total :{" "}
                                            {el.ticket.priceTotal}
                                        </h5>
                                        <h5 className="text-customGrey mb-5 px-3 font-bold text-xl ">
                                            Cantidad: {el.ticket.quantity}
                                        </h5>

                                        <h5 className="text-customGrey mb-5 px-3 font-bold text-xl ">
                                            {el.evento.description}
                                        </h5>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default MyShopping;

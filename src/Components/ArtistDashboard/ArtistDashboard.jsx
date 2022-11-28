import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getArtistEvent } from "../../Redux/Slices/Artist/artistActions";

const ArtistDashboard = () => {
    const dispatch = useDispatch();
    const { eventsArtist } = useSelector((state) => state.artistState);
    const { user } = useSelector((state) => state.sessionState);

    useEffect(() => {
        dispatch(getArtistEvent(user.id));
    }, []);

    return (
        <div className="w-full min-h-screen">
            <div className="h-screen flex flex-col my-20 mx-8 p-8 justify-start items-start bg-gray-200 rounded-3xl gap-10">
                <h1 className="text-5xl text-customRed font-bold uppercase">
                    Mis Metricas
                </h1>
                <div className="w-full bg-gray-400 rounded-3xl flex flex-col p-6 gap-4 text-customGray">
                    <p className="text-3xl uppercase font-bold">Mis Eventos</p>
                    <div className="flex flex-wrap justify-evenly">
                        {eventsArtist.length ? (
                            eventsArtist.map((event, i) => {
                                return (
                                    <div
                                        key={i}
                                        className="flex rounded-3xl p-8 bg-customGray text-white items-center w-fit"
                                    >
                                        <div className="flex flex-col w-full gap-8">
                                            <h4 className="text-2xl font-semibold border-2 rounded-3xl px-4 w-fit">
                                                {event.name}
                                            </h4>
                                            <div className="flex flex-col w-full gap-4">
                                                <div className="flex justify-between gap-4">
                                                    <div className="flex flex-col gap-2 w-1/3 justify-center">
                                                        <div className="flex justify-between items-center">
                                                            <span>Fecha:</span>
                                                            <p className="bg-gray-400 px-4 rounded-2xl text-customGray">
                                                                {event.date}
                                                            </p>
                                                        </div>
                                                        <div className="flex justify-between items-center">
                                                            <span>Ciudad:</span>
                                                            <p className="bg-gray-400 px-4 rounded-2xl text-customGray">
                                                                {event.city}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col gap-2 w-1/3 justify-center">
                                                        <div className="flex justify-between items-center">
                                                            <span>
                                                                Empieza:
                                                            </span>
                                                            <p className="bg-gray-400 px-4 rounded-2xl text-customGray">
                                                                {event.start}
                                                            </p>
                                                        </div>
                                                        <div className="flex justify-between items-center">
                                                            <span>
                                                                Termina:
                                                            </span>
                                                            <p className="bg-gray-400 px-4 rounded-2xl text-customGray">
                                                                {event.end}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col gap-2 w-1/3 justify-center">
                                                        <div className="flex justify-between items-center">
                                                            <span>
                                                                Boletos
                                                                Disponibles:
                                                            </span>
                                                            <p className="bg-gray-400 px-4 rounded-2xl text-customGray">
                                                                {event.quotas}
                                                            </p>
                                                        </div>
                                                        <div className="flex justify-between items-center">
                                                            <span>Valor:</span>
                                                            <p className="bg-gray-400 px-4 rounded-2xl text-customGray">
                                                                {event.price}$
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex justify-start gap-10 items-center">
                                                    <span>Direccion:</span>
                                                    <p className="bg-gray-400 px-8 rounded-2xl text-customGray">
                                                        {event.address}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="flex flex-col rounded-3xl p-6 bg-gray-500 text-white justify-center items-center gap-4">
                                <p className="font-bold text-xl">
                                    No encontramos eventos vigentes
                                </p>
                                <Link
                                    to={"/create/event"}
                                    className="text-xl italic font-bold bg-customRed p-4 rounded-3xl border-4 border-transparent hover:bg-white hover:text-customRed hover:border-customRed transition duration-700 ease-in-out"
                                >
                                    Quiero crear un Evento!
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtistDashboard;

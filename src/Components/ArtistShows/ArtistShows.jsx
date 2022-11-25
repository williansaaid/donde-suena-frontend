import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getArtistEvent } from "../../Redux/Slices/Artist/artistActions";

const ArtistShows = ({ id }) => {
    const dispatch = useDispatch();
    const eventsArtist = useSelector(
        (state) => state?.artistState.eventsArtist
    );

    useEffect(() => {
        dispatch(getArtistEvent(id));
    }, [dispatch, id]);

    return (
        <div className="container mt-2">
            {eventsArtist &&
                eventsArtist?.map((el, id) => {
                    return (
                        <div key={id} 
                        className="grid grid-cols-3 gap-2 border border-2 border-black rounded-md items-center mb-2">
                            <Link to={`/details/${el.id}`}>
                                <div className="col-span-1">
                                    <img
                                        className="rounded-md"
                                        src={el.image}
                                        alt="eventImage"
                                    />
                                </div>
                            </Link>
                                <div className="col-span-2 flex flex-col justify-between">
                                    <h2 className="text-xl font-semibold text-white">Evento : {el.name}</h2>
                                    <h1 className="text-xl font-semibold text-white">Fecha : {el.date} </h1>
                                    <h1 className="text-xl font-semibold text-white"> En : {el.city}</h1>
                                </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default ArtistShows;

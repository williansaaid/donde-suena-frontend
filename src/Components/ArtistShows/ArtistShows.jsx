import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getArtistEvent } from "../../Redux/Slices/Artist/artistActions";

const ArtistShows = ({ id }) => {
    const dispatch = useDispatch();
    const eventsArtist = useSelector((state) => state?.artistState.eventsArtist);

    useEffect(() => {
        dispatch(getArtistEvent(id));
    }, [dispatch, id]);
    
    return (
        <div>
            <div>
                {eventsArtist &&
                    eventsArtist?.map((el, id) => {
                        return (
                            <div
                                key={id}
                            >
                                <h1>
                                    {" "}
                                    Evento : {el.name}
                                </h1>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default ArtistShows;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getArtistEvent } from "../../Redux/Slices/Artist/artistActions";

const ArtistShows = (props) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const events = useSelector((state) => state.events);

    useEffect(() => {
        dispatch(getArtistEvent(id));
    }, [dispatch, id]);

    return (
        <div>
            <div>
                {events &&
                    events?.map((el, id) => {
                        return (
                            <div
                                
                                key={id}
                            >
                                <h1>
                                    {" "}
                                    Evento : {el.events[0].name}
                                </h1>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default ArtistShows;

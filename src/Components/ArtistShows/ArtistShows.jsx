import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getArtistEvent, cleanDetail } from "../../Redux/Slices/Artist/artistActions";

const ArtistShows = () => {
    const dispatch = useDispatch();
    const { eventsArtist } = useSelector((state) => state.artistState);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getArtistEvent(id));
        dispatch(cleanDetail());
    }, [dispatch, id]);

    return (
        <div class="max-w-2xl w-full lg:flex-col items-center ">
            {eventsArtist &&
                eventsArtist?.map((el, id) => {
                    return (
                        <div class="border-r border-b-8 border-l border-customGray  lg:border-t lg:border-grey-light bg-gray-300 rounded-t rounded-b lg:rounded-b lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                            <div class="mb-8">
                                <Link to={`/details/${el.id}`}>
                                    <div>
                                        <img
                                            className="rounded-md"
                                            src={el.image}
                                            alt="eventImage"
                                        />
                                    </div>
                                </Link>
                                <div class="text-black font-bold text-xl mb-2">
                                    Evento : {el.name}
                                </div>
                                <div class="text-sm">
                                    <p class="text-grey-darker text-base font-bold">
                                        Fecha : {el.date}{" "}
                                    </p>
                                    <p class="text-black font-bold leading-none">
                                        En : {el.city}
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-center"></div>
                        </div>
                    );
                })}
        </div>
    );
};

export default ArtistShows;

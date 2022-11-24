import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllArtistEvents } from "../../Redux/Slices/Artist/artistActions";


const ArtistDashboard = () => {
    const dispatch = useDispatch();
    const { eventsArtist } = useSelector((state) => state.artistState);
    const { user } = useSelector((state) => state.sessionState);

    useEffect(() => {
        dispatch(getAllArtistEvents(user.uid));
    },[]);

    console.log(eventsArtist);
    console.log(user);
    return (
        <div className="w-full h-full">
            <p>Hola</p>
        </div>
    );
};


export default ArtistDashboard;

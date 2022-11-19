import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = ({ data }) => {
    // console.log(data);
    const defaultCenter = {
        lat: Object.keys(data).length && data.geometry.location.lat,
        lng: Object.keys(data).length && data.geometry.location.lng,
    };

    const style = {
        height: "50vh",
        width: "100%",
    };
    // const { GOOGLE_API } = process.env;
    // console.log(GOOGLE_API);
    return (
        <LoadScript googleMapsApiKey="AIzaSyCkC7K_lCQfEnc18o2ho_lfkqwHNgLtee4">
            <GoogleMap
                mapContainerStyle={style}
                zoom={9}
                center={defaultCenter}
            >
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;

import { useState, useEffect } from "react";
import axios from "axios";

const useGoogleAddress = (address) => {
    // const { API_GEOLOCATION } = process.env;
    // console.log(API_GEOLOCATION);
    console.log(address);
    const [map, setMap] = useState({});

    useEffect(async () => {
        const response = await axios(
            `http://api.positionstack.com/v1/forward?access_key=430f3bb8d9287873f5d5683e95e2b0e5&query=${address}`
        );
        console.log(response);

        setMap(response.data.data[1]);
    }, []);

    return map;
};

export default useGoogleAddress;

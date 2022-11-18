import { useState, useEffect } from "react";
import axios from "axios";

const useGoogleAddress = (address) => {
    const api = process.env.REACT_APP_API_MAPS;
    const [map, setMap] = useState({});

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        try {
            const response = await axios(
                `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${api}`
            );
            setMap(response.data.results[0]);
        } catch (err) {
            console.log(err);
        }
    }, []);

    return map;
};

export default useGoogleAddress;

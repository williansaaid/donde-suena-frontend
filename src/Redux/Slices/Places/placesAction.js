import axios from "axios";
import { getAllPlaces } from "./placesSlice";

export const getPlaces = () => (dispatch) => {
    axios("http://localhost:3001/place/getPlaces")
        .then((res) => dispatch(getAllPlaces(res.data.places)))
        .catch((e) => console.log(e));
}

import axios from "axios";
import { getAllFavs } from "./favoritesSlice";

export const getFavorites = () => (dispatch) => {
    axios("")
        .then((res) => dispatch(getAllFavs(res.data.favorites)))
        .catch((e) => console.log(e));
}

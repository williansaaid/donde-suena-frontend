import axios from "axios";
import { getAllFavs } from "./favoritesSlice";

export const getFavorites = () => (dispatch) => {
    axios("http://localhost:3001/authUser/getFavoritesArtists")
        .then((res) => dispatch(getAllFavs(res.data.favorites)))
        .catch((e) => console.log(e));
}

import axios from "axios";
import { getAllFavs, addFav } from "./favoritesSlice";

export const getFavorites = () => (dispatch) => {
    axios("/auth/getFavoritesArtists")
        .then((res) => dispatch(getAllFavs(res.data.artistsFind)))
        .catch((e) => console.log(e));
};

export const addFavorite = (idA, idU) => (dispatch) => {
    axios
        .post(`/auth/postFavoriteArtist/${idA}?userId=${idU}`)
        .then((res) => dispatch(addFav(res.data)))
        .catch((e) => console.log(e));
};

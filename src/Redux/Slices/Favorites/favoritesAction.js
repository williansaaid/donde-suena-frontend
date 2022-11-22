import axios from "axios";
import { getAllFavs, addFav } from "./favoritesSlice";

export const getFavorites = () => (dispatch) => {
    axios("/authUser/getFavoritesArtists")
        .then((res) => dispatch(getAllFavs(res.data.favorites)))
        .catch((e) => console.log(e));
}

export const addFavorite = (idA, idU)=> ()=>{
    axios.post(`/postFavoriteArtist/${idA}?userId=${idU}`)
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
} 
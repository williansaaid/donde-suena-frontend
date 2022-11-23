import axios from "axios";
import { getAllFavs, addFav } from "./favoritesSlice";

export const getFavorites = () => (dispatch) => {
    axios("/authUser/getFavoritesArtists")
        .then((res) => dispatch(getAllFavs(res.data.favorites)))
        .catch((e) => console.log(e));
}

export const addFavorite = (idA, idU)=> ()=>{
    axios.post(`/auth/postFavoriteArtist/${idA}?userId=${idU}`)
    .then((res) => ((res)))
    .catch((e) => console.log(e));
} 
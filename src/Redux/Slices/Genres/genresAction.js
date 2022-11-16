import axios from "axios";
import { getAllGenres } from "./genresSlice";

export const getGenres = () => (dispatch) => {
    axios("http://localhost:3001/genres/getGenres")
        .then((res) => dispatch(getAllGenres(res.data.genres)))
        .catch((e) => console.log(e));
}

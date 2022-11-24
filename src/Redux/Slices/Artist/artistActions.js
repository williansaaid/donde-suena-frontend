import axios from "axios";
import { getAllArtists, getAllArtistById, getArtistShows } from "./artistSlice";

export const getArtists = () => (dispatch) => {
    axios("/auth/getArtists")
        .then((res) => dispatch(getAllArtists(res.data.artists)))
        .catch((e) => console.log(e));
};

export const postArtist = (values) => (dispatch) => {
    axios
        .post("/auth/artist/createPost", values)
        .then((res) => {
            console.log(res);
            dispatch(res);
            alert("Post Creado Exitosamente");
        })
        .catch((e) => {
            console.log(e);
        });
};
export const getArtistsById = (id) => (dispatch) => {
    axios(`http://localhost:3001/auth/getArtistById/${id}`)
        .then((res) => dispatch(getAllArtistById(res.data.artistID)))
        .catch((e) => console.log(e));
};
export const getArtistEvent = (id) => (dispatch) => {
    axios(`/event/getEvents/?filter[artist]=${id}`)
        .then((res) => dispatch(getArtistShows(res.data.events)))
        .catch((e)=> console.log(e));
}
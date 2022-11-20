import axios from "axios";
import {
    getAllArtists
} from "./artistSlice";


export const getArtists = () => (dispatch) => {
    axios("/auth/getArtists")
        .then((res) => dispatch(getAllArtists(res.data.events)))
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
            e.response.data ? alert(e.response.data.msg) : console.log(e);
        });
};

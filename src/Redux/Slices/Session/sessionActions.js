import axios from "axios";
import { logUser, logoutUser } from "./sessionSlice";

export const login = (values) => (dispatch) => {
    console.log(values);
    axios
        .post("http://localhost:3001/auth/loginUser", values)
        .then((res) => {
            console.log(res);
            dispatch(logUser(res.data));
        })
        .catch((e) => console.log(e));
};

export const confirmateToken = (token) => (dispatch) => {
    axios
        .get(`http://localhost:3001/auth/confirmation/${token}`)
        .then((res) => {
            console.log(res);
            dispatch(logUser(res));
            alert("Usuario Creado Exitosamente");
        })
        .catch((e) => console.log(e));
};

export const submitUserForm = (values) => (dispatch) => {
    console.log(values);
    axios
        .post("http://localhost:3001/auth/registerUser", values)
        .then((res) => {
            console.log(res);
            dispatch(logUser(res));
            alert("Usuario Creado Correctamente");
        })
        .catch((e) => console.log(e));
};

export const submitArtistForm = (values) => (dispatch) => {
    axios
        .post("http://localhost:3001/auth/registerArtist", values)
        .then((res) => {
            console.log(res);
            dispatch(logUser(res));
            alert("Usuario Creado Correctamente");
        })
        .catch((e) => {
            e.response.data ? alert(e.response.data.msg) : console.log(e);
        });
};

export const logOut = () => (dispatch) => {
    dispatch(logoutUser());
};

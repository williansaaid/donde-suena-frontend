import axios from "axios";
import { logUser, logoutUser } from "./sessionSlice";

export const login = (values) => (dispatch) => {
    axios
        .post("/auth/loginUser", values)
        .then((res) => {
            console.log(res);
            dispatch(logUser(res.data));
        })
        .catch((e) => console.log(e));
};

export const confirmateToken = (token) => (dispatch) => {
    axios
        .get(`/auth/confirmation/${token}`)
        .then((res) => {
            console.log(res);
            dispatch(logUser(res));
            alert("Usuario Creado Exitosamente");
        })
        .catch((e) => console.log(e));
};

export const forgotPassword = (email) => (dispatch) => {
    axios
        .put("/auth/forget-password", email)
        .then((res) => {
            console.log(res);
            alert("Se ha enviado un email a su casilla");
        })
        .catch((e) => console.log(e));
};

export const resetPassword = (values, token) => (dispatch) => {
    axios
        .put(`/auth/new-password/${token}`, values)
        .then((res) => {
            console.log(res);
            alert("Contraseña cambiada exitosamente");
        })
        .catch((e) => console.log(e));
};

export const submitUserForm = (values) => (dispatch) => {
    console.log(values);
    axios
        .post("/auth/registerUser", values)
        .then((res) => {
            console.log(res);
            dispatch(logUser(res));
            alert("Usuario Creado Correctamente");
        })
        .catch((e) => console.log(e));
};

export const submitArtistForm = (values) => (dispatch) => {
    axios
        .post("/auth/registerArtist", values)
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

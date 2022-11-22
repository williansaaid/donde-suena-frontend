import axios from "axios";
import { logUser, logoutUser } from "./sessionSlice";
import Swal from "sweetalert2/dist/sweetalert2.js";

const successAlert = () => {
    Swal.fire(
        "Registro exitoso!",
        "Revise su casilla de correo para completar el registro!",
        "success"
    );
};

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
            // alert("Usuario Creado Exitosamente");
            successAlert();
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
            successAlert();
        })
        .catch((e) => console.log(e));
};

export const submitArtistForm = (values) => (dispatch) => {
    axios
        .post("/auth/registerArtist", values)
        .then((res) => {
            console.log(res);
            dispatch(logUser(res));
            successAlert();
        })
        .catch((e) => {
            e.response.data ? alert(e.response.data.msg) : console.log(e);
        });
};

export const logOut = () => (dispatch) => {
    dispatch(logoutUser());
};

import axios from "axios";
import { logUser, logoutUser } from "./sessionSlice";
import Swal from 'sweetalert2';

const successCreationAlert = () => {
    Swal.fire({
        title: "Registro exitoso!",
        text: "Revise su casilla de correo para completar el registro!",
        icon: "success",
        timer: 2000
    });
};

const errorCreationAlert = (error) => {
    Swal.fire({
        title: "Ocurrió un error",
        text: `${error}`,
        icon: "error",
        timer: 5000
    })
};

const successConfirmAlert = () => {
    Swal.fire({
        title: "Todo en orden!",
        text: "Bienvenido a Donde Suena!",
        icon: "success",
        timer: 2000
    });
};

const logOutAlert = () => {
    Swal.fire({
        title: "Sesión Cerrada",
        text: "Esperamos verte pronto!",
        icon: "success",
        timer: 2000
    });
}

export const login = (values) => (dispatch) => {
    axios
        .post("/auth/loginUser", values)
        .then((res) => {
            console.log(res);
            dispatch(logUser(res.data));
        })
        .catch((e) => {
            e.response.data ? errorCreationAlert(e.response.data.msg) : console.log(e);
        });
};

export const confirmateToken = (token) => (dispatch) => {
    axios
        .get(`/auth/confirmation/${token}`)
        .then((res) => {
            console.log(res);
            dispatch(logUser(res));
            successConfirmAlert();
        })
        .catch((e) => console.log(e));
};

export const submitUserForm = (values) => (dispatch) => {
    console.log(values);
    axios
        .post("/auth/registerUser", values)
        .then((res) => {
            dispatch(logUser(res));
            successCreationAlert();
        })
        .catch((e) => {
            e.response.data ? errorCreationAlert(e.response.data.msg) : console.log(e);
        });
};

export const submitArtistForm = (values) => (dispatch) => {
    axios
        .post("/auth/registerArtist", values)
        .then((res) => {
            dispatch(logUser(res));
            successCreationAlert();
        })
        .catch((e) => {
            e.response.data ? errorCreationAlert(e.response.data.msg) : console.log(e);
        });
};

export const logOut = () => (dispatch) => {
    dispatch(logoutUser());
    logOutAlert();
};

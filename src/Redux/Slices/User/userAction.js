import axios from "axios";

import {
    logUser,
    googleRegister,
    changeModal,
    getAllTicketsByUser,
} from "./userSlice";

export const submitUserForm = (values) => (dispatch) => {
    axios
        .post("http://localhost:3001/auth/registerUser", values)
        .then((res) => {
            console.log(res);
            dispatch(logUser(res));
            alert("Usuario Creado Exitosamente");
        })
        .catch((e) => console.log(e));
};

export const loginGoogle = (values) => (dispatch) => {
    axios
        .post("http://localhost:3001/auth/google", values)
        .then((res) => dispatch(googleRegister(res)))
        .catch((e) => console.log(e));
};

export const setModal = () => (dispatch) => {
    dispatch(changeModal());
};

export const getTicketsByUser = (id) => (dispatch) => {
    axios(`http://localhost:3001/auth/user/getTickets/${id}`)
        .then((res) => dispatch(getAllTicketsByUser(res.data.allTickets.tickets)))
        .catch((e) => console.log(e));
};

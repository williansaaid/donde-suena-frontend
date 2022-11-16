import axios from "axios";

import {
    getAllEvents,
    getAllEventsById,
    logUser,
    googleRegister,
    changeModal,
    filteredEvents,
    getEventsByName,
} from "./eventSlice";

export const getEvents = () => (dispatch) => {
    axios("http://localhost:3001/event/getEvents")
        .then((res) => dispatch(getAllEvents(res.data.events)))
        .catch((e) => console.log(e));
};
export const getEventsById = (id) => (dispatch) => {
    axios(`http://localhost:3001/event/getEvent/${id}`)
        .then((res) => dispatch(getAllEventsById(res.data.event)))
        .catch((e) => console.log(e));
};

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

export const submitArtistForm = (values) => (dispatch) => {
    axios
        .post("http://localhost:3001/auth/registerArtist", values)
        .then((res) => {
            dispatch(res);
        })
        .catch((e) => {
            e.response.data ? alert(e.response.data.msg) : console.log(e);
        });
};

export const submitEventForm = (values) => (dispatch) => {
    axios
        .post("http://localhost:3001/event/createEvent", values)
        .then((res) => {
            console.log(res);
            dispatch(res);
            alert("Evento Creado Exitosamente");
        })
        .catch((e) => {
            console.log(e);
            e.response.data ? alert(e.response.data.msg) : console.log(e);
        });
};
export const getEventByName = (name) => (dispatch) => {
    axios(`http://localhost:3001/event/getEvents?filter[name]=${name}`)
        .then((res) => dispatch(getEventsByName(res.data.events)))
        .catch((e) => console.log(e));
};
export const setModal = () => (dispatch) => {
    dispatch(changeModal());
};

export const setFilter = (payload) => (dispatch) => {
    axios
        .get("http://localhost:3001/event/getEvents" + payload)
        .then((res) => {
            console.log(res);
            dispatch(filteredEvents(res.data.events));
        })
        .catch((e) => {
            e.response.data ? alert(e.response.data.msg) : console.log(e);
        });
};

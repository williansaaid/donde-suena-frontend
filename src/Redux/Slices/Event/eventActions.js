import axios from "axios";
import Swal from "sweetalert2";
import {
    getAllEvents,
    getAllEventsById,
    filteredEvents,
    getEventsByName,
    quantityTickets,
} from "./eventSlice";

const successCreationAlert = () => {
    Swal.fire({
        title: "Evento Creado!",
        text: "Ahora puedes compartir con tu público el evento!",
        icon: "success",
        timer: 2000,
    });
};

const errorCreationAlert = (error) => {
    Swal.fire({
        title: "Ocurrió un error",
        text: `${error}`,
        icon: "error",
        timer: 4000,
    });
};

export const getEvents = () => (dispatch) => {
    axios("/event/getEvents")
        .then((res) => dispatch(getAllEvents(res.data.events)))
        .catch((e) => console.log(e));
};
export const getEventsById = (id) => (dispatch) => {
    axios(`/event/getEvent/${id}`)
        .then((res) => dispatch(getAllEventsById(res.data.event)))
        .catch((e) => console.log(e));
};

export const submitEventForm = (values) => (dispatch) => {
    return axios
        .post("/event/createEvent", values)
        .then((res) => {
            successCreationAlert();
            console.log(res.data.event.id);
            return res.data.event.id;
        })
        .catch((e) => {
            console.log(e);
            e.response.data
                ? errorCreationAlert(e.response.data.msg)
                : console.log(e);
        });
};
export const getEventByName = (name) => (dispatch) => {
    axios(`/event/getEvents?filter[name]=${name}`)
        .then((res) => dispatch(getEventsByName(res.data.events)))
        .catch((e) => {
            console.log(e);
            e.response.data
                ? errorCreationAlert(e.response.data.msg)
                : console.log(e);
        });
};

export const setFilter = (payload) => (dispatch) => {
    axios
        .get("/event/getEvents" + payload)
        .then((res) => {
            console.log(res);
            dispatch(filteredEvents(res.data.events));
        })
        .catch((e) => {
            e.response.data
                ? errorCreationAlert(e.response.data.msg)
                : console.log(e);
        });
};

export const updateTickets = (values) => (dispatch) => {
    axios
        .put(`/event/updateStock/${values.id}`, values)
        .catch((e) => console.log(e));
};

export const getQuantityTickets = (id) => (dispatch) => {
    axios(`/event/stockQuotas/${id}`)
        .then((res) => {
            dispatch(quantityTickets(res.data.stock.quotas));
        })
        .catch((e) => console.log(e));
};

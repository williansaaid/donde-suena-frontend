import axios from "axios";

import { logUser, getAllTicketsByUser, getFavs } from "./userSlice";
import {
    paymentOrder,
    clearPaymentOrder
} from "./userSlice";

export const ticketPurchase = (values) => (dispatch) => {
    axios
        .post("/payment/crear-orden", values)
        .then((res) => dispatch(paymentOrder(res.data)))
        .catch((e) => console.log(e))
};

export const getTicketsByUser = (id) => (dispatch) => {
    axios(`/auth/user/getTickets/${id}`)
        .then((res) =>
            dispatch(getAllTicketsByUser(res.data.allTickets.tickets))
        )
        .catch((e) => console.log(e));
};
export const clearUrl = () => (dispatch) => {
    dispatch(clearPaymentOrder());
}

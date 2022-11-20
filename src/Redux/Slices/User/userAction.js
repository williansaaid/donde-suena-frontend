import axios from "axios";

import {
    paymentOrder,
    clearPaymentOrder
} from "./userSlice";

export const ticketPurchase = (values) => (dispatch) => {
    axios
        .post("http://localhost:3001/payment/crear-orden", values)
        .then((res) => dispatch(paymentOrder(res.data)))
        .catch((e) => console.log(e))
};

export const clearUrl = () => (dispatch) => {
    dispatch(clearPaymentOrder());
}

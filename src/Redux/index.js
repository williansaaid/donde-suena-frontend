import { configureStore } from "@reduxjs/toolkit";
import events from "../Redux/eventSlice";
import detail from "../Redux/eventSlice";
import modal from "../Redux/eventSlice";
export default configureStore({
    reducer: {
        events: events,
        detail: detail,
        modal: modal,
    },
});

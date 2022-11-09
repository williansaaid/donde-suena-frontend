import { configureStore } from "@reduxjs/toolkit";
import events from "../Redux/eventSlice"
export default configureStore({
    reducer: {
      events: events,
    }
});
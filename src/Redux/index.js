import { configureStore } from "@reduxjs/toolkit";
import events from "../Redux/eventSlice";
import detail from "../Redux/eventSlice";
import modal from "../Redux/eventSlice";
import places from "../Redux/Slices/Places/placesSlice";
import favorites from "../Redux/Slices/Favorites/favoritesSlice";
import genres from "../Redux/Slices/Genres/genresSlice";
import purchased from "../Redux/Slices/Purchased/purchasedSlice";

export default configureStore({
    reducer: {
        events: events,
        detail: detail,
        modal: modal,
        places: places,
        favorites: favorites,
        genres: genres,
        purchased: purchased
    }
});

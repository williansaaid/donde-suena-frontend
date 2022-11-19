import { configureStore } from "@reduxjs/toolkit";
import events from "../Redux/Slices/Event/eventSlice";
import detail from "../Redux/Slices/Event/eventSlice";
import modal from "../Redux/Slices/Event/eventSlice";
import places from "../Redux/Slices/Places/placesSlice";
import favorites from "../Redux/Slices/Favorites/favoritesSlice";
import genres from "../Redux/Slices/Genres/genresSlice";
import purchased from "../Redux/Slices/Purchased/purchasedSlice";
import user from "../Redux/Slices/User/userSlice";
import artist from "../Redux/Slices/Artist/artistSlice";
import filter from "../Redux/Slices/Filter/filterSlice";
import tickets from "../Redux/Slices/User/userSlice"

export default configureStore({
    reducer: {
        user: user,
        events: events,
        detail: detail,
        modal: modal,
        places: places,
        favorites: favorites,
        genres: genres,
        purchased: purchased,
        artist: artist,
        filter: filter,
        tickets: tickets,
    }
});

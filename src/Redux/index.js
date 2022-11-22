import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import events from "../Redux/Slices/Event/eventSlice";
import detail from "../Redux/Slices/Event/eventSlice";
import login from "../Redux/Slices/Modals/modalSlice";
import places from "../Redux/Slices/Places/placesSlice";
import favorites from "../Redux/Slices/Favorites/favoritesSlice";
import genres from "../Redux/Slices/Genres/genresSlice";
import purchased from "../Redux/Slices/Purchased/purchasedSlice";
import user from "./Slices/User/userSlice";
import artist from "./Slices/Artist/artistSlice";
import filter from "./Slices/Filter/filterSlice";
import map from "./Slices/Map/mapSlice";
import userPublic from "./Slices/User/userSlice";
import posts from "./Slices/Post/postSlice";
import comments from "./Slices/Comments/commentsSlices";
import artistId from "./Slices/Artist/artistSlice"
import  addFav from "./Slices/Favorites/favoritesSlice";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["userState"],
};

const rootReducer = combineReducers({
    userState: user,
    detailState: detail,
    modalState: login,
    eventsState: events,
    placesState: places,
    favoritesState: favorites,
    genresState: genres,
    purchasedState: purchased,
    artistState: artist,
    filterState: filter,
    mapState: map,
    userStateTickets: user,
    posts: posts,
    userPublicState: userPublic,
    comments: comments,
    artistId: artistId,
    addFav: addFav,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
    reducer: persistedReducer,

    // events: events,
    // detail: detail,
    // modal: modal,
    // places: places,
    // favorites: favorites,
    // genres: genres,
    // purchased: purchased,
    // user: user,
    middleware: [thunk],
});

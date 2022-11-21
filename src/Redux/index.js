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
import session from "./Slices/Session/sessionSlice";
import artist from "./Slices/Artist/artistSlice";
import filter from "./Slices/Filter/filterSlice";
import map from "./Slices/Map/mapSlice";
<<<<<<< HEAD
import user from "./Slices/User/userSlice";
import loading from "./Slices/Loading/LoadingSlices";
=======
import userPublic from "./Slices/User/userSlice";
>>>>>>> 350fa7ecdf550bb4d970d3fcab5fe0e182945eda

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["userState"],
};

const rootReducer = combineReducers({
    loadingState: loading,
    userState: user,
    sessionState: session,
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
    userPublicState: userPublic
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});

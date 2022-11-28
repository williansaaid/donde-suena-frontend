import { setTogleUserState, setTogleArtistState } from "./ProfileSlice";

export const togleUserState = (data) => (dispatch) => {
    dispatch(setTogleUserState(data));
    window.scroll({ top: 1000 });
};
export const togleAtristState = (data) => (dispatch) => {
    dispatch(setTogleArtistState(data));
};

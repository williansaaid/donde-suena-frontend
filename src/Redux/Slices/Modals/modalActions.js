import { loginModal } from "./modalSlice";

export const setLoginModal = () => (dispatch) => {
    dispatch(loginModal());
};

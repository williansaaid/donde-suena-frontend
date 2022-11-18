import axios from "axios";

import { logUser } from "./userSlice";

export const submitUserForm = (values) => (dispatch) => {
    axios
        .post("http://localhost:3001/auth/registerUser", values)
        .then((res) => {
            console.log(res);
            dispatch(logUser(res));
            alert("Usuario Creado Exitosamente");
        })
        .catch((e) => console.log(e));
};

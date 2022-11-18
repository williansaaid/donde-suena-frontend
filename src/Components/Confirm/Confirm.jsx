import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { confirmateToken } from "../../Redux/Slices/Session/sessionActions";

const Confirm = () => {
    const { token } = useParams();
    const dispatch = useDispatch();
    const alert = () => {
        Swal.fire({
            title: "Error!",
            text: "Do you want to continue",
            icon: "error",
            confirmButtonText: "Cool",
        });
    };
    useEffect(() => {
        alert();
        dispatch(confirmateToken(token));
    }, [token, dispatch]);

    return <div>{}</div>;
};

export default Confirm;

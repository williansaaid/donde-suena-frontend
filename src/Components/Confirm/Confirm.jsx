import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { confirmateToken } from "../../Redux/Slices/Session/sessionActions";
// import guitarrist from "../../assets/img/musico.png";

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

    return (
        <div className="flex flex-col items-center justify-center py-20">
            <div>
                <h3 className="text-3xl font-semibold text-red-700 capitalize mb-10 lg:text-4l">
                    Redireccionando...
                </h3>
            </div>

            {/* <div>
                {
                    <img
                        className="h-[600px]"
                        src={guitarrist}
                        alt="guitarrist "
                    ></img>
                }
            </div> */}
        </div>
    );
};

export default Confirm;

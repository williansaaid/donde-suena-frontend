import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useState, useEffect } from "react";

// import { useDispatch, useSelector } from "react-redux";
import ReactModal from "react-modal";
const Login = () => {
    // const dispatch = useDispatch();
    // const googleToken = useSelector((state) => state.googleToken);
    const [modal, setModal] = useState(true);
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const handleSetModal = () => {
        setModal(!modal);
    };
    function handleCredentialResponse(response) {
        const body = { id_token: response.credential };
        fetch("http://localhost:3001/auth/google", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                localStorage.setItem("email", data.user.email);
                window.location.reload();
            })
            .catch((err) => console.log(err));
    }

    const handleSignIN = () => {
        const google = window.google;
        const client_id =
            "683964699898-crca6epeuihk7scmvh5in9fm6k9dlk17.apps.googleusercontent.com";
        const callback = handleCredentialResponse;
        const auto_select = true;
        google?.accounts.id.initialize({
            client_id,
            callback,
            auto_select,
        });

        google?.accounts.id.prompt((notification) => {
            if (notification.isNotDisplayed()) {
                console.log("Error: Google Sign-In not displayed");
            } else if (notification.isSkippedMoment()) {
                console.log("El usuario ha decidido no iniciar sesión");
            }
        });
    };

    const handleSignOut = () => {
        const google = window.google;
        google.accounts.id.disableAutoSelect();

        google.accounts.id.revoke(localStorage.getItem("email"), (done) => {
            localStorage.removeItem("email");
            window.location.reload();
        });
    };

    return (
        <ReactModal isOpen={modal} ariaHideApp={false}>
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-2xl bg-customGray p-4 flex flex-col justify-center items-center gap-2 my-10 rounded mx-auto"
            >
                <button type="button" onClick={handleSetModal}>
                    x
                </button>

                <label
                    htmlFor="user"
                    className="block tracking-wide text-white text-s font-bold mb-2"
                >
                    Nombre de usuario
                </label>
                <div className="w-full px-3">
                    <input
                        type="text"
                        name="user"
                        placeholder="usuario *"
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                </div>
                <label
                    htmlFor="password"
                    className="block tracking-wide text-white text-s font-bold mb-2"
                >
                    Contraseña
                </label>
                <div className="w-full px-3">
                    <input
                        type="text"
                        name="password"
                        placeholder="contraseña *"
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                </div>
                <div className="w-full md:w-3/3 px-3  font-bold text-m text-gray-400 hover:text-gray-500 cursor-pointer ">
                    <span className="inline-block align-baseline font-bold text-xs text-gray-400 hover:text-customRed">
                        Olvidaste tu contraseña?
                    </span>
                </div>
                <button
                    type="submit"
                    className="bg-customRed hover:bg-customGray text-white font-bold py-2 px-4 rounded border-2 border-transparent focus:outline-none focus:shadow-outline hover:text-customRed hover:border-customRed"
                >
                    Iniciar Sesión
                </button>
                <div className="flex flex-wrap justify-between w-full px-3">
                    <div>
                        <span className="gap-2 font-bold text-m text-gray-400 hover:text-gray-500 cursor-pointer">
                            Aun no estas registrado?
                        </span>
                    </div>
                    <div
                        onClick={handleSignIN}
                        className="flex flex-wrap gap-2 font-bold text-m text-gray-400 hover:text-gray-500 cursor-pointer"
                    >
                        <span>Iniciar sesion con Google</span>

                        <FcGoogle size={"1.5em"} />
                    </div>
                </div>

                <div
                    id="g_id_onload"
                    data-client_id="683964699898-crca6epeuihk7scmvh5in9fm6k9dlk17.apps.googleusercontent.com"
                    data-auto_prompt="false"
                ></div>
                <div
                    className="g_id_signin"
                    data-type="standard"
                    data-size="large"
                    data-theme="outline"
                    data-text="sign_in_with"
                    data-shape="rectangular"
                    data-logo_alignment="left"
                ></div>

                <button id="google_signout" onClick={handleSignOut}>
                    Signout
                </button>
            </form>
        </ReactModal>
    );
};

export default Login;

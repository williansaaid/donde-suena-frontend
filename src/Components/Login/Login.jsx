import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { setModal } from "../../Redux/eventActions.js";
import { useNavigate } from "react-router-dom";
import "./login.css";
import * as Yup from "yup";

// import { useDispatch, useSelector } from "react-redux";
import ReactModal from "react-modal";
const Login = () => {
    const dispatch = useDispatch();
    // const googleToken = useSelector((state) => state.googleToken);
    const navigate = useNavigate();
    const { modal } = useSelector((state) => state.modal);
    const [loginType, setLoginType] = useState(false);

    const handleSetModal = () => {
        dispatch(setModal());
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

    // const handleSignOut = () => {
    //     const google = window.google;
    //     google.accounts.id.disableAutoSelect();

    //     google.accounts.id.revoke(localStorage.getItem("email"), (done) => {
    //         localStorage.removeItem("email");
    //         window.location.reload();
    //     });
    // };

    return (
        <ReactModal
            isOpen={modal}
            ariaHideApp={false}
            onRequestClose={handleSetModal}
            className="modal"
        >
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                onSubmit={(values, { setSubmitting }) => {
                    // dispatch(submitUserForm(values));
                    setSubmitting(false);
                }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email("Direccion de mail invalida")
                        .required("Direccion de mail requerida. *"),
                    password: Yup.string()
                        .min(
                            6,
                            "La contraseña debe contener al menos 6 caracteres"
                        )
                        .required("Contraseña requerida. *"),
                })}
            >
                {({ isSubmitting, errors }) => (
                    <Form className="w-full mx-auto max-w-2xl bg-customGray p-4 flex flex-col justify-center items-center gap-2 my-8 rounded">
                        <button type="button" onClick={handleSetModal}>
                            x
                        </button>
                        <label
                            htmlFor="user"
                            className="block tracking-wide text-white text-s font-bold mb-2"
                        >
                            Email
                        </label>
                        <div className="w-full px-3">
                            <Field
                                type="text"
                                name="email"
                                placeholder="usuario *"
                                className={
                                    errors.email
                                        ? "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        : "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                }
                            />
                            <ErrorMessage name="email">
                                {(msg) => (
                                    <div className="text-customRed italic pl-1 text-xs font-semibold">
                                        {msg}
                                    </div>
                                )}
                            </ErrorMessage>
                        </div>
                        <label
                            htmlFor="password"
                            className="block tracking-wide text-white text-s font-bold mb-2"
                        >
                            Contraseña
                        </label>
                        <div className="w-full px-3">
                            <Field
                                type="text"
                                name="password"
                                placeholder="contraseña *"
                                className={
                                    errors.password
                                        ? "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        : "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                }
                            />
                            <ErrorMessage name="password">
                                {(msg) => (
                                    <div className="text-customRed italic pl-1 text-xs font-semibold">
                                        {msg}
                                    </div>
                                )}
                            </ErrorMessage>
                        </div>
                        <div className="w-full md:w-3/3 px-3  font-bold text-m text-gray-400 hover:text-gray-500 cursor-pointer ">
                            <span className="inline-block align-baseline font-bold text-xs text-gray-400 hover:text-customRed">
                                Olvidaste tu contraseña?
                            </span>
                        </div>
                        <button
                            type="submit"
                            className="bg-customRed hover:bg-customGray text-white font-bold py-2 px-4 rounded border-2 border-transparent focus:outline-none focus:shadow-outline hover:text-customRed hover:border-customRed"
                            disabled={isSubmitting}
                        >
                            Iniciar Sesión
                        </button>
                        <div className="flex flex-wrap justify-between w-full px-3">
                            <div onClick={() => setLoginType(!loginType)}>
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
                        {loginType && (
                            <div className="w-full mx-auto max-w-2xl bg-customGray p-4 flex flex-col justify-center items-center gap-2 my-8 rounded">
                                <h3 className="block tracking-wide text-white text-s font-bold mb-2">
                                    Soy:{" "}
                                </h3>
                                <div>
                                    <button
                                        onClick={() => {
                                            navigate("/register/artist");
                                            handleSetModal();
                                        }}
                                        className="bg-customRed hover:bg-customGray text-white font-bold mx-3 py-2 px-4 rounded border-2 border-transparent focus:outline-none focus:shadow-outline hover:text-customRed hover:border-customRed"
                                    >
                                        Artista
                                    </button>
                                    <button
                                        onClick={() => {
                                            navigate("/register/user");
                                            handleSetModal();
                                        }}
                                        className="bg-customRed hover:bg-customGray text-white font-bold mx-3 py-2 px-4 rounded border-2 border-transparent focus:outline-none focus:shadow-outline hover:text-customRed hover:border-customRed"
                                    >
                                        Publico
                                    </button>
                                </div>
                            </div>
                        )}

                        {/*         
                <button id="google_signout" onClick={handleSignOut}>
                    Signout
                </button> */}
                    </Form>
                )}
            </Formik>
        </ReactModal>
    );
};

export default Login;

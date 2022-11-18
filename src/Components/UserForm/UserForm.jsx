import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { submitUserForm } from "../../Redux/Slices/Session/sessionActions";
import { validationSchema } from "../../schemas/userRegister";
import {  useNavigate } from "react-router-dom";

const UserForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function navegar() {
        navigate("/");
    }
    return (
        <div className="h-full w-full flex flex-col items-center justify-center bg-customBlack font-source-sans">
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    dni: "",
                    password: "",
                    password2: "",
                    phone: "",
                    birthday: "",
                    acceptedTerms: "",
                }}
                onSubmit={(values, { setSubmitting }) => {
                    dispatch(submitUserForm(values));
                    setSubmitting(false);
                    setTimeout(navegar, 5000);
                }}
                validationSchema={validationSchema}
            >
                {({ isSubmitting, errors, touched }) => (
                    <Form className="w-full max-w-2xl bg-customGray p-4 flex flex-col justify-center items-center gap-2 my-8 rounded">
                        <div className="flex flex-wrap w-full">
                            <div className="w-full md:w-1/2 px-3">
                                <label
                                    htmlFor="firstName"
                                    className="block tracking-wide text-white text-s font-bold mb-2"
                                >
                                    Nombre
                                </label>
                                <Field
                                    type="text"
                                    name="firstName"
                                    placeholder="Nombre *"
                                    className={
                                        errors.firstName
                                            ? "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            : "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    }
                                />
                                <ErrorMessage name="firstName">
                                    {(msg) => (
                                        <div className="text-customRed italic pl-1 text-xs font-semibold">
                                            {msg}
                                        </div>
                                    )}
                                </ErrorMessage>
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label
                                    htmlFor="lastName"
                                    className="block tracking-wide text-white text-s font-bold mb-2"
                                >
                                    Apellido
                                </label>
                                <Field
                                    type="text"
                                    name="lastName"
                                    placeholder="Apellido *"
                                    className={
                                        errors.lastName
                                            ? "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            : "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    }
                                />
                                <ErrorMessage name="lastName">
                                    {(msg) => (
                                        <div className="text-customRed italic pl-1 text-xs font-semibold">
                                            {msg}
                                        </div>
                                    )}
                                </ErrorMessage>
                            </div>
                        </div>
                        {/* <div className="flex flex-wrap w-full"> */}
                        <div className="w-full  px-3">
                            <label
                                htmlFor="email"
                                className="block tracking-wide text-white text-s font-bold mb-2"
                            >
                                Email
                            </label>
                            <Field
                                type="email"
                                name="email"
                                placeholder="Email *"
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

                        <div className="w-full px-3">
                            <label
                                htmlFor="dni"
                                className="block tracking-wide text-white text-s font-bold mb-2"
                            >
                                Documento
                            </label>
                            <Field
                                type="text"
                                name="dni"
                                placeholder="Número de documento *"
                                className={
                                    errors.dni
                                        ? "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        : "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                }
                            />
                            <ErrorMessage name="dni">
                                {(msg) => (
                                    <div className="text-customRed italic pl-1 text-xs font-semibold">
                                        {msg}
                                    </div>
                                )}
                            </ErrorMessage>
                        </div>
                        {/* </div> */}
                        <div className="flex flex-wrap w-full">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label
                                    htmlFor="password"
                                    className="block tracking-wide text-white text-s font-bold mb-2"
                                >
                                    Contraseña
                                </label>
                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="Clave *"
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
                            <div className="w-full md:w-1/2 px-3">
                                <label
                                    htmlFor="password2"
                                    className="block tracking-wide text-white text-s font-bold mb-2"
                                >
                                    Confirmar Contraseña
                                </label>
                                <Field
                                    type="password"
                                    name="password2"
                                    placeholder="Confirmar Clave *"
                                    className={
                                        errors.password2
                                            ? "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            : "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    }
                                />
                                <ErrorMessage name="password2">
                                    {(msg) => (
                                        <div className="text-customRed italic pl-1 text-xs font-semibold">
                                            {msg}
                                        </div>
                                    )}
                                </ErrorMessage>
                            </div>
                        </div>
                        <div className="flex flex-wrap w-full">
                            <div className="w-full md:w-1/2 px-3">
                                <label
                                    htmlFor="phone"
                                    className="block tracking-wide text-white text-s font-bold mb-2"
                                >
                                    Número Telefónico
                                </label>
                                <Field
                                    type="text"
                                    name="phone"
                                    placeholder="Teléfono *"
                                    className={
                                        errors.phone
                                            ? "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            : "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    }
                                />
                                <ErrorMessage name="phone">
                                    {(msg) => (
                                        <div className="text-customRed italic pl-1 text-xs font-semibold">
                                            {msg}
                                        </div>
                                    )}
                                </ErrorMessage>
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label
                                    htmlFor="name"
                                    className="block tracking-wide text-white text-s font-bold mb-2"
                                >
                                    Fecha de nacimiento
                                </label>
                                <Field
                                    type="date"
                                    name="birthday"
                                    className={
                                        errors.password
                                            ? "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            : "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    }
                                />
                                <ErrorMessage name="birthday">
                                    {(msg) => (
                                        <div className="text-customRed italic pl-1 text-xs font-semibold">
                                            {msg}
                                        </div>
                                    )}
                                </ErrorMessage>
                            </div>
                        </div>
                        <div className="flex flex-row-reverse items-center justify-center gap-2 mt-3">
                            <label
                                htmlFor="acceptedTerms"
                                className="block tracking-wide text-white text-s font-bold"
                            >
                                Acepto los{" "}
                                <a
                                    href="#"
                                    className="inline-block align-baseline font-bold text-m text-gray-400 hover:text-customRed"
                                >
                                    Terminos y Condiciones
                                </a>
                            </label>

                            <Field
                                type="checkbox"
                                name="acceptedTerms"
                                className="leading-tight"
                            />
                            <ErrorMessage name="acceptedTerms">
                                {(msg) => (
                                    <div className="text-customRed italic pl-1 text-xs font-semibold">
                                        {msg}
                                    </div>
                                )}
                            </ErrorMessage>
                        </div>
                        <div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-customRed hover:bg-customGray text-white font-bold py-2 px-8 rounded border-2 border-transparent focus:outline-none focus:shadow-outline hover:text-customRed hover:border-customRed mt-3 mb-3"
                            >
                                Enviar
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default UserForm;

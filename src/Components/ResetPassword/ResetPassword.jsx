import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../Redux/Slices/Session/sessionActions";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
    const dispatch = useDispatch();
    const { token } = useParams();
    return (
        <div className="h-full w-full flex flex-col items-center justify-center font-source-sans">
            <Formik
                initialValues={{ password: "", confirmPassword: "" }}
                validate={(values) => {
                    const errors = {};
                    if (!values.password) {
                        errors.password = "Required";
                    } else if (values.password.length < 6) {
                        errors.password =
                            "Password must be at least 6 characters";
                    }
                    if (!values.confirmPassword) {
                        errors.confirmPassword = "Required";
                    } else if (values.confirmPassword !== values.password) {
                        errors.confirmPassword = "Passwords must match";
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    dispatch(resetPassword(values, token));
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting, errors }) => (
                    <Form className="w-full max-w-2xl bg-customGray p-4 flex flex-col justify-center items-center gap-2 my-8 rounded">
                        <h4 className="text-2xl font-bold text-customYellow">
                            Cambia tu contraseña
                        </h4>
                        <div className="flex flex-wrap w-full">
                            <div className="w-full md:w-1/2 px-3">
                                <label
                                    htmlFor="password"
                                    className="block tracking-wide text-white text-s font-bold mb-2"
                                >
                                    Nueva contraseña
                                </label>
                                <Field
                                    type="password"
                                    name="password"
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
                                    htmlFor="confirmPassword"
                                    className="block tracking-wide text-white text-s font-bold mb-2"
                                >
                                    Confirma tu contraseña
                                </label>
                                <Field
                                    type="password"
                                    name="confirmPassword"
                                    className={
                                        errors.confirmPassword
                                            ? "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            : "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    }
                                />

                                <ErrorMessage name="confirmPassword">
                                    {(msg) => (
                                        <div className="text-customRed italic pl-1 text-xs font-semibold">
                                            {msg}
                                        </div>
                                    )}
                                </ErrorMessage>
                            </div>

                            <button
                                className="bg-customRed hover:bg-customGray text-white font-bold py-2 px-8 rounded border-2 border-transparent focus:outline-none focus:shadow-outline hover:text-customRed hover:border-customRed mt-3 mb-3"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                Cambiar
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ResetPassword;

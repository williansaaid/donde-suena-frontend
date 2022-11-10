import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../../schemas/artistRegister";
import Navbar from "../Navbar/Navbar"

const onSubmit = () => {
    console.log("Submitted");
}

const ArtistForm = () => {
    const { values,
            errors,
            handleBlur,
            handleChange,
            handleSubmit } = useFormik({
        initialValues: {
            name: "",
            surname: "",
            artisticName: "",
            email: "",
            password: "",
            confirmPassword: "",
            genre: [],
            description: "",
            instagram: "",
            twitter: "",
            spotify: "",
            phoneNumber: "",
            profileImg: "",
            agreeTerms: false
        },
        validationSchema: basicSchema,
        onSubmit,
    })

    return (
        <div className="h-full w-full flex flex-col items-center justify-center bg-customBlack font-source-sans">
            <Navbar/>
            <form onSubmit={handleSubmit} autoComplete="off" className="w-full max-w-2xl bg-customGray p-4 flex flex-col justify-center items-center gap-2 my-8 rounded">
                <div className="flex flex-wrap -mx-3 w-full">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label htmlFor="name"
                            className="block tracking-wide text-white text-s font-bold mb-2"
                        >Nombre</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Luis"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.name ?
                                "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                : "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                }
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label htmlFor="surname"
                            className="block tracking-wide text-white text-s font-bold mb-2"
                        >Apellido</label>
                        <input
                            id="surname"
                            type="text"
                            placeholder="Mendoza"
                            value={values.surname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.surname ?
                                "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                : "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                }
                        />
                    </div>
                </div>
                <div className="w-full px-3">
                    <label htmlFor="artisticName"
                        className="block tracking-wide text-white text-s font-bold mb-2"
                    >Nombre Artístico</label>
                    <input
                        id="artisticName"
                        type="text"
                        placeholder="Ej: Luime"
                        value={values.artisticName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.artisticName ?
                                "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                : "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                }
                    />
                </div>
                <div className="w-full px-3">
                    <label htmlFor="email"
                        className="block tracking-wide text-white text-s font-bold mb-2"
                    >Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="luimecontacto@ejemplo.com"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.email ?
                                "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                : "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                }
                    />
                </div>
                <div className="flex flex-wrap w-full">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label htmlFor="password"
                            className="block tracking-wide text-white text-s font-bold mb-2"
                        >Contraseña</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="********"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.password ?
                                    "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    : "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    }
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label htmlFor="confirmPassword"
                            className="block tracking-wide text-white text-s font-bold mb-2"
                        >Confirmar Contraseña</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            placeholder="********"
                            value={values.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.confirmPassword ?
                                    "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    : "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    }
                        />
                    </div>
                </div>
                <div className="w-full px-3">
                    <label htmlFor="description"
                        className="block tracking-wide text-white text-s font-bold mb-2"
                    >Descripción</label>
                    <textarea
                        id="description"
                        type="textarea"
                        rows="2"
                        placeholder={`Más sobre ${values.artisticName}...`}
                        value={values.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.description ?
                                "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                : "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 scroll-y"
                                }
                    />
                </div>
                <div className="px-3">
                    <label htmlFor="genre"
                        className="block tracking-wide text-white text-s font-bold mb-2"
                    >Género</label>
                </div>
                <div className="w-full px-3">
                    <p
                        className="block tracking-wide text-white text-lg font-bold mb-2 text-center"
                    >Sitios Web</p>
                    <div>
                        <label htmlFor="instagram"
                            className="block tracking-wide text-white text-s font-bold mb-2"
                        >Instagram</label>
                        <input
                            id="instagram"
                            type="url"
                            placeholder="https://instagram.com/username"
                            value={values.instagram}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.instagram ?
                                "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                : "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                }
                        />
                    </div>
                    <div>
                        <label htmlFor="twitter"
                            className="block tracking-wide text-white text-s font-bold mb-2"
                        >Twitter</label>
                        <input
                            id="twitter"
                            type="url"
                            placeholder="https://twitter.com/username"
                            value={values.twitter}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.twitter ?
                                "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                : "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                }
                        />
                    </div>
                    <div>
                        <label htmlFor="spotify"
                            className="block tracking-wide text-white text-s font-bold mb-2"
                        >Spotify</label>
                        <input
                            id="spotify"
                            type="url"
                            placeholder="https://open.spotify.com/artist/yourprofile"
                            value={values.spotify}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.spotify ?
                                "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                : "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                }
                        />
                    </div>
                </div>
                <div className="flex flex-wrap w-full">
                    <div className="w-full md:w-1/2 mb-6 md:mb-0 px-3">
                        <label htmlFor="phoneNumber"
                            className="block tracking-wide text-white text-s font-bold mb-2"
                        >Número Telefónico</label>
                        <input
                            id="phoneNumber"
                            type="text"
                            placeholder="1234567890"
                            value={values.phoneNumber}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.phoneNumber ?
                                    "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    : "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    }
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label htmlFor="profileImg"
                            className="block tracking-wide text-white text-s font-bold mb-2"
                        >Foto de Perfil</label>
                        <input
                            id="profileImg"
                            type="file"
                            placeholder="Sube tu imagen aquí"
                            value={values.profileImg}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-customRed file:text-white hover:file:bg-gray-400"
                        />
                    </div>
                </div>
                <div className="flex flex-row-reverse items-center justify-center gap-2">
                    <label htmlFor="agreeTerms"
                        className="block tracking-wide text-white text-s font-bold"
                    >
                        Acepto los <a href="#"
                            className="inline-block align-baseline font-bold text-m text-gray-400 hover:text-customRed"
                        >Terminos y Condiciones</a>
                    </label>
                    <input
                        id="agreeTerms"
                        type="checkbox"
                        value={values.agreeTerms}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="leading-tight"
                    />
                </div>
                <div>
                    <button type="submit"
                        className="bg-customRed hover:bg-customGray text-white font-bold py-2 px-4 rounded border-2 border-transparent focus:outline-none focus:shadow-outline hover:text-customRed hover:border-customRed"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
};

export default ArtistForm;
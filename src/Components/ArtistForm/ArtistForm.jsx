import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { basicSchema } from "../../schemas/artistRegister";
import { submitArtistForm } from "../../Redux/eventActions";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const genres = [
    "Clásica",
    "Blues",
    "Jazz",
    "Soul",
    "R&B",
    "Rock",
    "Folk",
    "Metal",
    "Disco",
    "Pop",
    "Hip-Hop",
    "Funk",
    "House",
    "Techno",
    "Salsa",
    "Bachata",
    "Cumbia",
    "Reggae",
    "Bossa Nova",
    "Merengue",
    "Urbano",
];

const ArtistForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState("");
    const [success, setSuccess] = useState(false);
    function navegar() {
        navigate("/");
    }

    const onSubmit = (values, actions) => {
        const formValues = {
            ...values,
            image: image,
        };
        try {
            dispatch(submitArtistForm(formValues));
            actions.resetForm();
            setTimeout(navegar, 5000);
        } catch (error) {
            console.log(error);
        }
    };
    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "Donde-Suena-Artists");
        setLoading(true);
        const res = await axios.post(
            "https://api.cloudinary.com/v1_1/ds41xxspf/image/upload",
            data
        );
        res.data.secure_url ? setSuccess(true) : setSuccess(false);
        setImage(res.data.secure_url);
        setLoading(false);
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: {
                firstName: "",
                lastName: "",
                nickname: "",
                email: "",
                password: "",
                password2: "",
                genres: "",
                description: "",
                instagram: "",
                twitter: "",
                spotify: "",
                phone: "",
                agreeTerms: false,
            },
            validationSchema: basicSchema,
            onSubmit,
        });

    return (
        <div className="h-full w-full flex flex-col items-center justify-center bg-customBlack font-source-sans">
            <form
                onSubmit={handleSubmit}
                autoComplete="on"
                className="w-full max-w-2xl bg-customGray p-4 flex flex-col justify-center items-center gap-4 my-8 rounded"
            >
                <div className="flex flex-wrap -mx-3 w-full">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                            htmlFor="firstName"
                            className="block tracking-wide text-white text-s font-bold mb-2"
                        >
                            Nombre
                            {errors.firstName && touched.firstName ? (
                                <span className="text-customRed italic pl-1 text-xs font-semibold">
                                    {errors.firstName}
                                </span>
                            ) : null}
                        </label>
                        <input
                            id="firstName"
                            type="text"
                            placeholder="Luis"
                            value={values.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                                errors.firstName && touched.firstName
                                    ? "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    : "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            }
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label
                            htmlFor="lastName"
                            className="block tracking-wide text-white text-s font-bold mb-2"
                        >
                            Apellido
                            {errors.lastName && touched.lastName ? (
                                <span className="text-customRed italic pl-1 text-xs font-semibold">
                                    {errors.lastName}
                                </span>
                            ) : null}
                        </label>
                        <input
                            id="lastName"
                            type="text"
                            placeholder="Mendoza"
                            value={values.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                                errors.lastName && touched.lastName
                                    ? "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    : "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            }
                        />
                    </div>
                </div>
                <div className="w-full px-3">
                    <label
                        htmlFor="nickname"
                        className="block tracking-wide text-white text-s font-bold mb-2"
                    >
                        Nombre Artístico
                        {errors.nickname && touched.nickname ? (
                            <span className="text-customRed italic pl-1 text-xs font-semibold">
                                {errors.nickname}
                            </span>
                        ) : null}
                    </label>
                    <input
                        id="nickname"
                        type="text"
                        placeholder="Ej: Luime"
                        value={values.nickname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                            errors.nickname && touched.nickname
                                ? "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                : "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        }
                    />
                </div>
                <div className="w-full px-3">
                    <label
                        htmlFor="email"
                        className="block tracking-wide text-white text-s font-bold mb-2"
                    >
                        Email
                        {errors.email && touched.email ? (
                            <span className="text-customRed italic pl-1 text-xs font-semibold">
                                {errors.email}
                            </span>
                        ) : null}
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="luimecontacto@ejemplo.com"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                            errors.email && touched.email
                                ? "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                : "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        }
                    />
                </div>
                <div className="flex flex-wrap w-full">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                            htmlFor="password"
                            className="block tracking-wide text-white text-s font-bold mb-2"
                        >
                            Contraseña
                            {errors.password && touched.password ? (
                                <span className="text-customRed italic pl-1 text-xs font-semibold">
                                    {errors.password}
                                </span>
                            ) : null}
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="********"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                                errors.password && touched.password
                                    ? "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    : "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            }
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label
                            htmlFor="password2"
                            className="block tracking-wide text-white text-s font-bold mb-2"
                        >
                            Confirmar Contraseña
                            {errors.password2 && touched.password2 ? (
                                <span className="text-customRed italic pl-1 text-xs font-semibold">
                                    {errors.password2}
                                </span>
                            ) : null}
                        </label>
                        <input
                            id="password2"
                            type="password"
                            placeholder="********"
                            value={values.password2}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                                errors.password2 && touched.password2
                                    ? "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    : "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            }
                        />
                    </div>
                </div>
                <div className="w-full px-3">
                    <label
                        htmlFor="description"
                        className="block tracking-wide text-white text-s font-bold mb-2"
                    >
                        Descripción
                        {errors.description && touched.description ? (
                            <span className="text-customRed italic pl-1 text-xs font-semibold">
                                {errors.description}
                            </span>
                        ) : null}
                    </label>
                    <textarea
                        id="description"
                        type="textarea"
                        rows="2"
                        placeholder={`Más sobre ${values.nickname}...`}
                        value={values.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                            errors.description && touched.description
                                ? "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                : "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 scroll-y"
                        }
                    />
                </div>
                <div className="px-3 flex flex-col items-center justify-center">
                    <label
                        htmlFor="genres"
                        className="block tracking-wide text-white text-s font-bold mb-2"
                    >
                        Género
                        {errors.genres && touched.genres ? (
                            <span className="text-customRed italic pl-1 text-xs font-semibold mb-2">
                                {errors.genres}
                            </span>
                        ) : null}
                    </label>
                    <select
                        name="genres"
                        value={values.genres}
                        onChange={handleChange}
                        className={
                            errors.genres && touched.genres
                                ? "rounded pr-8 py-2 focus:outline-none bg-red-100 focus:bg-red-100"
                                : "rounded pr-8 py-2 focus:outline-none bg-gray-200 focus:bg-white"
                        }
                    >
                        <option value="" disabled>
                            Géneros
                        </option>
                        {genres.map((genre, key) => {
                            return (
                                <option key={key} value={genre}>
                                    {genre}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="w-full px-3 mb-3 flex flex-col gap-2">
                    <p className="block tracking-wide text-white text-lg font-bold text-center">
                        Sitios Web
                    </p>
                    <div>
                        <label
                            htmlFor="instagram"
                            className="block tracking-wide text-white text-s font-bold mb-2"
                        >
                            Instagram
                            {errors.instagram && touched.instagram ? (
                                <span className="text-customRed italic pl-1 text-xs font-semibold">
                                    {errors.instagram}
                                </span>
                            ) : null}
                        </label>
                        <input
                            id="instagram"
                            type="url"
                            placeholder="https://instagram.com/username"
                            value={values.instagram}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                                errors.instagram && touched.instagram
                                    ? "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    : "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            }
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="twitter"
                            className="block tracking-wide text-white text-s font-bold mb-2"
                        >
                            Twitter
                            {errors.twitter && touched.twitter ? (
                                <span className="text-customRed italic pl-1 text-xs font-semibold">
                                    {errors.twitter}
                                </span>
                            ) : null}
                        </label>
                        <input
                            id="twitter"
                            type="url"
                            placeholder="https://twitter.com/username"
                            value={values.twitter}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                                errors.twitter && touched.twitter
                                    ? "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    : "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            }
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="spotify"
                            className="block tracking-wide text-white text-s font-bold mb-2"
                        >
                            Spotify
                            {errors.spotify && touched.spotify ? (
                                <span className="text-customRed italic pl-1 text-xs font-semibold">
                                    {errors.spotify}
                                </span>
                            ) : null}
                        </label>
                        <input
                            id="spotify"
                            type="url"
                            placeholder="https://open.spotify.com/artist/yourprofile"
                            value={values.spotify}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                                errors.spotify && touched.spotify
                                    ? "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    : "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            }
                        />
                    </div>
                </div>
                <div className="flex flex-wrap w-full">
                    <div className="w-full md:w-1/2 mb-6 md:mb-0 px-3">
                        <label
                            htmlFor="phone"
                            className="flex items-center tracking-wide text-white text-s font-bold mb-2"
                        >
                            Número Telefónico
                            {errors.phone && touched.phone ? (
                                <span className="text-customRed italic pl-1 text-xs font-semibold">
                                    {errors.phone}
                                </span>
                            ) : null}
                        </label>
                        <input
                            id="phone"
                            type="text"
                            placeholder="1234567890"
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                                errors.phone && touched.phone
                                    ? "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    : "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            }
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label
                            htmlFor="image"
                            className="flex items-center tracking-wide text-white text-s font-bold mb-2"
                        >
                            Foto de Perfil
                            {loading ? (
                                <span className="text-customRed italic pl-1 text-xs font-semibold">
                                    (Subiendo Imágen...)
                                </span>
                            ) : success ? (
                                <span className="text-green-500 italic pl-1 text-xs font-semibold">
                                    (Imágen subida con éxito)
                                </span>
                            ) : null}
                        </label>
                        <input
                            id="image"
                            type="file"
                            placeholder="Sube tu imagen aquí"
                            accept="image/png, image/jpeg, image/jpg"
                            onChange={uploadImage}
                            onBlur={handleBlur}
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-customRed file:text-white hover:file:bg-gray-400"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex flex-row-reverse items-center justify-center gap-2">
                        <label
                            htmlFor="agreeTerms"
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
                        <input
                            id="agreeTerms"
                            type="checkbox"
                            checked={values.agreeTerms}
                            value={values.agreeTerms}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="leading-tight"
                        />
                    </div>
                    {errors.agreeTerms && touched.agreeTerms ? (
                        <span className="text-customRed italic pl-1 text-xs font-semibold">
                            {errors.agreeTerms}
                        </span>
                    ) : null}
                </div>
                <div>
                    <button
                        type="submit"
                        className="bg-customRed hover:bg-customGray text-white font-bold py-2 px-4 rounded border-2 border-transparent focus:outline-none focus:shadow-outline hover:text-customRed hover:border-customRed mt-4 disabled:opacity-5"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ArtistForm;

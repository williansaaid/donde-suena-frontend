import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postArtist } from "../../Redux/Slices/Artist/artistActions";

import axios from "axios";

export const PostVar = () => {
    const artist = useSelector((state) => state.artist);

    const dispatch = useDispatch();
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "Donde-Suena-Posts");
        setLoading(true);
        const res = await axios.post(
            "https://api.cloudinary.com/v1_1/ds41xxspf/image/upload",
            data
        );
        res.data.secure_url ? setSuccess(true) : setSuccess(false);
        setImage(res.data.secure_url);
        setLoading(false);
    };

    const [input, setInput] = useState({
        title: "",
        description: "",
        artist: "",
    });
    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const postValues = {
            ...input,
            image: image,
            artists: "Simone_Schoen",
        };
        if (postValues.image || postValues.title) {
            dispatch(postArtist(postValues));
            setSuccess(false);
            setImage("");
            setInput({
                title: "",
                artist: "",
                description: "",
            });
        } else {
            postValues.image
                ? alert("La imágen es necesaria")
                : alert("El título es necesario");
        }
    }
    useEffect(() => {}, [dispatch]);

    return (
        <>
            {" "}
            <div className="flex items-center justify-center p-6">
                <form
                    className="flex flex-col items-center bg-customGray w-3/4 p-8 gap-6 max-w-xl rounded-xl"
                    onSubmit={handleSubmit}
                >
                    <p className="text-white font-bold text-2xl uppercase text-center">
                        ¿Qué vas a compartir hoy?
                    </p>
                    {/* <input
                        className="w-full text-customGray bg-gray-200 rounded-xl focus:outline-none focus:bg-white focus:border-gray-500 py-2 px-4"
                        type="text"
                        value={input.title}
                        name="title"
                        onChange={handleChange}
                        placeholder="Título"
                    /> */}
                    <textarea
                        type="textarea"
                        rows="2"
                        name="description"
                        placeholder={`Más sobre ${input.title}...`}
                        value={input.description}
                        onChange={handleChange}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 scroll-y"
                    />
                    <div className="w-full border-2 flex flex-col justify-center items-center rounded-xl p-4 gap-4">
                        {/* <label
                            htmlFor="image"
                            className="text-white bg-customRed rounded-xl px-6 font-bold italic"
                        >
                            Imágen o video{" "}
                        </label> */}
                        <input
                            id="image"
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-2 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-customRed file:text-white hover:file:bg-gray-400 cursor-pointer"
                            type="file"
                            accept="image/jpg, image/png, image/jpeg "
                            onChange={uploadImage}
                        />
                        {loading ? (
                            <span className="text-customRed italic pl-1 text-xs font-semibold">
                                (Subiendo Imágen...)
                            </span>
                        ) : success ? (
                            <div className="w-96 h-96">
                                <img
                                    className="w-50 h-50 rounded-lg object-cover"
                                    alt="Preview"
                                    src={image}
                                />
                            </div>
                        ) : null}
                    </div>
                    <button
                        className="px-6 py-2 border-2 border-customRed text-customRed font-bold italic leading-tight uppercase rounded-full hover:bg-black focus:outline-none focus:ring-0 transition duration-200 ease-in-out"
                        type="submit"
                    >
                        Publicar
                    </button>
                </form>
            </div>
            {/* mapear componetnte postid la cantidad deveces que tenga el componente , por cada delemento tendria que llegar el description e imagen  */}
            {/* <PostId descripcion={"descripcion"} multimedia={null}></PostId> */}
            <div></div>
        </>
    );
};

export default PostVar;

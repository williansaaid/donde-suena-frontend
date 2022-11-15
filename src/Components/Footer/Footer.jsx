import React from "react";
import "./footer.css";
import { useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();
    return (
        <footer className="p-4 bg-customgray  shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-customGray mt-40">
            <img
                onClick={() => navigate("/")}
                className="h-20 cursor-pointer"
                src={
                    "https://res.cloudinary.com/ds41xxspf/image/upload/v1668097753/Donde-Suena-Assets/Henry_Proyecto_Grupal_Logo_mwreht.png"
                }
                alt="logo"
            />
            <ul className="flex flex-wrap items-center bg-customgrey flex space-x-4">
                <li>
                    {" "}
                    <img
                        className="object-contain h-10 w-10"
                        src="https://res.cloudinary.com/ds41xxspf/image/upload/v1668128720/Donde-Suena-Assets/thumbnail_instagram_uhwi1o.png"
                        alt="instagram logo"
                    />
                </li>
                <li>
                    {" "}
                    <img
                        className="object-contain h-10 w-10"
                        src="https://res.cloudinary.com/ds41xxspf/image/upload/v1668128720/Donde-Suena-Assets/thumbnail_twitter_jnclek.png"
                        alt="twitter logo"
                    />
                </li>
                <li>
                    {" "}
                    <img
                        className="object-contain h-10 w-10"
                        src="https://res.cloudinary.com/ds41xxspf/image/upload/v1668128720/Donde-Suena-Assets/thumbnail_facebook_glqqwf.png"
                        alt="facebook logo"
                    />
                </li>
            </ul>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-white-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="#" className="hover:underline">
                        Sobre Nosotros
                    </a>
                </li>
            </ul>
        </footer>
    );
}

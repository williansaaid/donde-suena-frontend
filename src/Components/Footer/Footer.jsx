import React from "react";
import "./footer.css";
import { useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();

    return (
    <footer class="p-4 bg-customgray shadow md:flex md:items-center md:justify-between md:p-6 bg-customGray">
        <img
            onClick={() => navigate("/")}
            class="h-20"
            src={"https://res.cloudinary.com/ds41xxspf/image/upload/v1668097753/Donde-Suena-Assets/Henry_Proyecto_Grupal_Logo_mwreht.png"}
            alt="logo"
            />
        <ul class="flex flex-wrap gap-12 items-center">
            <li>
                <img class="object-contain h-10 w-10 cursor-pointer" src="https://res.cloudinary.com/ds41xxspf/image/upload/v1668573857/Donde-Suena-Assets/ig-white_onltii.png" alt="instagram logo" />
            </li>
            <li>
                <img  class="object-contain h-10 w-10 cursor-pointer" src="https://res.cloudinary.com/ds41xxspf/image/upload/v1668574298/Donde-Suena-Assets/dlf.pt-facebook-and-twitter-icons-5924528_fq1die.png" alt="twitter logo" />
            </li>
            <li>
                <img  class="object-contain h-10 w-10 cursor-pointer" src="https://res.cloudinary.com/ds41xxspf/image/upload/v1668574467/Donde-Suena-Assets/pngfind.com-efectos-png-photoscape-3874615_spqlvq.png" alt="facebook logo" />
            </li>
        </ul>
        <ul class="flex flex-wrap items-center mt-3 text-sm text-white-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="#" class="text-white">Sobre Nosotros</a>
            </li>
        </ul>
    </footer>
)
}

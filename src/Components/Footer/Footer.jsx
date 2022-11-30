import React from "react";
import "./footer.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Footer() {
    const navigate = useNavigate();
    const { loading } = useSelector((state) => state.loadingState);

    return (
        <div>
            {!loading && (
                <div className="bg-customGray">
                    <footer className="md:flex md:items-center md:justify-between md:p-4">
                        <img
                            onClick={() => navigate("/")}
                            className="h-20 ml-6 mt-2"
                            src={
                                "https://res.cloudinary.com/ds41xxspf/image/upload/v1668097753/Donde-Suena-Assets/Henry_Proyecto_Grupal_Logo_mwreht.png"
                            }
                            alt="logo"
                        />
                        <ul className="flex flex-wrap gap-12 items-center mt-6">
                            <li>
                                <img
                                    className="object-contain h-10 w-10 cursor-pointer"
                                    src="https://res.cloudinary.com/ds41xxspf/image/upload/v1668574467/Donde-Suena-Assets/pngfind.com-efectos-png-photoscape-3874615_spqlvq.png"
                                    alt="facebook logo"
                                />
                            </li>
                            <li>
                                <img
                                    className="object-contain h-10 w-10 cursor-pointer"
                                    src="https://res.cloudinary.com/ds41xxspf/image/upload/v1668574298/Donde-Suena-Assets/dlf.pt-facebook-and-twitter-icons-5924528_fq1die.png"
                                    alt="twitter logo"
                                />
                            </li>
                            <li>
                                <img
                                    className="object-contain h-10 w-10 cursor-pointer"
                                    src="https://res.cloudinary.com/ds41xxspf/image/upload/v1668573857/Donde-Suena-Assets/ig-white_onltii.png"
                                    alt="instagram logo"
                                />
                            </li>
                        </ul>
                        <ul className="flex flex-wrap items-center text-base sm:mt-8 mr-6">
                            <li>
                                <a href="/team" className="text-white">
                                    Sobre Nosotros
                                </a>
                            </li>
                        </ul>
                    </footer>
                    <div className="flex justify-center mx-auto">
                        <p className="text-white mb-4">
                            © DondeSuena {new Date().getFullYear()} - Hecho con
                            ♫ por Los Magios.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

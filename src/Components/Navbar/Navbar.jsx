import React, { useEffect, useState, useRef } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoginModal } from "../../Redux/Slices/Modals/modalActions";
import { logOut } from "../../Redux/Slices/Session/sessionActions";
import { setScroll } from "../../Redux/Slices/Scroll/ScrollActions";

import {
    togleAtristState,
    togleUserState,
} from "../../Redux/Slices/Profile/ProfileActions";
import DropdownItem from "./DropdownItem";
import { IoIosCog, IoIosLogOut } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { TiTicket } from "react-icons/ti";
import { AiOutlineStar } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";

import "./Navbar.css";
function Navbar() {
    const location = useLocation();
    const menuRef = useRef();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const user = useSelector((state) => state.sessionState.user);
    console.log(user);

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });

    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    const handleArtistProfile = (number) => {
        dispatch(setScroll([0, 9999]));
        dispatch(togleAtristState(number));

        navigate(`artistProfile/${user.id}`);
    };
    const handleUserProfile = (number) => {
        dispatch(togleUserState(number));
        navigate(`/userProfile/${user.id}`);
    };

    const handleNavigate = () => {
        dispatch(setScroll([0, 0]));
        if (!user.artista) navigate(`/userProfile/${user.id}`);
        else navigate(`artistProfile/${user.id}`);
    };
    const handleLogin = () => {
        dispatch(setLoginModal());
    };
    const handleLogout = () => {
        dispatch(logOut());
        // si existe la propiedad email en el localStorage, la borra
        if (localStorage.getItem("email")) {
            const google = window.google;
            google.accounts.id.disableAutoSelect();

            google.accounts.id.revoke(localStorage.getItem("email"), (done) => {
                localStorage.removeItem("email");
                window.location.reload();
            });
        }
        navigate("/");
    };
    const handleArtistDashboard = () => {
        navigate(`/myDashboard`)
    }

    return (
        <>
                <nav className="bg-customGray relative w-full flex items-center justify-center h-28">
                    <div className="container flex justify-between items-center min-w-full px-5">
                        <img
                            onClick={() => navigate("/")}
                            className="h-20 cursor-pointer animate-pulse"
                            src={
                                "https://res.cloudinary.com/ds41xxspf/image/upload/v1668097753/Donde-Suena-Assets/Henry_Proyecto_Grupal_Logo_mwreht.png"
                            }
                            alt="logo"
                        />
                        <div className="flex items-center justify-center gap-8">
                            {location.pathname.length === 1 && (
                                <div className="my-9">
                                    <SearchBar />
                                </div>
                            )}

                            {!user.isLogged ? (
                                <div
                                    onClick={handleLogin}
                                    className="cursor-pointer text-white bg-customRed rounded-lg ml-10 items-center p-2 flex h-10 gap-3 px-3"
                                >
                                    <img
                                        className="h-full"
                                        src={
                                            "https://res.cloudinary.com/ds41xxspf/image/upload/v1668097753/Donde-Suena-Assets/Henry_Proyecto_Grupal_Mi_cuenta_tdlcab.png"
                                        }
                                        alt="account icon"
                                    />
                                    <a>Mi Cuenta</a>
                                </div>
                            ) : (
                                <div className="menu-container" ref={menuRef}>
                                    <div
                                        onClick={() => setOpen(!open)}
                                        className="flex justify-center items-center ml-5 mr-2 h-auto bg-gray-500 rounded-full cursor-pointer gap-2 pl-2"
                                    >
                                        <div className="text-white flex justify-center items-center">
                                            <FaAngleDown
                                                className="text-white"
                                                size={"1.3rem"}
                                            />
                                        </div>
                                        <h3 className="tracking-wide text-white text-s font-bold">
                                            {user.artista ? user.nickname : user.firstName}
                                        </h3>
                                        <img
                                            className="object-cover rounded-full h-20 w-20"
                                            src={user.image}
                                            alt="foto de perfil"
                                        />
                                    </div>
                                    <div
                                        className={`dropdown-menu ${
                                            open ? "active" : "inactive"
                                        }`}
                                    >
                                        <ul>
                                            <div className={!user.artista ? "hidden" : "active"}
                                                onClick={handleArtistDashboard}
                                            >
                                                <DropdownItem
                                                    img={
                                                        <IoIosCog
                                                            size={"1.3rem"}
                                                        />
                                                    }
                                                    text="Dashboard"
                                                />
                                            </div>
                                            <div onClick={handleNavigate}>
                                                <DropdownItem
                                                    img={
                                                        <IoPersonOutline
                                                            size={"1.3em"}
                                                        />
                                                    }
                                                    text="Mi Perfil"
                                                />
                                            </div>
                                            <div
                                                onClick={() => {
                                                    user.artista
                                                        ? handleArtistProfile(2)
                                                        : handleUserProfile(1);
                                                }}
                                            >
                                                <DropdownItem
                                                    img={
                                                        <TiTicket
                                                            size={"1.3em"}
                                                        />
                                                    }
                                                    text={
                                                        !user.artista
                                                            ? "Mis Tickets"
                                                            : "Mis Shows"
                                                    }
                                                />
                                            </div>
                                            <div
                                                onClick={() => {
                                                    user.artista
                                                        ? handleArtistProfile(1)
                                                        : handleUserProfile(2);
                                                }}
                                            >
                                                <DropdownItem
                                                    img={
                                                        <AiOutlineStar
                                                            size={"1.3em"}
                                                        />
                                                    }
                                                    text={
                                                        !user.artista
                                                            ? "Mis Favoritos"
                                                            : "Mi Feed"
                                                    }
                                                />
                                            </div>
                                            <div onClick={handleLogout}>
                                                <DropdownItem
                                                    img={
                                                        <IoIosLogOut
                                                            size={"1.3em"}
                                                        />
                                                    }
                                                    text="Cerrar Sesión"
                                                />
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </nav>
        </>
    );
}

export default Navbar;

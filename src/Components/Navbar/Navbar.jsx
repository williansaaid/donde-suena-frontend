import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoginModal } from "../../Redux/Slices/Modals/modalActions";
import { logOut } from "../../Redux/Slices/Session/sessionActions";
import DropdownItem from "./DropdownItem";
import { IoIosLogOut } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { TiTicket } from "react-icons/ti";
import { AiOutlineStar } from "react-icons/ai";
import "./Navbar.css";
function Navbar() {
    const location = useLocation();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const user = useSelector((state) => state.sessionState.user);
    console.log(user);

    const handleNavigate = () => {
        if (!user.artista) navigate(`/userProfile/${user.uid}`);
        else navigate(`artistProfile/${user.uid}`);
        setOpen(false);
    };

    const handleLogin = () => {
        dispatch(setLoginModal());
    };
    const handleLogout = () => {
        console.log("entre");
        dispatch(logOut());
        setOpen(false);
    };

    return (
        <>
            {!location.pathname.includes("/register") && (
                <nav className="bg-customGray relative w-full">
                    <div className="container mx-auto flex justify-between items-center pb-3">
                        <img
                            onClick={() => navigate("/")}
                            className="h-20 cursor-pointer animate-pulse"
                            src={
                                "https://res.cloudinary.com/ds41xxspf/image/upload/v1668097753/Donde-Suena-Assets/Henry_Proyecto_Grupal_Logo_mwreht.png"
                            }
                            alt="logo"
                        />
                        <div className="flex items-center">
                            {!location.pathname.includes("/detail") && (
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
                                // <div
                                //     onClick={handleLogout}
                                //     className="cursor-pointer text-white bg-customRed rounded-lg ml-10 items-center p-2 flex h-10 gap-3 px-3"
                                // >
                                //     <img
                                //         className="h-full"
                                //         src={
                                //             "https://res.cloudinary.com/ds41xxspf/image/upload/v1668097753/Donde-Suena-Assets/Henry_Proyecto_Grupal_Mi_cuenta_tdlcab.png"
                                //         }
                                //         alt="account icon"
                                //     />
                                //     <a>Logout</a>
                                // </div>

                                <div className="menu-container">
                                    <div
                                        onClick={() => setOpen(!open)}
                                        className="ml-5 mr-2 cursor-pointer"
                                    >
                                        <img
                                            className="h-[4.3em] rounded-full"
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
                                            <div onClick={handleNavigate}>
                                                <DropdownItem
                                                    img={
                                                        <IoPersonOutline
                                                            size={"1.3em"}
                                                        />
                                                    }
                                                    text="Perfil"
                                                />
                                            </div>
                                            <div>
                                                <DropdownItem
                                                    img={
                                                        <TiTicket
                                                            size={"1.3em"}
                                                        />
                                                    }
                                                    text="Mis Tickets"
                                                />
                                            </div>
                                            <div>
                                                <DropdownItem
                                                    img={
                                                        <AiOutlineStar
                                                            size={"1.3em"}
                                                        />
                                                    }
                                                    text="Mis Favoritos"
                                                />
                                            </div>

                                            <div onClick={handleLogout}>
                                                <DropdownItem
                                                    img={
                                                        <IoIosLogOut
                                                            size={"1.3em"}
                                                        />
                                                    }
                                                    text="Logout"
                                                />
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </nav>
            )}
        </>
    );
}

export default Navbar;

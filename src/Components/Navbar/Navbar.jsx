import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoginModal } from "../../Redux/Slices/Modals/modalActions";
import { logOut } from "../../Redux/Slices/Session/sessionActions";
import DropdownItem from "./DropdownItem";
import { IoIosCog, IoIosLogOut } from "react-icons/io";
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

    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    const handleNavigate = () => {
        if (!user.artista) navigate(`/userProfile/${user.uid}`);
        else navigate(`artistProfile/${user.uid}`);
    };
    const handleLogin = () => {
        dispatch(setLoginModal());
    };
    const handleLogout = () => {
        dispatch(logOut());
    };
    const handleArtistDashboard = () => {
        navigate(`/myDashboard`)
    }

    return (
        <>
                <nav className="bg-customGray relative w-full flex items-center justify-center h-28">
                    <div className="container flex justify-between items-center min-w-full px-20">
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
                                        className="flex justify-center items-center ml-5 mr-2 h-20 w-20 bg-gray-500 rounded-full cursor-pointer"
                                    >
                                        <img
                                            className="object-cover rounded-full"
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
                                            <div className={!user.artista ? "inactive" : "active"}
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
        </>
    );
}

export default Navbar;

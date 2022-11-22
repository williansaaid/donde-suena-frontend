import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoginModal } from "../../Redux/Slices/Modals/modalActions";
import { logOut } from "../../Redux/Slices/Session/sessionActions";
function Navbar() {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLogged } = useSelector((state) => state.sessionState.user);
    const handleLogin = () => {
        dispatch(setLoginModal());
    };
    const handleLogout = () => {
        dispatch(logOut());
    };

    return (
        <>
            {!location.pathname.includes("/register") && (
                <nav className="bg-customGray relative w-full">
                    <div className="container mx-auto flex justify-between items-center">
                        <img
                            onClick={() => navigate("/")}
                            className="h-20 cursor-pointer animate-pulse"
                            src={
                                "https://res.cloudinary.com/ds41xxspf/image/upload/v1668097753/Donde-Suena-Assets/Henry_Proyecto_Grupal_Logo_mwreht.png"
                            }
                            alt="logo"
                        />
                        <div className="flex items-center">
                            <div className="my-9">
                                <SearchBar />
                            </div>
                            {!isLogged ? (
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
                                <div
                                    onClick={handleLogout}
                                    className="cursor-pointer text-white bg-customRed rounded-lg ml-10 items-center p-2 flex h-10 gap-3 px-3"
                                >
                                    <img
                                        className="h-full"
                                        src={
                                            "https://res.cloudinary.com/ds41xxspf/image/upload/v1668097753/Donde-Suena-Assets/Henry_Proyecto_Grupal_Mi_cuenta_tdlcab.png"
                                        }
                                        alt="account icon"
                                    />
                                    <a>Logout</a>
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

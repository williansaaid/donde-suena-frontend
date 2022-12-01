/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserById } from "../../Redux/Slices/User/userAction";
import UserFavorites from "../UserFavorites/UserFavorites";
import MyShopping from "../MyShopping/MyShopping";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function UserProfile() {
    const dispatch = useDispatch();

    const { id } = useParams();
    const { userId } = useSelector((state) => state.userIdState);
    const { profileUserState } = useSelector((state) => state.profileState);

    const tabsArray = Array.from(document.querySelectorAll("#select-tab"));
    const contentArray = Array.from(
        document.querySelectorAll("#select-content")
    );

    const handleChangeTab = (target) => {
        tabsArray.forEach((tab) => {
            tab.classList.remove("bg-customRed");
        });

        const currentTab = tabsArray.indexOf(target);

        contentArray.forEach((content) => {
            if (contentArray.indexOf(content) === currentTab) {
                content.classList.remove("hidden");
            } else if (contentArray.indexOf("content") !== currentTab) {
                content.classList.add("hidden");
            }
        });
        target.classList.add("bg-customRed");
    };

    tabsArray.forEach((tab) => {
        tab.addEventListener("click", () => {
            let target = tab;
            //itero sobre los elementos y les saco el fondo activo

            handleChangeTab(target);
        });
    });

    useEffect(() => {
        dispatch(getUserById(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (profileUserState && tabsArray[1]) {
            handleChangeTab(tabsArray[1]);
            // } else handleChangeTab(tabsArray[0]);
        } else if (!profileUserState && tabsArray[1]) {
            handleChangeTab(tabsArray[0]);
        }
    }, [tabsArray]);

    return (
        <div className="container min-w-full min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
                <div className="flex flex-col bg-profile bg-cover bg-center justify-center items-center">
                    <div className="h-3/4 w-3/4 flex flex-col justify-center items-center backdrop-blur-lg gap-8 rounded-3xl overflow-hidden border-2 p-8">
                        <div className="flex justify-center items-center rounded-full overflow-hidden w-40 h-40">
                            <img
                                src={userId.image}
                                className="object-cover h-40 w-40 rounded-full overflow-hidden"
                            />
                        </div>
                        <img
                            src="https://static.wixstatic.com/media/cc66dc_47b22f588e3b4f1f882bec92cdac68e0~mv2.gif"
                            className="gif music spectre"
                        />
                        <p className="text-2xl text-black font-bold py-4 text-center">
                            {userId.firstName} {userId.lastName}
                        </p>
                        <div className="flex justify-center items-center border-t-2 px-6 py-4">
                            <p className="text-xl text-white font-bold uppercase">
                                {userId.email}
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <ul className="flex items-center justify-center bg-white">
                        <li
                            id="select-tab"
                            className="p-2 w-full font-bold cursor-pointer bg-customRed hover:bg-customGray hover:text-customRed uppercase text-center transition duration-300 ease-in-out border-t-2  border-transparent hover:border-customRed"
                        >
                            Mis Artistas Favoritos ⭐
                        </li>
                        <li
                            id="select-tab"
                            className="p-2 w-full font-bold cursor-pointer hover:bg-customGray hover:text-customRed uppercase text-center transition duration-300 ease-in-out border-t-2  border-transparent hover:border-customRed"
                        >
                            Mis Compras 🛒
                        </li>
                    </ul>
                    <section
                        id="select-content"
                        className="container text-4xl flex items-center justify-center"
                    >
                        <UserFavorites />
                    </section>
                    <section
                        id="select-content"
                        className="container text-4xl flex items-center justify-center"
                    >
                        <MyShopping />
                    </section>
                </div>
            </div>
        </div>
    );
}

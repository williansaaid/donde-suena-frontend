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
        }
    }, [tabsArray]);

    return (
        <div className="container min-w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 ">
                <div className="hidden bg-customRed md:block pt-10">
                    <div className="relative w-full flex justify-center h-52">
                        <img
                            src={userId.image}
                            className="shadow-xl rounded-full align-middle border-none absolute -ml-20 lg:-ml-16 max-w-[150px]"
                        />
                    </div>
                    <img
                        src="https://static.wixstatic.com/media/cc66dc_47b22f588e3b4f1f882bec92cdac68e0~mv2.gif"
                        alt=""
                        width="750px"
                        height="5px"
                        className="mt-10"
                    />
                    <h3 className=" flex justify-center mt-10 mr-14 text-2xl text-black font-bold mb-1">
                        {userId.firstName} {userId.lastName}
                    </h3>
                    <div className="flex justify-center mt-6 py-6 border-t border-slate-200">
                        <div className=" block uppercase tracking-wideflex justify-center mt-10text-2xl text-slate-300 font-bold leading-normal mb-1 mr-14">
                            {userId.email}
                            {/* <FontAwesomeIcon icon="fa-regular fa-image" /> */}
                        </div>
                    </div>
                    <div className="flex justify-center mt-10 text-2xl text-slate-700 font-bold leading-normal mb-1 mr-14"></div>
                </div>
                <div className=" bg-customGray">
                    <ul className="flex items-center justify-center bg-white">
                        <li
                            id="select-tab"
                            className="p-2  w-full font-bold cursor-pointer bg-customRed hover:bg-red-300"
                        >
                            Mis artistas Favoritos ⭐
                        </li>
                        <li
                            id="select-tab"
                            className="p-2  w-full font-bold cursor-pointer hover:bg-red-300"
                        >
                            Mis Compras 🛒
                        </li>
                    </ul>
                    <section
                        id="select-content"
                        className="container min-h-0 bg-customGray p-2 text-4xl flex items-center justify-center"
                    >
                        <UserFavorites />
                    </section>
                    <section
                        id="select-content"
                        className="container min-h-0 bg-customGray p-3 text-4xl flex items-center justify-center"
                    >
                        <MyShopping />
                    </section>
                </div>
            </div>
        </div>
    );
}

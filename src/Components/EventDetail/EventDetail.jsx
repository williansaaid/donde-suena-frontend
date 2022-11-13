import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getEventsById } from "../../Redux/eventActions";

const EventDetail = (props) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { detail } = useSelector((state) => state.detail);
    console.log(detail);
    useEffect(() => {
        dispatch(getEventsById(id));
    }, [dispatch, id]);

    return (
        <section class="text-gray-700 body-font overflow-hidden bg-white">
            <div class="container px-10 py-20 mx-auto">
                <div class="lg:w-4/4 mx-auto flex flex-wrap">
                    <img
                        alt="event"
                        class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200 px-8 ... border-transparent"
                        src={detail.image}
                    />
                    <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 bg-gray-300 rounded-lg">
                        <h2 class="text-sm title-font text-gray-500 tracking-widest">
                            {detail.date}
                        </h2>
                        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                            {detail.name}
                        </h1>

                        <p class="leading-relaxed">{detail.description}arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique</p>
                        <p class="leading-relaxed">
                            {" "}
                            Hora de Inicio ⏰{detail.start}
                        </p>
                        <p class="leading-relaxed">
                            {" "}
                            Finaliza a las {detail.end}
                        </p>
                        <p class="leading-relaxed">
                            Valor de entrada 💵 ${detail.price}
                        </p>

                        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                            <div class="flex ml-6 items-center">
                                <div class="relative"></div>
                            </div>
                        </div>
                        <div class="flex">
                            <div class="relative">
                                <select class="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                                <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        class="w-4 h-4"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </div>
                            <button class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                                Comprar
                            </button>
                        </div>
                        <div class="flex mb-4 pt-20">
                          
                            <ul class="flex flex-wrap items-center ">
                                <li class="pr-4 ... pt-40 ... px-8 ...">
                                    {" "}
                                    <img
                                        src="https://res.cloudinary.com/ds41xxspf/image/upload/v1668128720/Donde-Suena-Assets/thumbnail_instagram_uhwi1o.png"
                                        alt="instagram logo"height="50px"width="50px"
                                    />
                                </li>
                                <li class="pr-4 ... pt-40 ... px-8 ...">
                                    {" "}
                                    <img
                                        src="https://res.cloudinary.com/ds41xxspf/image/upload/v1668128720/Donde-Suena-Assets/thumbnail_twitter_jnclek.png"
                                        alt="twitter logo" height="50px"width="50px"
                                    />
                                </li>
                                <li class="pr-4 ... pt-40 ... px-8 ...">
                                    {" "}
                                    <img
                                        src="https://res.cloudinary.com/ds41xxspf/image/upload/v1668128720/Donde-Suena-Assets/thumbnail_facebook_glqqwf.png"
                                        alt="facebook logo" height="50px"width="50px"
                                    />
                                </li>
                            </ul>
                            <ul class="flex flex-wrap items-center mt-3 text-sm text-white-500 dark:text-gray-400 sm:mt-0"></ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default EventDetail;

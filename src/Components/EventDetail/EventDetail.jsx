import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getEventsById } from "../../Redux/eventActions";
import { Link } from "react-router-dom";
import CarouselRec from "../CarouselRec/CarouselRec";

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
            <div class="lg:w-3/1 mx-1 flex">
                <div class="object-contain rounded-lg  w-150 mt-6 space-y-4">
                    <div class="relative rounded-lg">
                        <img
                            alt="event"
                            class=" object cover rounded-lg border-gray-200 px-8 border-transparent"
                            src={detail.image}
                        />
                        <div class="absolute bottom-0 left-8 right-8 px-10 py-12 bg-gray-800 opacity-70">
                            <div class="mb-6">
                                <h2 class="absolute bottom-10  ml-15 text-sm title-font text-white tracking-widest">
                                    {detail.date}
                                </h2>
                                <h1 class="absolute mb-4 bottom-12 ml-15 text-white text-3xl title-font font-medium mb-1">
                                    {detail.name}
                                </h1>
                            </div>
                        </div>
                    </div>
                    <img
                        alt="event"
                        class="rounded-lg border-gray-200 px-8 border-transparent"
                        src="https://parabuenosaires.com/wp-content/uploads/2017/03/google-maps-bs-as.jpg"
                        height="100px"
                        width="700px"
                    />
                </div>
                <div class=" lg:w-1/2 lg:pl-5 lg:py-10 lg:mt-6 bg-gray-300 rounded-lg">
                    <h2 class="font-bold text-xl text-center">
                        Nombre del concierto
                    </h2>
                    <p class="leading-relaxed">
                        {detail.description}arcu ac tortor dignissim convallis
                        aenean et tortor at risus viverra adipiscing at in
                        tellus integer feugiat scelerisque varius morbi enim
                        nunc faucibus a pellentesque sit amet porttitor eget
                        dolor morbi non arcu risus quis varius quam quisque id
                        diam vel quam elementum pulvinar etiam non quam lacus
                        suspendisse faucibus interdum posuere lorem ipsum dolor
                        sit amet consectetur adipiscing elit duis tristique
                        sollicitudin nibh sit amet commodo nulla facilisi nullam
                        vehicula ipsum a arcu cursus vitae congue mauris rhoncus
                        aenean vel elit scelerisque mauris pellentesque pulvinar
                        pellentesque habitant morbi tristique
                    </p>
                    <p class="leading-relaxed">
                        {" "}
                        Hora de Inicio ⏰{detail.start}
                    </p>
                    <p class="leading-relaxed"> Finaliza a las {detail.end}</p>
                    <p class="leading-relaxed">
                        Valor de entrada 💵 ${detail.price}
                    </p>

                    <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                        <div class="flex ml-6 items-center">
                            <div class="relative"></div>
                        </div>
                    </div>
                    <div class="flex space-x-4 ...">
                        <div class="relative ">
                            <select class="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                            <span class="absolute right-0 top-0 h-full w-5 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="3"
                                    class="w-4 h-4"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </div>
                        <button class="flex ml-auto text-white bg-customRed border-0 py-2 px-6 focus:outline-none hover:bg-red-500 border-0 rounded">
                            Comprar
                        </button>
                    </div>
                    <div class="grid h-15px place-items-center ">
                        <ul class="flex flex-wrap">
                            <li class="pr-4 ... pt-40 ... px-8 ...">
                                {" "}
                                <img
                                    src="https://res.cloudinary.com/ds41xxspf/image/upload/v1668128720/Donde-Suena-Assets/thumbnail_instagram_uhwi1o.png"
                                    alt="instagram logo"
                                    height="50px"
                                    width="50px"
                                />
                            </li>
                            <li class="pr-4 ... pt-40 ... px-8 ...">
                                {" "}
                                <img
                                    src="https://res.cloudinary.com/ds41xxspf/image/upload/v1668128720/Donde-Suena-Assets/thumbnail_twitter_jnclek.png"
                                    alt="twitter logo"
                                    height="50px"
                                    width="50px"
                                />
                            </li>
                            <li class="pr-4 ... pt-40 ... px-8 ...">
                                {" "}
                                <img
                                    src="https://res.cloudinary.com/ds41xxspf/image/upload/v1668128720/Donde-Suena-Assets/thumbnail_facebook_glqqwf.png"
                                    alt="facebook logo"
                                    height="50px"
                                    width="50px"
                                />
                            </li>
                        </ul>
                        <ul class="flex flex-wrap items-center mt-3 text-sm text-white-500 dark:text-gray-400 sm:mt-0"></ul>
                    </div>
                    <div class="flex mx-20 my-20 mr-20 justify-center">
                        <Link to="/">
                            <button class=" text-white bg-customRed border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded">
                                Go Back!
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
         
        </section>
    );
};
export default EventDetail;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { getEventsById } from "../../Redux/Slices/Event/eventActions";
import { Link } from "react-router-dom";
import useGoogleAddress from "../../hooks/useGoogleAddress";
import Map from "../Map/Map";
import { ticketPurchase } from "../../Redux/Slices/User/userAction";

const EventDetail = (props) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [ searchParams ] = useSearchParams();
    const [ query, setQuery ] = useState({});
    const { detail } = useSelector((state) => state.detail);
    const [ quantity, setQuantity ] = useState(1);
    const { paymentUrl } = useSelector((state) => state.user);
    const [ order, setOrder ] = useState(false);
    // const location = useGoogleAddress("TEATRO VORTERIX, CF, Argentina");
    useEffect(() => {
        dispatch(getEventsById(id));
    }, [dispatch, id]);

    const handlePurchase = () => {
        setOrder(true);
        let detailsPurchase = {
            quantity: parseInt(quantity),
            priceTotal: detail.price,
            id: id
        };
        dispatch(ticketPurchase(detailsPurchase));
    };
    const handleQuantity = (e) => {
        e.preventDefault();
        setQuantity(e.target.value);
    };

    useEffect(() => {
        setQuery(Object.fromEntries([...searchParams]))
        setOrder(false);
    }, []);
    console.log(query);

    return (
        <section class="text-gray-700 body-font overflow-hidden bg-white">
            <div class="lg:w-3/1 mx-1 flex mt-10">
                <div class="object-contain rounded-lg  w-150 mt-6 space-y-4 ml-20">
                    <div class="relative rounded-lg mb-20">
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
                                <h1 class="absolute mb-4 bottom-12 ml-15 text-white text-3xl title-font font-medium">
                                    {detail.name}
                                </h1>
                            </div>
                        </div>
                    </div>
                    {/* <Map data={location}></Map> */}

                    <img
                        alt="event"
                        class="rounded-lg border-gray-200 px-8 border-transparent"
                        src="https://parabuenosaires.com/wp-content/uploads/2017/03/google-maps-bs-as.jpg"
                        height="100px"
                        width="700px"
                    />
                </div>
                <div class=" lg:w-1/3 lg:px-5 lg:py-10 ml-20 lg:mt-6 bg-gray-300 rounded-lg">
                    <h2 class="font-bold text-xl text-center my-5">
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
                    <div class="flex space-x-4 items-center... max-h-12">
                        <div class="relative flex justify-center items-center">
                            <select class="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10" name={"quantity"} value={quantity} onChange={handleQuantity}>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                            </select>
                            <span class="absolute right-0 top-0 h-full w-5 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="3"
                                    class="w-4 h-4"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </div>
                        <button
                            onClick={handlePurchase}
                            className="flex ml-auto text-white bg-customRed border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded items-center"
                        >
                            <p>Comprar</p>
                        </button>
                        { order ?
                            paymentUrl.length > 0 ?
                            <a
                                href={paymentUrl}
                                target="_blank"
                                className="flex ml-auto text-white bg-sky-300 border-0 px-4 focus:outline-none hover:bg-sky-400 rounded max-h-12"
                            >
                                <div className="flex justify-center items-center w-24 max-h-12">
                                    <img
                                    src="https://res.cloudinary.com/ds41xxspf/image/upload/v1668792016/Donde-Suena-Assets/mercado-pago_pxshfi.png"
                                    className="h-30 object-cover"
                                    />
                                </div>
                            </a>
                            : <div className="flex items-center">
                                    <span className="text-customRed italic pl-1 text-xs font-semibold">
                                    (Generando la orden...)
                                    </span>
                                </div>

                            : null
                        }
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
                    <div class="flex mx-20 mt-20 mr-20 justify-center">
                        <Link to="/">
                            <button class=" text-white bg-customRed border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded">
                                Regresar
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default EventDetail;

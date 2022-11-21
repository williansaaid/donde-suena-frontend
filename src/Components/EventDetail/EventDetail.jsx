import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { getEventsById, updateTickets } from "../../Redux/Slices/Event/eventActions";
import { useNavigate } from "react-router-dom";
import useGoogleAddress from "../../hooks/useGoogleAddress";
import Map from "../Map/Map";
import { ticketPurchase, clearUrl } from "../../Redux/Slices/User/userAction";
import { changeLoading } from "../../Redux/Slices/Loading/LoadingActions";
import Loading from "../Loading/Loading";

const EventDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [ searchParams ] = useSearchParams();
    const [ query, setQuery ] = useState({});
    const { detail } = useSelector((state) => state.detailState);
    const { loading } = useSelector((state) => state.loadingState);
    const [ quantity, setQuantity ] = useState(1);
    const { paymentUrl } = useSelector((state) => state.userPublicState);
    const [ order, setOrder ] = useState(false);
    const location = useGoogleAddress("TEATRO VORTERIX, CF, Argentina");
    const navigate = useNavigate();

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
    const loadingCallback = useCallback(() => {
        setTimeout(() => {
            dispatch(changeLoading());
        }, 2000);
    }, []);
    useEffect(() => {
        loadingCallback();
    }, [loadingCallback]);

    const handleQuantity = (e) => {
        e.preventDefault();
        setQuantity(e.target.value);
    };

    useEffect(() => {
        dispatch(clearUrl());
        setQuery(Object.fromEntries([...searchParams]))
        setOrder(false);
    }, []);

    useEffect(() => {
        if(query.hasOwnProperty("payment_id") && query.payment_id === "null"){
            alert("No se pudo concretar la compra");
        } else if (query.hasOwnProperty("payment_id") && query.payment_id !== "null"){
            dispatch(updateTickets({quantity: parseInt(query.purchasedQuantity), id: id}));
            alert("Compra Completada");
        }
    },[query])

    return (
<<<<<<< HEAD
        <section className="text-gray-700 body-font overflow-hidden bg-white">
            {loading && <Loading />}
            <div className={!loading ? "lg:w-3/1 mx-1 flex mt-10 " : "hidden"}>
                <div className="object-contain rounded-lg  w-150 mt-6 space-y-4 ml-20">
                    <div className="relative rounded-lg mb-20">
                        <img
                            alt="event"
                            className=" object cover rounded-lg border-gray-200 px-8 border-transparent"
                            src={detail.image}
                        />
                        <div className="absolute bottom-0 left-8 right-8 px-10 py-12 bg-gray-800 opacity-70">
                            <div className="mb-6">
                                <h2 className="absolute bottom-10  ml-15 text-sm title-font text-white tracking-widest">
                                    {detail.date}
                                </h2>
                                <h1 className="absolute mb-4 bottom-12 ml-15 text-white text-3xl title-font font-medium">
=======
        <section class="text-gray-700 body-font overflow-hidden bg-white">
            <div class="flex mx-10 my-16 gap-8">
                <div class="w-1/2 flex flex-col gap-4">
                    <div class="relative rounded-lg overflow-hidden">
                        <img
                            alt="event"
                            class="object-cover rounded-lg border-gray-200 w-full"
                            src={detail.image}
                        />
                        <div class="absolute bottom-0 px-10 py-10 bg-gray-800 w-full max-h-1/8 opacity-80 rounded-lg">
                            <div className="flex flex-col gap-2">
                                <p class="text-white text-5xl font-bold">
>>>>>>> 350fa7ecdf550bb4d970d3fcab5fe0e182945eda
                                    {detail.name}
                                </p>
                                <p class="text-medium text-white tracking-widest">
                                    {detail.date}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="l-20">
                        <Map data={location}></Map>
                    </div>
                </div>
<<<<<<< HEAD
                <div className=" lg:w-1/3 lg:px-5 lg:py-10 ml-20 lg:mt-6 bg-gray-300 rounded-lg">
                    <h2 className="font-bold text-xl text-center my-5">
                        Nombre del concierto
                    </h2>
=======
                <div class="w-1/2 bg-gray-300 rounded-lg p-8 flex flex-col gap-4">
                    <h1 className="font-bold uppercase text-3xl text-center my-5">
                        Nombre del concierto
                    </h1>
>>>>>>> 350fa7ecdf550bb4d970d3fcab5fe0e182945eda
                    <p className="leading-relaxed">
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
<<<<<<< HEAD
                    <p className="leading-relaxed">
                        Hora de Inicio ⏰{detail.start}
                    </p>
                    <p className="leading-relaxed">
                        {" "}
                        Finaliza a las {detail.end}
                    </p>
                    <p className="leading-relaxed">
                        Valor de entrada 💵 ${detail.price}
=======
                    <p class="leading-relaxed">
                        <span className="font-bold mr-2">⏰ Hora de Inicio:
                        </span>
                        {detail.start}
                    </p>
                    <p class="leading-relaxed">
                        <span className="font-bold mr-2">⏰ Hora de Finalización:
                        </span>
                        {detail.end}
                    </p>
                    <p class="leading-relaxed">
                        <span className="font-bold mr-2">💵 Valor de entrada:</span>
                        {detail.price}$
>>>>>>> 350fa7ecdf550bb4d970d3fcab5fe0e182945eda
                    </p>

                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                        <div className="flex ml-6 items-center">
                            <div className="relative"></div>
                        </div>
                    </div>
<<<<<<< HEAD
                    <div className="flex space-x-4 ...">
                        <div className="relative ">
                            <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
=======

                    <div class="flex space-x-4 items-center... max-h-12">
                        <div class="relative flex justify-center items-center">
                            <select class="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10" name={"quantity"} value={quantity} onChange={handleQuantity}>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
>>>>>>> 350fa7ecdf550bb4d970d3fcab5fe0e182945eda
                            </select>
                            <span className="absolute right-0 top-0 h-full w-5 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
<<<<<<< HEAD
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="3"
                                    className="w-4 h-4"
=======
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="3"
                                    class="w-4 h-4"
>>>>>>> 350fa7ecdf550bb4d970d3fcab5fe0e182945eda
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </div>
                        <button
<<<<<<< HEAD
                            onClick={handleSetModal}
                            className="flex ml-auto text-white bg-customRed border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded"
=======
                            onClick={handlePurchase}
                            className="flex ml-auto text-white bg-customRed border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded items-center"
>>>>>>> 350fa7ecdf550bb4d970d3fcab5fe0e182945eda
                        >
                            <p className="font-bold uppercase">Comprar</p>
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
                    <div className="grid h-15px place-items-center ">
                        <ul className="flex flex-wrap">
                            <li className="pr-4 ... pt-40 ... px-8 ...">
                                <img
                                    src="https://res.cloudinary.com/ds41xxspf/image/upload/v1668128720/Donde-Suena-Assets/thumbnail_instagram_uhwi1o.png"
                                    alt="instagram logo"
                                    height="50px"
                                    width="50px"
                                />
                            </li>
                            <li className="pr-4 ... pt-40 ... px-8 ...">
                                <img
                                    src="https://res.cloudinary.com/ds41xxspf/image/upload/v1668128720/Donde-Suena-Assets/thumbnail_twitter_jnclek.png"
                                    alt="twitter logoauto"
                                    height="50px"
                                    width="50px"
                                />
                            </li>
                            <li className="pr-4 ... pt-40 ... px-8 ...">
                                <img
                                    src="https://res.cloudinary.com/ds41xxspf/image/upload/v1668128720/Donde-Suena-Assets/thumbnail_facebook_glqqwf.png"
                                    alt="facebook logo"
                                    height="50px"
                                    width="50px"
                                />
                            </li>
                        </ul>
                        <ul className="flex flex-wrap items-center mt-3 text-sm text-white-500 dark:text-gray-400 sm:mt-0"></ul>
                    </div>
                    <div className="flex mx-20 mt-20 mr-20 justify-center">
                        <button
                            onClick={() => navigate("/")}
<<<<<<< HEAD
                            className=" text-white bg-customRed border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded"
=======
                            class=" text-white bg-customRed border-0 py-3 px-6 focus:outline-none hover:bg-red-500 rounded uppercase font-bold"
>>>>>>> 350fa7ecdf550bb4d970d3fcab5fe0e182945eda
                        >
                            Regresar
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default EventDetail;

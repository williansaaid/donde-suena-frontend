import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
    getArtistEvent,
    cleanDetail,
} from "../../Redux/Slices/Artist/artistActions";

const ArtistShows = () => {
    const dispatch = useDispatch();
    const { eventsArtist } = useSelector((state) => state.artistState);
    const { id } = useParams();

    console.log(eventsArtist);

    useEffect(() => {
        dispatch(getArtistEvent(id));
        dispatch(cleanDetail());
    }, [dispatch, id]);

    return (
        <div class="max-w-2xl w-full lg:flex items-center ">
            {eventsArtist &&
                eventsArtist?.map((el, id) => {
                    return (
                        <div class="border-r border-b border-l border-grey-light  lg:border-t lg:border-grey-light bg-gray-300 rounded-t rounded-b lg:rounded-b lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                            <div class="mb-8">
                                <Link to={`/details/${el.id}`}>
                                    <div>
                                        <img
                                            className="rounded-md"
                                            src={el.image}
                                            alt="eventImage"
                                        />
                                    </div>
                                </Link>
                                <div class="text-black font-bold text-xl mb-2">
                                    Evento : {el.name}
                                </div>
                                <div class="text-sm">
                                    <p class="text-grey-darker text-base font-bold">
                                        Fecha : {el.date}{" "}
                                    </p>
                                    <p class="text-black font-bold leading-none">
                                        En : {el.city}
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-center"></div>
                        </div>
                    );
                })}
        </div>
    );
};

export default ArtistShows;
{
    // <div className="container mt-2 ">
    //     {eventsArtist &&
    //         eventsArtist?.map((el, id) => {
    //             return (
    //                 <div key={id}
    //                 className="grid grid-cols-3 border border-black rounded-md items-center bg-neutral-800 mb-2">
    //                     <Link to={`/details/${el.id}`}>
    //                         <div>
    //                             <img
    //                                 className="rounded-md"
    //                                 src={el.image}
    //                                 alt="eventImage"
    //                             />
    //                         </div>
    //                     </Link>
    //                         <div className="col-span-2 flex flex-col justify-between ml-2">
    //                             <h2 className="text-xl font-semibold text-white">Evento : {el.name}</h2>
    //                             <h1 className="text-xl font-semibold text-white">Fecha : {el.date} </h1>
    //                             <h1 className="text-xl font-semibold text-white"> En : {el.city}</h1>
    //                         </div>
    //                 </div>
    //             );
    //         })}
    // </div>
}

{
    /* <div class="max-w-md w-full lg:flex">
  <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('https://tailwindcss.com/img/card-left.jpg')" title="Woman holding a mug">
  </div>
  <div class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <p class="text-sm text-grey-dark flex items-center">
        <svg class="text-grey w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
        </svg>
        Members only
      </p>
      <div class="text-black font-bold text-xl mb-2">Can coffee make you a better developer?</div>
      <p class="text-grey-darker text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
    </div>
    <div class="flex items-center">
      <img class="w-10 h-10 rounded-full mr-4" src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg" alt="Avatar of Jonathan Reinink"/>
      <div class="text-sm">
        <p class="text-black leading-none">Jonathan Reinink</p>
        <p class="text-grey-dark">Aug 18</p>
      </div>
    </div>
  </div>
</div> */
}

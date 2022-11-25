// import { useState } from "react";
// import ArtistShows from "../ArtistShows/ArtistShows";
// import PostCard from "../PostCard/PostCard";
// import { useSelector } from "react-redux";
// import "./Tabs.css";

// function Tabs() {
//     const [toggleState, setToggleState] = useState(1);
//     const { artistId } = useSelector((state) => state.artistId);

//     const toggleTab = (index) => {
//         setToggleState(index);
//     };

//     return (
//         <div className="container">
//             <div className="bloc-tabs">
//                 <button
//                     className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
//                     onClick={() => toggleTab(1)}
//                 >
//                     Feed
//                 </button>
//                 <button
//                     className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
//                     onClick={() => toggleTab(2)}
//                 >
//                     Shows
//                 </button>
//             </div>
//             <div className="content-tabs">
//                 <div
//                     className={
//                         toggleState === 1
//                             ? "content  active-content"
//                             : "content"
//                     }
//                 >
//                     <p>
//                         <PostCard nickname={artistId.nickname} />
//                     </p>
//                 </div>

//                 <div
//                     className={
//                         toggleState === 2
//                             ? "content  active-content"
//                             : "content"
//                     }
//                 >
//                     <p>
//                         <ArtistShows id={artistId.id} />
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Tabs;

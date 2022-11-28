// import { useState } from "react"
import ArtistShows from "../ArtistShows/ArtistShows";
import PostDumb from "../PostDumb/PostDumb";
import { useSelector, useDispatch } from "react-redux";
import { togleAtristState } from "../../Redux/Slices/Profile/ProfileActions";
import { setScroll } from "../../Redux/Slices/Scroll/ScrollActions";
import "./Tabs.css";

function Tabs() {
    // const [toggleState, setToggleState] = useState(1);
    const dispatch = useDispatch();
    const { profileArtistState } = useSelector((state) => state.profileState);
    const { artistId } = useSelector((state) => state.artistId);
    const toggleTab = (index) => {
        dispatch(setScroll([0, 9999]));
        dispatch(togleAtristState(index));
    };

    return (
        <div className="container2">
            <div className="bloc-tabs">
                <button
                    className={
                        profileArtistState === 1 ? "tabs active-tabs" : "tabs"
                    }
                    onClick={() => toggleTab(1)}
                >
                    Feed
                </button>
                <button
                    className={
                        profileArtistState === 2 ? "tabs active-tabs" : "tabs"
                    }
                    onClick={() => toggleTab(2)}
                >
                    Shows
                </button>
            </div>
            <div className="content-tabs">
                <div
                    className={
                        profileArtistState === 1
                            ? "content  active-content"
                            : "content"
                    }
                >
                    <p>
                        <PostDumb nickname={artistId.nickname} />
                    </p>
                </div>

                <div
                    className={
                        profileArtistState === 2
                            ? "content  active-content"
                            : "content"
                    }
                >
                    <p>
                        <ArtistShows id={artistId.id} />
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Tabs;

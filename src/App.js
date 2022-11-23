import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

//Components Import
import ArtistForm from "./Components/ArtistForm/ArtistForm";
import Home from "./Components/Home/Home";
import EventDetail from "./Components/EventDetail/EventDetail.jsx";
import UserForm from "./Components/UserForm/UserForm";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import EventCreation from "./Components/EventForm/EventForm";
import PostVar from "./Components/PostVar/PostVar";
import ArtistProfile from "./Components/ArtistProfile/ArtistProfile";
import UserFavorites from "./Components/UserFavorites/UserFavorites";
import MyShopping from "./Components/MyShopping/MyShopping";
import Confirm from "./Components/Confirm/Confirm";
import PostHome from "./Components/PostHome/PostHome.jsx";
import UserProfile from "./Components/UserProfile/UserProfile";
import ArtistDashboard from "./Components/ArtistDashboard/ArtistDashboard";

import { useSelector } from "react-redux";

function App() {
    const user = useSelector((state) => state.sessionState?.user);

    const isLogged = user.isLogged;

    const isArtist = user.artista || false;
    // const isAdmin = user.admin || false;
    const token = user.token || null;
    return (
        <BrowserRouter>
            <div className="App w-full h-full">
                <Navbar />

                <Login />
                <Routes>
                    <Route path={"/"} element={<Home />} />

                    <Route
                        exact
                        path={"/register/artist"}
                        element={
                            !isLogged ? <ArtistForm /> : <Navigate to="/" />
                        }
                    />
                    <Route
                        exact
                        path={"/register/user"}
                        element={!isLogged ? <UserForm /> : <Navigate to="/" />}
                    />
                    <Route
                        exact
                        path={"/create/event"}
                        element={
                            isArtist && token ? (
                                <EventCreation />
                            ) : (
                                <Navigate to="/" />
                            )
                        }
                    />

                    <Route
                        path="/favs"
                        element={
                            isLogged && token ? (
                                <UserFavorites />
                            ) : (
                                <Navigate to="/" />
                            )
                        }
                    />

                    <Route
                        path={"/myshopping/:id"}
                        element={
                            isLogged && token ? (
                                <MyShopping />
                            ) : (
                                <Navigate to="/" />
                            )
                        }
                    />
                    <Route path={"/details/:id"} element={<EventDetail />} />

                    <Route path={"/confirm/:token"} element={<Confirm />} />
                    <Route path={"/postVar"} element={<PostVar />} />
                    <Route path={"/postHome"} element={<PostHome />} />
                    <Route
                        path={"/userProfile/:id"}
                        element={<UserProfile />}
                    />
                    <Route
                        path="/artistProfile/:id"
                        element={<ArtistProfile />}
                    />
                    <Route
                        path="/myDashboard"
                        element={<ArtistDashboard />}
                    />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;

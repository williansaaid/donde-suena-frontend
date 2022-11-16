import { Route, Routes, BrowserRouter } from "react-router-dom";

//Components Import
import ArtistForm from "./Components/ArtistForm/ArtistForm";
import Home from "./Components/Home/Home";
import EventDetail from "./Components/EventDetail/EventDetail.jsx";
import UserForm from "./Components/UserForm/UserForm";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import EventCreation from "./Components/EventForm/EventForm";
import UserFavorites from "./Components/UserFavorites/UserFavorites";

// import { LoginGoogle } from "./Components/Login/Login2";
function App() {
    return (
        <BrowserRouter>
            <div className="App w-full h-full">
                <Navbar />
                <Login />
                <Routes>
                    {/* <Route exact path="/login" element={<Login />} /> */}
                    <Route
                        exact
                        path={"/register/artist"}
                        element={<ArtistForm />}
                    />

                    <Route
                        exact
                        path={"/register/user"}
                        element={<UserForm />}
                    />
                    <Route
                        exact
                        path={"/create/event"}
                        element={<EventCreation />}
                    />

                    <Route path={"/"} element={<Home />} />
                    <Route path={"/details/:id"} element={<EventDetail />} />
                    <Route path="/favs" element={<UserFavorites />}/>
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
